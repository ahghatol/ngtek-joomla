(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/router'), require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('angularx-social-login')) :
    typeof define === 'function' && define.amd ? define('user-login', ['exports', '@angular/forms', '@angular/router', '@angular/core', '@angular/common/http', 'rxjs', 'rxjs/operators', 'angularx-social-login'], factory) :
    (factory((global['user-login'] = {}),global.ng.forms,global.ng.router,global.ng.core,global.ng.common.http,global.rxjs,global.rxjs.operators,global.angularxSocialLogin));
}(this, (function (exports,forms,router,i0,i1,rxjs,operators,angularxSocialLogin) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserLoginService = /** @class */ (function () {
        function UserLoginService() {
        }
        UserLoginService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UserLoginService.ctorParameters = function () { return []; };
        /** @nocollapse */ UserLoginService.ngInjectableDef = i0.defineInjectable({ factory: function UserLoginService_Factory() { return new UserLoginService(); }, token: UserLoginService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            this.headers = new i1.HttpHeaders();
            this.currentUserSubject = new rxjs.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
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
                ( /** @type {?} */(this)).baseUrl = siteUrl;
                return ( /** @type {?} */(this));
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
                return new Promise(( /**
                 * @param {?} resolve
                 * @return {?}
                 */function (resolve) {
                    _this.http.post(_this.baseUrl + _this.socialloginApi, userData, { headers: _this.headers })
                        .subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                        localStorage.setItem('currentUser', JSON.stringify(res['data']));
                        _this.currentUserSubject.next(res['data']);
                        resolve(res);
                        alert(' Login Successfully');
                    }));
                }));
            };
        SocialloginService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SocialloginService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ SocialloginService.ngInjectableDef = i0.defineInjectable({ factory: function SocialloginService_Factory() { return new SocialloginService(i0.inject(i1.HttpClient)); }, token: SocialloginService, providedIn: "root" });
        return SocialloginService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SocialloginComponent = /** @class */ (function () {
        function SocialloginComponent(authService, socialloginService, router$$1) {
            this.authService = authService;
            this.socialloginService = socialloginService;
            this.router = router$$1;
            this.signInUserData = new i0.EventEmitter();
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
                this.authService.authState.subscribe(( /**
                 * @param {?} user
                 * @return {?}
                 */function (user) {
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
                this.authService.signIn(angularxSocialLogin.GoogleLoginProvider.PROVIDER_ID).then(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.socialloginService.doSocialLogin(res.authToken, res.provider).then(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
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
                this.authService.signIn(angularxSocialLogin.FacebookLoginProvider.PROVIDER_ID).then(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.socialloginService.doSocialLogin(res.authToken, res.provider).then(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
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
                this.authService.signOut().then(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    alert('Successfully signOut');
                }));
            };
        SocialloginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-joomla-sociallogin',
                        template: "<button mdbBtn [hidden]=\"!facebook\" color=\"primary\" class=\"mb-3\" block=\"true\"  (click)=\"signInWithFB()\">\n    <span class=\"fa fa-google text-capitalize\"> Sign in with facebook</span>\n  </button>\n  <button mdbBtn [hidden]=\"!google\" color=\"danger\" class=\"mb-3\" block=\"true\"  (click)=\"signInWithGoogle()\">\n   <span class=\"fa fa-google text-capitalize\"> Sign in with Google</span>\n    \n  </button>\n  <button mdbBtn color=\"info\" block=\"true\" class=\"mb-3\" (click)=\"signOut()\">\n    <span class=\"fa fa-google text-capitalize\"> Logout</span>\n  </button>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SocialloginComponent.ctorParameters = function () {
            return [
                { type: angularxSocialLogin.AuthService },
                { type: SocialloginService },
                { type: router.Router }
            ];
        };
        SocialloginComponent.propDecorators = {
            facebook: [{ type: i0.Input }],
            google: [{ type: i0.Input }],
            siteUrl: [{ type: i0.Input }],
            signInUserData: [{ type: i0.Output }],
            navUrl: [{ type: i0.Input }]
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
            this.headers = new i1.HttpHeaders({ 'X-Auth': 'login' });
            this.currentUserSubject = new rxjs.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
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
                ( /** @type {?} */(this)).baseUrl = siteUrl;
                return ( /** @type {?} */(this));
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
                return this.http.post(this.baseUrl + this.loginApi, formData, { headers: this.headers }).pipe(operators.map(( /**
                 * @param {?} user
                 * @return {?}
                 */function (user) {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LoginService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ LoginService.ngInjectableDef = i0.defineInjectable({ factory: function LoginService_Factory() { return new LoginService(i0.inject(i1.HttpClient)); }, token: LoginService, providedIn: "root" });
        return LoginService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginComponent = /** @class */ (function () {
        function LoginComponent(formBuilder, loginService, router$$1) {
            this.formBuilder = formBuilder;
            this.loginService = loginService;
            this.router = router$$1;
            this.loginUserData = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.loginForm = this.formBuilder.group({
                    username: ['', forms.Validators.required],
                    password: ['', forms.Validators.required]
                });
            };
        Object.defineProperty(LoginComponent.prototype, "f", {
            get: /**
             * @return {?}
             */ function () { return this.loginForm.controls; },
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
                this.loginService.login(this.f.username.value, this.f.password.value).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
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
            { type: i0.Component, args: [{
                        selector: 'app-joomla-login',
                        template: "<!-- Default form login -->\n<form class=\"text-center border-light p-3\" [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n\n\n    <p class=\"h4 mb-4\">Sign in</p>\n  \n    <!-- Email -->\n    <input required formControlName=\"username\" type=\"text\" class=\"form-control mb-4\" placeholder=\"E-mail/Username\">\n  \n    <!-- Password -->\n    <input required formControlName=\"password\" type=\"password\" class=\"form-control mb-4\" placeholder=\"Password\">\n  \n    <!-- Sign in button -->\n    <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\"><span class=\"text-capitalize\">Login</span></button>\n  \n    <app-joomla-sociallogin [hidden]=\"!sociallogin\" [navUrl]=\"navUrl\" [siteUrl]=\"siteUrl\" [facebook]=\"facebook\" [google]=\"google\" (signInUserData)=\"getSocialSignInUserData($event)\">\n    </app-joomla-sociallogin>\n  </form>\n  \n  <!-- Default form login -->\n  ",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        LoginComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: LoginService },
                { type: router.Router }
            ];
        };
        LoginComponent.propDecorators = {
            siteUrl: [{ type: i0.Input }],
            sociallogin: [{ type: i0.Input }],
            facebook: [{ type: i0.Input }],
            google: [{ type: i0.Input }],
            navUrl: [{ type: i0.Input }],
            loginUserData: [{ type: i0.Output }]
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
    var ɵ0 = angularxSocialLogin.GoogleLoginProvider.PROVIDER_ID, ɵ1 = angularxSocialLogin.FacebookLoginProvider.PROVIDER_ID;
    /** @type {?} */
    var config = new angularxSocialLogin.AuthServiceConfig([
        {
            id: ɵ0,
            provider: new angularxSocialLogin.GoogleLoginProvider(googleClientId)
        },
        {
            id: ɵ1,
            provider: new angularxSocialLogin.FacebookLoginProvider(fbAppId)
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
            { type: i0.NgModule, args: [{
                        declarations: [
                            UserLoginComponent,
                            LoginComponent,
                            SocialloginComponent
                        ],
                        imports: [
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            i1.HttpClientModule,
                            forms.ReactiveFormsModule,
                            angularxSocialLogin.SocialLoginModule
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
                                provide: angularxSocialLogin.AuthServiceConfig,
                                useFactory: provideConfig
                            }
                        ],
                        schemas: [i0.NO_ERRORS_SCHEMA]
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

    exports.UserLoginService = UserLoginService;
    exports.UserLoginComponent = UserLoginComponent;
    exports.provideConfig = provideConfig;
    exports.UserLoginModule = UserLoginModule;
    exports.LoginComponent = LoginComponent;
    exports.SocialloginComponent = SocialloginComponent;
    exports.LoginService = LoginService;
    exports.ɵa = SocialloginService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=user-login.umd.js.map