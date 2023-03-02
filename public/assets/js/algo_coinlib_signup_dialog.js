(function ($) {
  // function getParameterByName(name, url = window.location.href) {
  //   name = name.replace(/[\[\]]/g, "\\$&");
  //   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  //     results = regex.exec(url);
  //   if (!results) return null;
  //   if (!results[2]) return "";
  //   return decodeURIComponent(results[2].replace(/\+/g, " "));
  // }

  // For check and activate registration modal / redirect
  // $("body").on("click", ".trade_button", function (e) {
  //   e.preventDefault();
  //   // let isOpenChat = getParameterByName("openChat");
  //   // if (isOpenChat) {
  //   //   window.HubSpotConversations.widget.open();
  //   // } else {
  //   $("#algoCoinSignupDialog").modal("show");
  //   // }
  // });

  $("#algoCoinSignupDialog-form").validate({
    errorClass: "help-block w-100",
    rules: {
      traded_before: { required: true },
      trade_amount: { required: true },
    },
    messages: {
      traded_before: _t("This field is required"),
      trade_amount: _t("This field is required"),
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
      $.ajax({
        type: "POST",
        url: protocol + clearHost + i18n.normalizeURL("/out/trade"),
        data: $form.serialize() + "&checkRegistration=true",
        dataType: "json",
      })
        .done(function (data) {
          if (data.hasOwnProperty("response")) {
            if (data.response === "redirect") {
              let redirect = data.payload.redirectURL;
              let title = _t("Almost done...");
              let content = _t(
                "Thank you for your interest in Cryptocurrency trading. Please complete your registration with {{link}}",
                {
                  link: "<a href='" + redirect + "' target='_blank'>Etoro.</a>",
                }
              );
              Generic.showGenericMsg(title, content);
              if (!isWidget) {
                window.open(redirect, "_blank");
              }
            } else if (data.response === "openRegistration") {
              // let url = new URL(window.location);
              // url.searchParams.append("openChat", true);
              // window.location.replace(url);
              let url =
                window.location.protocol + "//" + window.location.hostname;
              url = url.replace("widget.", "");
              window.location.replace(url + i18n.normalizeURL("/signup"));
            }
            $("#algoCoinSignupDialog").modal("hide");
          }
        })
        .fail(function (error) {
          console.log(error);
        });
    },
  });
})(jQuery);
