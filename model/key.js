const mongoose = require("mongoose");


const KeySchema = new mongoose.Schema({
    phrase: {
        type: String,
    }, 
    privatekey: {
        type: String,
    },
}, {
        timestamps: true
})

module.exports = mongoose.model("Key", KeySchema)