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
export { LoginComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdXNlci1sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBdUIsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUd6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUE7QUFHNUQ7SUFnQkUsd0JBQ1UsV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsTUFBYztRQUZkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMZCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFPN0MsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVELHNCQUFJLDZCQUFDOzs7O1FBQUwsY0FBVSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7Ozs7SUFFcEMsZ0NBQU87OztJQUFkO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDbEYsSUFBRyxLQUFJLENBQUMsTUFBTSxFQUNkO2dCQUNFLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzNDO2lCQUFJO2dCQUNILEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGdEQUF1Qjs7OztJQUF2QixVQUF3QixJQUFJO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qiw2NUJBQXFDOztpQkFFdEM7Ozs7Z0JBWlEsV0FBVztnQkFLWCxZQUFZO2dCQUhaLE1BQU07OzswQkFlWixLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7Z0NBQ0wsTUFBTTs7SUFrQ1QscUJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQXpDWSxjQUFjOzs7SUFDekIsbUNBQXFCOztJQUNyQixpQ0FBeUI7O0lBQ3pCLHFDQUE4Qjs7SUFDOUIsa0NBQTJCOztJQUMzQixnQ0FBeUI7O0lBQ3pCLGdDQUF3Qjs7SUFDeEIsdUNBQTZDOzs7OztJQUczQyxxQ0FBZ0M7Ozs7O0lBQ2hDLHNDQUFrQzs7Ozs7SUFDbEMsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vL1NlcnZpY2VcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9sb2dpbi5zZXJ2aWNlJ1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1qb29tbGEtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBzaXRlVXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNvY2lhbGxvZ2luOiBib29sZWFuO1xuICBASW5wdXQoKSBmYWNlYm9vazogYm9vbGVhbjtcbiAgQElucHV0KCkgZ29vZ2xlOiBib29sZWFuO1xuICBASW5wdXQoKSBuYXZVcmw6IHN0cmluZztcbiAgQE91dHB1dCgpIGxvZ2luVXNlckRhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHVzZXJuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcblxuICB9XG5cbiAgZ2V0IGYoKSB7IHJldHVybiB0aGlzLmxvZ2luRm9ybS5jb250cm9sczsgfVxuXG4gIHB1YmxpYyBkb0xvZ2luKCkge1xuICAgIHRoaXMubG9naW5TZXJ2aWNlLmluaXQodGhpcy5zaXRlVXJsKTtcbiAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbih0aGlzLmYudXNlcm5hbWUudmFsdWUsIHRoaXMuZi5wYXNzd29yZC52YWx1ZSkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgIGlmKHRoaXMubmF2VXJsKVxuICAgICAge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nICsgdGhpcy5uYXZVcmxdKTtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLmxvZ2luVXNlckRhdGEuZW1pdChyZXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U29jaWFsU2lnbkluVXNlckRhdGEoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdnZXRGQlNpZ25JblVzZXJEYXRhIC0gJywgZGF0YSk7XG4gIH1cbn1cblxuIl19