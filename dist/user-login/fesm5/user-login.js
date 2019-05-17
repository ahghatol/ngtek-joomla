import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Injectable, Component, NgModule, NO_ERRORS_SCHEMA, Input, EventEmitter, Output, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { FacebookLoginProvider, GoogleLoginProvider, AuthService, SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserLoginService = /** @class */ (function () {
    function UserLoginService() {
    }
    UserLoginService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UserLoginService.ctorParameters = function () { return []; };
    /** @nocollapse */ UserLoginService.ngInjectableDef = defineInjectable({ factory: function UserLoginService_Factory() { return new UserLoginService(); }, token: UserLoginService, providedIn: "root" });
    return UserLoginService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent() {
    }
    /**
     * @return {?}
     */
    UserLoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UserLoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngtek-joomla-login',
                    template: "<app-joomla-login></app-joomla-login>\n"
                }] }
    ];
    /** @nocollapse */
    UserLoginComponent.ctorParameters = function () { return []; };
    return UserLoginComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SocialloginService = /** @class */ (function () {
    function SocialloginService(http) {
        this.http = http;
        this.socialloginApi = '/index.php?option=com_api&app=users&resource=jfbconnect';
        this.headers = new HttpHeaders();
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} siteUrl
     * @return {THIS}
     */
    SocialloginService.prototype.init = /**
     * @template THIS
     * @this {THIS}
     * @param {?} siteUrl
     * @return {THIS}
     */
    function (siteUrl) {
        (/** @type {?} */ (this)).baseUrl = siteUrl;
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    SocialloginService.prototype.logout = /**
     * @return {?}
     */
    function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    /**
     * @param {?} accessToken
     * @param {?} provider
     * @return {?}
     */
    SocialloginService.prototype.doSocialLogin = /**
     * @param {?} accessToken
     * @param {?} provider
     * @return {?}
     */
    function (accessToken, provider) {
        var _this = this;
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('Access-Control-Allow-Origin', '*');
        /** @type {?} */
        var userData = {
            'access_token': accessToken,
            'provider': provider
        };
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this.http.post(_this.baseUrl + _this.socialloginApi, userData, { headers: _this.headers })
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                localStorage.setItem('currentUser', JSON.stringify(res['data']));
                _this.currentUserSubject.next(res['data']);
                resolve(res);
                alert(' Login Successfully');
            }));
        }));
    };
    SocialloginService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SocialloginService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ SocialloginService.ngInjectableDef = defineInjectable({ factory: function SocialloginService_Factory() { return new SocialloginService(inject(HttpClient)); }, token: SocialloginService, providedIn: "root" });
    return SocialloginService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SocialloginComponent = /** @class */ (function () {
    function SocialloginComponent(authService, socialloginService, router) {
        this.authService = authService;
        this.socialloginService = socialloginService;
        this.router = router;
        this.signInUserData = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SocialloginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.socialloginService.init(this.siteUrl);
        this.authService.authState.subscribe((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            _this.loggedIn = (user != null);
        }));
    };
    /**
     * @return {?}
     */
    SocialloginComponent.prototype.signInWithGoogle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.socialloginService.doSocialLogin(res.authToken, res.provider).then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.signInUserData.emit(res);
                if (_this.navUrl) {
                    _this.router.navigate(['/' + _this.navUrl]);
                }
                else {
                    _this.signInUserData.emit(res);
                }
            }));
        }));
    };
    /**
     * @return {?}
     */
    SocialloginComponent.prototype.signInWithFB = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.socialloginService.doSocialLogin(res.authToken, res.provider).then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.signInUserData.emit(res);
            }));
        }));
    };
    /**
     * @return {?}
     */
    SocialloginComponent.prototype.signOut = /**
     * @return {?}
     */
    function () {
        this.socialloginService.logout();
        this.authService.signOut().then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            alert('Successfully signOut');
        }));
    };
    SocialloginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-joomla-sociallogin',
                    template: "<button mdbBtn [hidden]=\"!facebook\" color=\"primary\" class=\"mb-3\" block=\"true\"  (click)=\"signInWithFB()\">\n    <span class=\"fa fa-google text-capitalize\"> Sign in with facebook</span>\n  </button>\n  <button mdbBtn [hidden]=\"!google\" color=\"danger\" class=\"mb-3\" block=\"true\"  (click)=\"signInWithGoogle()\">\n   <span class=\"fa fa-google text-capitalize\"> Sign in with Google</span>\n    \n  </button>\n  <button mdbBtn color=\"info\" block=\"true\" class=\"mb-3\" (click)=\"signOut()\">\n    <span class=\"fa fa-google text-capitalize\"> Logout</span>\n  </button>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SocialloginComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: SocialloginService },
        { type: Router }
    ]; };
    SocialloginComponent.propDecorators = {
        facebook: [{ type: Input }],
        google: [{ type: Input }],
        siteUrl: [{ type: Input }],
        signInUserData: [{ type: Output }],
        navUrl: [{ type: Input }]
    };
    return SocialloginComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.loginApi = '/index.php?option=com_api&app=users&resource=login';
        this.headers = new HttpHeaders({ 'X-Auth': 'login' });
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} siteUrl
     * @return {THIS}
     */
    LoginService.prototype.init = /**
     * @template THIS
     * @this {THIS}
     * @param {?} siteUrl
     * @return {THIS}
     */
    function (siteUrl) {
        (/** @type {?} */ (this)).baseUrl = siteUrl;
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    LoginService.prototype.login = /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    function (username, password) {
        var _this = this;
        /** @type {?} */
        var formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        return this.http.post(this.baseUrl + this.loginApi, formData, { headers: this.headers }).pipe(map((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            if (!user['err_code'] && (user['data'].auth || user['data'].id)) {
                localStorage.setItem('currentUser', JSON.stringify(user['data']));
                _this.currentUserSubject.next(user['data']);
            }
            return user['data'];
        })));
    };
    /**
     * @return {?}
     */
    LoginService.prototype.logout = /**
     * @return {?}
     */
    function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    /**
     * @return {?}
     */
    LoginService.prototype.getCurrentUser = /**
     * @return {?}
     */
    function () {
        return this.currentUserSubject.value;
    };
    /**
     * @return {?}
     */
    LoginService.prototype.isLoggedIn = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var user = this.getCurrentUser();
        return user.auth ? true : false;
    };
    LoginService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LoginService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ LoginService.ngInjectableDef = defineInjectable({ factory: function LoginService_Factory() { return new LoginService(inject(HttpClient)); }, token: LoginService, providedIn: "root" });
    return LoginService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, loginService, router) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
        this.loginUserData = new EventEmitter();
    }
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: /**
         * @return {?}
         */
        function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LoginComponent.prototype.doLogin = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loginService.init(this.siteUrl);
        this.loginService.login(this.f.username.value, this.f.password.value).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (_this.navUrl) {
                _this.router.navigate(['/' + _this.navUrl]);
            }
            else {
                _this.loginUserData.emit(res);
            }
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    LoginComponent.prototype.getSocialSignInUserData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        console.log('getFBSignInUserData - ', data);
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-joomla-login',
                    template: "<!-- Default form login -->\n<form class=\"text-center border-light p-3\" [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n\n\n    <p class=\"h4 mb-4\">Sign in</p>\n  \n    <!-- Email -->\n    <input required formControlName=\"username\" type=\"text\" class=\"form-control mb-4\" placeholder=\"E-mail/Username\">\n  \n    <!-- Password -->\n    <input required formControlName=\"password\" type=\"password\" class=\"form-control mb-4\" placeholder=\"Password\">\n  \n    <!-- Sign in button -->\n    <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\"><span class=\"text-capitalize\">Login</span></button>\n  \n    <app-joomla-sociallogin [hidden]=\"!sociallogin\" [navUrl]=\"navUrl\" [siteUrl]=\"siteUrl\" [facebook]=\"facebook\" [google]=\"google\" (signInUserData)=\"getSocialSignInUserData($event)\">\n    </app-joomla-sociallogin>\n  </form>\n  \n  <!-- Default form login -->\n  ",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: LoginService },
        { type: Router }
    ]; };
    LoginComponent.propDecorators = {
        siteUrl: [{ type: Input }],
        sociallogin: [{ type: Input }],
        facebook: [{ type: Input }],
        google: [{ type: Input }],
        navUrl: [{ type: Input }],
        loginUserData: [{ type: Output }]
    };
    return LoginComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var googleClientId = '1005635293950-29g89s87fm0dvj3540rsufta0oguts1l.apps.googleusercontent.com';
