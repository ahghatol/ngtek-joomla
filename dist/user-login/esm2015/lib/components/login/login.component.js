/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
//Service
import { LoginService } from '../../providers/login.service';
export class LoginComponent {
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
if (false) {
    /** @type {?} */
    LoginComponent.prototype.loginForm;
    /** @type {?} */
    LoginComponent.prototype.siteUrl;
    /** @type {?} */
    LoginComponent.prototype.sociallogin;
    /** @type {?} */
    LoginComponent.prototype.facebook;
    /** @type {?} */
    LoginComponent.prototype.google;
    /** @type {?} */
    LoginComponent.prototype.navUrl;
    /** @type {?} */
    LoginComponent.prototype.loginUserData;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.loginService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdXNlci1sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBdUIsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUd6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUE7QUFVNUQsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQVN6QixZQUNVLFdBQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLE1BQWM7UUFGZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTGQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTzdDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUN0QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNwQyxDQUFDLENBQUM7SUFFTCxDQUFDOzs7O0lBRUQsSUFBSSxDQUFDLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Ozs7SUFFcEMsT0FBTztRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDdEYsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUNkO2dCQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzNDO2lCQUFJO2dCQUNILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHVCQUF1QixDQUFDLElBQUk7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDY1QkFBcUM7O2FBRXRDOzs7O1lBWlEsV0FBVztZQUtYLFlBQVk7WUFIWixNQUFNOzs7c0JBZVosS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLOzRCQUNMLE1BQU07Ozs7SUFOUCxtQ0FBcUI7O0lBQ3JCLGlDQUF5Qjs7SUFDekIscUNBQThCOztJQUM5QixrQ0FBMkI7O0lBQzNCLGdDQUF5Qjs7SUFDekIsZ0NBQXdCOztJQUN4Qix1Q0FBNkM7Ozs7O0lBRzNDLHFDQUFnQzs7Ozs7SUFDaEMsc0NBQWtDOzs7OztJQUNsQyxnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy9pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vU2VydmljZVxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2xvZ2luLnNlcnZpY2UnXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWpvb21sYS1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIHNpdGVVcmw6IHN0cmluZztcbiAgQElucHV0KCkgc29jaWFsbG9naW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZhY2Vib29rOiBib29sZWFuO1xuICBASW5wdXQoKSBnb29nbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5hdlVybDogc3RyaW5nO1xuICBAT3V0cHV0KCkgbG9naW5Vc2VyRGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdXNlcm5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuXG4gIH1cblxuICBnZXQgZigpIHsgcmV0dXJuIHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzOyB9XG5cbiAgcHVibGljIGRvTG9naW4oKSB7XG4gICAgdGhpcy5sb2dpblNlcnZpY2UuaW5pdCh0aGlzLnNpdGVVcmwpO1xuICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHRoaXMuZi51c2VybmFtZS52YWx1ZSwgdGhpcy5mLnBhc3N3b3JkLnZhbHVlKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgaWYodGhpcy5uYXZVcmwpXG4gICAgICB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLycgKyB0aGlzLm5hdlVybF0pO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMubG9naW5Vc2VyRGF0YS5lbWl0KHJlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRTb2NpYWxTaWduSW5Vc2VyRGF0YShkYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ2dldEZCU2lnbkluVXNlckRhdGEgLSAnLCBkYXRhKTtcbiAgfVxufVxuXG4iXX0=