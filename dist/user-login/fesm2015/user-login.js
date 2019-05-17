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
class UserLoginService {
    constructor() { }
}
UserLoginService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UserLoginService.ctorParameters = () => [];
/** @nocollapse */ UserLoginService.ngInjectableDef = defineInjectable({ factory: function UserLoginService_Factory() { return new UserLoginService(); }, token: UserLoginService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserLoginComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
UserLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngtek-joomla-login',
                template: "<app-joomla-login></app-joomla-login>\n"
            }] }
];
/** @nocollapse */
UserLoginComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SocialloginService {
    /**
     * @param {?} http
     */
    constructor(http) {
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
    init(siteUrl) {
        (/** @type {?} */ (this)).baseUrl = siteUrl;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    /**
     * @param {?} accessToken
     * @param {?} provider
     * @return {?}
     */
    doSocialLogin(accessToken, provider) {
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('Access-Control-Allow-Origin', '*');
        /** @type {?} */
        let userData = {
            'access_token': accessToken,
            'provider': provider
        };
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this.http.post(this.baseUrl + this.socialloginApi, userData, { headers: this.headers })
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                localStorage.setItem('currentUser', JSON.stringify(res['data']));
                this.currentUserSubject.next(res['data']);
                resolve(res);
                alert(' Login Successfully');
            }));
        }));
    }
}
SocialloginService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SocialloginService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ SocialloginService.ngInjectableDef = defineInjectable({ factory: function SocialloginService_Factory() { return new SocialloginService(inject(HttpClient)); }, token: SocialloginService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SocialloginComponent {
    /**
     * @param {?} authService
     * @param {?} socialloginService
     * @param {?} router
     */
    constructor(authService, socialloginService, router) {
        this.authService = authService;
        this.socialloginService = socialloginService;
        this.router = router;
        this.signInUserData = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.socialloginService.init(this.siteUrl);
        this.authService.authState.subscribe((/**
         * @param {?} user
         * @return {?}
         */
        (user) => {
            this.loggedIn = (user != null);
        }));
    }
    /**
     * @return {?}
     */
    signInWithGoogle() {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.socialloginService.doSocialLogin(res.authToken, res.provider).then((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                this.signInUserData.emit(res);
                if (this.navUrl) {
                    this.router.navigate(['/' + this.navUrl]);
                }
                else {
                    this.signInUserData.emit(res);
                }
            }));
        }));
    }
    /**
     * @return {?}
     */
    signInWithFB() {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.socialloginService.doSocialLogin(res.authToken, res.provider).then((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                this.signInUserData.emit(res);
            }));
        }));
    }
    /**
     * @return {?}
     */
    signOut() {
        this.socialloginService.logout();
        this.authService.signOut().then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            alert('Successfully signOut');
        }));
    }
}
SocialloginComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-joomla-sociallogin',
                template: "<button mdbBtn [hidden]=\"!facebook\" color=\"primary\" class=\"mb-3\" block=\"true\"  (click)=\"signInWithFB()\">\n    <span class=\"fa fa-google text-capitalize\"> Sign in with facebook</span>\n  </button>\n  <button mdbBtn [hidden]=\"!google\" color=\"danger\" class=\"mb-3\" block=\"true\"  (click)=\"signInWithGoogle()\">\n   <span class=\"fa fa-google text-capitalize\"> Sign in with Google</span>\n    \n  </button>\n  <button mdbBtn color=\"info\" block=\"true\" class=\"mb-3\" (click)=\"signOut()\">\n    <span class=\"fa fa-google text-capitalize\"> Logout</span>\n  </button>",
                styles: [""]
            }] }
];
/** @nocollapse */
SocialloginComponent.ctorParameters = () => [
    { type: AuthService },
    { type: SocialloginService },
    { type: Router }
];
SocialloginComponent.propDecorators = {
    facebook: [{ type: Input }],
    google: [{ type: Input }],
    siteUrl: [{ type: Input }],
    signInUserData: [{ type: Output }],
    navUrl: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginService {
    /**
     * @param {?} http
     */
    constructor(http) {
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
    init(siteUrl) {
        (/** @type {?} */ (this)).baseUrl = siteUrl;
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    login(username, password) {
        /** @type {?} */
        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        return this.http.post(this.baseUrl + this.loginApi, formData, { headers: this.headers }).pipe(map((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            if (!user['err_code'] && (user['data'].auth || user['data'].id)) {
                localStorage.setItem('currentUser', JSON.stringify(user['data']));
                this.currentUserSubject.next(user['data']);
            }
            return user['data'];
        })));
    }
    /**
     * @return {?}
     */
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    /**
     * @return {?}
     */
    getCurrentUser() {
        return this.currentUserSubject.value;
    }
    /**
     * @return {?}
     */
    isLoggedIn() {
        /** @type {?} */
        let user = this.getCurrentUser();
        return user.auth ? true : false;
    }
}
LoginService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LoginService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ LoginService.ngInjectableDef = defineInjectable({ factory: function LoginService_Factory() { return new LoginService(inject(HttpClient)); }, token: LoginService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginComponent {
    /**
     * @param {?} formBuilder
     * @param {?} loginService
     * @param {?} router
     */
    constructor(formBuilder, loginService, router) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
        this.loginUserData = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    /**
     * @return {?}
     */
    get f() { return this.loginForm.controls; }
    /**
     * @return {?}
     */
    doLogin() {
        this.loginService.init(this.siteUrl);
        this.loginService.login(this.f.username.value, this.f.password.value).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (this.navUrl) {
                this.router.navigate(['/' + this.navUrl]);
            }
            else {
                this.loginUserData.emit(res);
            }
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getSocialSignInUserData(data) {
        console.log('getFBSignInUserData - ', data);
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-joomla-login',
                template: "<!-- Default form login -->\n<form class=\"text-center border-light p-3\" [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n\n\n    <p class=\"h4 mb-4\">Sign in</p>\n  \n    <!-- Email -->\n    <input required formControlName=\"username\" type=\"text\" class=\"form-control mb-4\" placeholder=\"E-mail/Username\">\n  \n    <!-- Password -->\n    <input required formControlName=\"password\" type=\"password\" class=\"form-control mb-4\" placeholder=\"Password\">\n  \n    <!-- Sign in button -->\n    <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\"><span class=\"text-capitalize\">Login</span></button>\n  \n    <app-joomla-sociallogin [hidden]=\"!sociallogin\" [navUrl]=\"navUrl\" [siteUrl]=\"siteUrl\" [facebook]=\"facebook\" [google]=\"google\" (signInUserData)=\"getSocialSignInUserData($event)\">\n    </app-joomla-sociallogin>\n  </form>\n  \n  <!-- Default form login -->\n  ",
                styles: [""]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: LoginService },
    { type: Router }
];
LoginComponent.propDecorators = {
    siteUrl: [{ type: Input }],
    sociallogin: [{ type: Input }],
    facebook: [{ type: Input }],
    google: [{ type: Input }],
    navUrl: [{ type: Input }],
    loginUserData: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let googleClientId = '1005635293950-29g89s87fm0dvj3540rsufta0oguts1l.apps.googleusercontent.com';
/** @type {?} */
let fbAppId = '2037079629930934';
const ɵ0 = GoogleLoginProvider.PROVIDER_ID, ɵ1 = FacebookLoginProvider.PROVIDER_ID;
/** @type {?} */
let config = new AuthServiceConfig([
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
class UserLoginModule {
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