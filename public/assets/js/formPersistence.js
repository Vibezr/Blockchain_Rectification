const FormPersistence = (function () {
    function persist(form, options) {
        let defaults = {
            saveOnSubmit: false
        }
        let config = Object.assign({}, defaults, options)
        load(form, config)
        // Some devices like ios safari do not support beforeunload events.
        // Unload event does not work in some situations, so we use both unload/beforeunload
        // and remove the unload event if the beforeunload event fires successfully.
        // If problems persist, we can add listeners on the pagehide event as well.
        let saveForm = () => save(form, config)
        let saveFormBeforeUnload = () => {
            window.removeEventListener('unload', saveForm)
            saveForm()
        }
        window.addEventListener('beforeunload', saveFormBeforeUnload)
        window.addEventListener('unload', saveForm)
        if (!config.saveOnSubmit) {
            form.addEventListener('submit', () => {
                window.removeEventListener('beforeunload', saveFormBeforeUnload)
                window.removeEventListener('unload', saveForm)
                clearStorage(form, config)
            })
        }
    }

    function serialize(form, options) {
        let defaults = {
            include: [],
            exclude: [],
            includeFilter: null,
            excludeFilter: null
        }
        let config = Object.assign({}, defaults, options)
        let data = {}
        for (let element of form.elements) {
            let tag = element.tagName
            let type = element.type
            if (tag === 'INPUT' && (type === 'password' || type === 'file')) {
                continue // do not serialize passwords or files
            }
            if (isNameFiltered(element.name, config.include, config.exclude)
                || isElementFiltered(element, config.includeFilter, config.excludeFilter)) {
                continue
            }
            if (tag === 'INPUT') {
                let type = element.type
                if (type === 'radio') {
                    if (element.checked) {
                        pushToArray(data, element.name, element.value)
                    }
                } else if (type === 'checkbox') {
                    pushToArray(data, element.name, element.checked)
                } else {
                    pushToArray(data, element.name, element.value)
                }
            } else if (tag === 'TEXTAREA') {
                pushToArray(data, element.name, element.value)
            } else if (tag === 'SELECT') {
                if (element.multiple) {
                    for (let option of element.options) {
                        if (option.selected) {
                            pushToArray(data, element.name, option.value)
                        }
                    }
                } else {
                    pushToArray(data, element.name, element.value)
                }
            }
        }
        return data
    }

    /**
     * Add a value to an object, creating an array to place it in if needed.
     */
    function pushToArray(dict, key, value) {
        if (!(key in dict)) {
            dict[key] = []
        }
        dict[key].push(value)
    }

    /**
     * Checks if the given name should be filtered out.
     */
    function isNameFiltered(name, include, exclude) {
        if (!name) {
            return true
        }
        if (exclude.includes(name)) {
            return true
        }
        if (include.length > 0 && !include.includes(name)) {
            return true
        }
        return false
    }

    /**
     * Checks if the given element should be filtered out, either by name or by predicate.
     */
    function isElementFiltered(element, includeFilter, excludeFilter) {
        if (excludeFilter && excludeFilter(element)) {
            return true
        }
        if (includeFilter && !includeFilter(element)) {
            return true
        }
        return false
    }

    function save(form, options) {
        let defaults = {
            uuid: null,
            useSessionStorage: false
        }
        let config = Object.assign({}, defaults, options)
        let data = serialize(form, config)
        let storage = config.useSessionStorage ? sessionStorage : localStorage
        storage.setItem(getStorageKey(form, config.uuid), JSON.stringify(data))
    }

    function deserialize(form, data, options) {
        let defaults = {
            valueFunctions: null,
            include: [],
            exclude: [],
            includeFilter: null,
            excludeFilter: null
        }
        let config = Object.assign({}, defaults, options)
        // apply given value functions first
        let speciallyHandled = []
        if (config.valueFunctions !== null) {
            speciallyHandled = applySpecialHandlers(data, form, config)
        }
        // fill remaining values normally
        for (let name in data) {
            if (isNameFiltered(name, config.include, config.exclude)) {
                continue
            }
            if (!speciallyHandled.includes(name)) {
                let inputs = [...form.elements].filter(element => element.name === name
                    && !isElementFiltered(element, config.includeFilter, config.excludeFilter))
                inputs.forEach((input, i) => {
                    applyValues(input, data[name], i)
                })
            }
        }
    }

    function load(form, options) {
        let defaults = {
            uuid: null,
            useSessionStorage: false
        }
        let config = Object.assign({}, defaults, options)
        let storage = config.useSessionStorage ? sessionStorage : localStorage
        let json = storage.getItem(getStorageKey(form, config.uuid))
        if (json) {
            let data = JSON.parse(json)
            deserialize(form, data, options)
        }
    }

    function clearStorage(form, options) {
        let defaults = {
            uuid: null,
            useSessionStorage: false
        }
        let config = Object.assign({}, defaults, options)
        let storage = config.useSessionStorage ? sessionStorage : localStorage
        storage.removeItem(getStorageKey(form, config.uuid))
    }

    function applyValues(element, values, index) {
        let tag = element.tagName
        if (tag === 'INPUT') {
            let type = element.type
            if (type === 'radio') {
                element.checked = (element.value === values[0])
            } else if (type === 'checkbox') {
                element.checked = values[index]
            } else {
                element.value = values[index]
            }
        } else if (tag === 'TEXTAREA') {
            element.value = values[index]
        } else if (tag === 'SELECT') {
            if (element.multiple) {
                for (let option of element.options) {
                    option.selected = values.includes(option.value)
                }
            } else {
                element.value = values[index]
            }
        }
    }

    function applySpecialHandlers(data, form, options) {
        let speciallyHandled = []
        for (let fnName in options.valueFunctions) {
            if (fnName in data) {
                if (isNameFiltered(fnName, options.include, options.exclude)) {
                    continue
                }
                for (let value of data[fnName]) {
                    options.valueFunctions[fnName](form, value)
                }
                speciallyHandled.push(fnName)
            }
        }
        return speciallyHandled
    }

    function getStorageKey(form, uuid) {
        if (!uuid && !form.id) {
            throw Error('form persistence requires a form id or uuid')
        }
        return 'form#' + (uuid ? uuid : form.id)
    }

    return {
        persist: persist,
        load: load,
        save: save,
        clearStorage: clearStorage,
        serialize: serialize,
        deserialize: deserialize
    }
})();

(function () {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = exports = FormPersistence
    }
})();