/** @type {?} */
var fbAppId = '2037079629930934';
var ɵ0 = GoogleLoginProvider.PROVIDER_ID, ɵ1 = FacebookLoginProvider.PROVIDER_ID;
/** @type {?} */
var config = new AuthServiceConfig([
    {
        id: ɵ0,
        provider: new GoogleLoginProvider(googleClientId)
    },
    {
        id: ɵ1,
        provider: new FacebookLoginProvider(fbAppId)
    }
]);
/**
 * @return {?}
 */
function provideConfig() {
    return config;
}
var UserLoginModule = /** @class */ (function () {
    function UserLoginModule() {
    }
    UserLoginModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        UserLoginComponent,
                        LoginComponent,
                        SocialloginComponent
                    ],
                    imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        ReactiveFormsModule,
                        SocialLoginModule
                        //MDBBootstrapModule.forRoot(),
                    ],
                    exports: [
                        UserLoginComponent,
                        LoginComponent,
                        SocialloginComponent,
                    ],
                    providers: [
                        LoginService,
                        {
                            provide: AuthServiceConfig,
                            useFactory: provideConfig
                        }
                    ],
                    schemas: [NO_ERRORS_SCHEMA]
                },] }
    ];
    return UserLoginModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { UserLoginService, UserLoginComponent, provideConfig, UserLoginModule, LoginComponent, SocialloginComponent, LoginService, SocialloginService as ɵa };

//# sourceMappingURL=user-login.js.map