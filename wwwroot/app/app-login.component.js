"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var facebook_connect_1 = require('./services/facebook-connect');
var AppLoginComponent = (function () {
    // constructor
    function AppLoginComponent(facebookConnect) {
        this.facebookConnect = facebookConnect;
    }
    // initialize 
    AppLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // check facebook connecting status
        this.facebookConnect.initSDK(function () {
            _this.facebookConnect.getLoginStatus(_this.loggedIn.bind(_this));
        });
    };
    // login status change
    AppLoginComponent.prototype.loggedIn = function (accessToken) {
        console.log(accessToken);
    };
    AppLoginComponent.prototype.onLoginClicked = function () {
        this.facebookConnect.login(this.loggedIn.bind(this));
    };
    AppLoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: 'app-login.component.html'
        }), 
        __metadata('design:paramtypes', [facebook_connect_1.FacebookConnect])
    ], AppLoginComponent);
    return AppLoginComponent;
}());
exports.AppLoginComponent = AppLoginComponent;
//# sourceMappingURL=app-login.component.js.map