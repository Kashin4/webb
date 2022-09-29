var input = document.querySelector("#phone");
intlTelInput(input, {
  initialCountry: "auto",
  separateDialCode: "true",
  geoIpLookup: function (success, failure) {
    $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "us";
      success(countryCode);
    });
  },
});
var input = document.querySelector("#phone2");
intlTelInput(input, {
  initialCountry: "auto",
  separateDialCode: "true",
  geoIpLookup: function (success, failure) {
    $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "us";
      success(countryCode);
    });
  },
});
var input = document.querySelector("#phone3");
intlTelInput(input, {
    initialCountry: "auto",
    separateDialCode: "true",
  geoIpLookup: function (success, failure) {
    $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "us";
      success(countryCode);
    });
  },
});
