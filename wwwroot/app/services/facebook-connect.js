"use strict";
/// the facebook connect service
var FacebookConnect = (function () {
    function FacebookConnect() {
    }
    // initialize SDK
    FacebookConnect.prototype.initSDK = function (callBack) {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1727130914235954',
                xfbml: false,
                version: 'v2.6'
            });
            callBack();
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };
    // check login status
    FacebookConnect.prototype.getLoginStatus = function (response) {
        FB.getLoginStatus(function (data) {
            console.log(data.authResponse);
            response(data.authResponse.accessToken);
        });
    };
    // login
    FacebookConnect.prototype.login = function (response) {
        FB.login(function (data) {
            response(data.accessToken);
        });
    };
    return FacebookConnect;
}());
exports.FacebookConnect = FacebookConnect;
//# sourceMappingURL=facebook-connect.js.map