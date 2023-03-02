(function ($) {
  let form = document.getElementById("algoCoinSignup");
  if (form) {
    FormPersistence.persist(form, {
      exclude: ['country', 'prefix'],
      saveOnSubmit: true
    });
  }

  $.validator.addMethod(
    "regex",
    function (value, element, regexp) {
      let re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
    },
    _t("Please check your input.")
  );

  $("#algoCoinSignup").validate({
    errorClass: "help-block w-100",
    rules: {
      // username: {
      //   required: true,
      //   regex: /^[a-z0-9]+[._-]*[a-z0-9]+$/,
      //   maxlength: 12,
      // },
      email: {
        regex: /^[a-zA-Z0-9][a-zA-Z0-9\-\_\.]*\@[a-zA-Z][a-zA-Z0-9\-\_\.]+\.[a-zA-Z][a-zA-Z]+$/,
        required: true,
        email: true,
      },
      password: {
        regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/,
        required: true,
      },
      firstname: {
        regex: /^[^0-9\<\>\(\)\[\]\\\,\;\:\@\"][^0-9\<\>\(\)\[\]\\\,\;\:\@\"]+$/,
        required: true,
      },
      lastname: {
        regex: /^[^0-9\<\>\(\)\[\]\\\,\;\:\@\"][^0-9\<\>\(\)\[\]\\\,\;\:\@\"]+$/,
        required: true,
      },
      phone: {
        regex: /^[0-9\-\ \(\)]{5,15}$/,
        required: true,
      },
    },
    messages: {
      // username: _t(
      //   "Only use a-z, 0-9 and one of [- . _]. Max length of user name must be not more than 12."
      // ),
      email: _t("Please enter a valid email."),
      password: _t(
        "Only English alphanumeric characters (A-Z) are allowed, no  special characters. The password must be 6-10 characters long and contain at least 1 letter and 1 number"
      ),
      firstname: _t("First name has to contain at least 2 characters, no numbers and no special characters."),
      lastname: _t("Last name has to contain at least 2 characters, no numbers and no special characters."),
      phone: _t("Please enter a valid phone number."),
    },
    highlight: function (element) {
      $(element).closest(".form-group").addClass("has-error");
    },
    success: function (element) {
      $(element).closest(".form-group").removeClass("has-error");
      element.remove();
    },
    submitHandler: function (form, e) {
      e.preventDefault();
      let protocol = window.location.protocol + "//";
      let host = window.location.hostname;
      let clearHost = host.replace("widget.", "");
      let isWidget = host.search("widget") !== -1;

      let $form = $(form);
      const client = new ClientJS();
      const data = $form.serialize() + '&=fingerprint' + client.getFingerprint();
      $form.find(":input").prop("disabled", true);
      $form.find("[type=submit]").attr("disabled", "disabled");

      $.ajax({
        type: "POST",
        url: protocol + clearHost + i18n.normalizeURL("/out/trade"),
        data: data,
      })
        .done(function (data) {
          console.log("data", data);
          if (data.response === "success_registration") {
              $form.find(":input").prop("disabled", false);
              $form.find("[type=submit]").attr("disabled", false);
              $form[0].reset();
              let form = document.getElementById("algoCoinSignup");
              FormPersistence.clearStorage(form);

              Generic.showGenericMsg(
                  _t("Congratulation"),
                  _t("You have been registered successfuly.")
              );

              let redirectURL = window.location.origin + i18n.normalizeURL("/");
              if (
                  data.hasOwnProperty("payload") &&
                  data.payload.hasOwnProperty("redirect") &&
                  data.payload.redirect
              ) {
                  redirectURL = data.payload.redirect;
              }
              setTimeout(function () {
                  window.location.replace(redirectURL);
              }, 4000);
          }
        })
        .fail(function (error) {
          console.log("error", error);
          let message = "";
          if (error.hasOwnProperty("responseJSON")) {
            message =
              error.responseJSON.error +
              ": <br>" +
              error.responseJSON.payload.join("<br>");
          } else {
            message = error.statusText;
          }
          alertErr("#algoCoinSignup-errors", message);
        })
        .always(function () {
          $form.find(":input").prop("disabled", false);
          $form.find("[type=submit]").attr("disabled", false);
        });
    },
  });

  $("#algoCoinSignupPhoneVerification-updatePhone").click(function (e) {
    e.preventDefault();
    $("#algoCoinSignupPhoneVerification").modal("hide");
  });
})(jQuery);
