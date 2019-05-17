/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { AuthService } from 'angularx-social-login';
import { SocialloginService } from '../../providers/sociallogin.service';
import { Router } from '@angular/router';
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
export { SocialloginComponent };
if (false) {
    /** @type {?} */
    SocialloginComponent.prototype.facebook;
    /** @type {?} */
    SocialloginComponent.prototype.google;
    /** @type {?} */
    SocialloginComponent.prototype.siteUrl;
    /** @type {?} */
    SocialloginComponent.prototype.signInUserData;
    /** @type {?} */
    SocialloginComponent.prototype.navUrl;
    /** @type {?} */
    SocialloginComponent.prototype.loggedIn;
    /**
     * @type {?}
     * @private
     */
    SocialloginComponent.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    SocialloginComponent.prototype.socialloginService;
    /**
     * @type {?}
     * @private
     */
    SocialloginComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdXNlci1sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NvY2lhbGxvZ2luL3NvY2lhbGxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFjLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUE7QUFDeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDO0lBY0UsOEJBQW9CLFdBQXdCLEVBQ2xDLGtCQUFzQyxFQUN0QyxNQUFjO1FBRkosZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDbEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTmQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBT3hDLENBQUM7Ozs7SUFFUCx1Q0FBUTs7O0lBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQUk7WUFDeEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwrQ0FBZ0I7OztJQUFoQjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsR0FBRztZQUMvRCxLQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLEdBQUc7Z0JBQ3pFLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixJQUFHLEtBQUksQ0FBQyxNQUFNLEVBQ2hCO29CQUNFLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUMzQztxQkFBSTtvQkFDSCxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDL0I7WUFDRCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDJDQUFZOzs7SUFBWjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsR0FBRztZQUNqRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLEdBQUc7Z0JBQ3pFLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsc0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsR0FBRztZQUNqQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXJERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsc2xCQUEyQzs7aUJBRTVDOzs7O2dCQVJRLFdBQVc7Z0JBQ1gsa0JBQWtCO2dCQUNsQixNQUFNOzs7MkJBU1osS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7aUNBQ0wsTUFBTTt5QkFDTixLQUFLOztJQTRDUiwyQkFBQztDQUFBLEFBdkRELElBdURDO1NBakRZLG9CQUFvQjs7O0lBQy9CLHdDQUEyQjs7SUFDM0Isc0NBQXlCOztJQUN6Qix1Q0FBMEI7O0lBQzFCLDhDQUE4Qzs7SUFDOUMsc0NBQXdCOztJQUV4Qix3Q0FBYzs7Ozs7SUFDRiwyQ0FBZ0M7Ozs7O0lBQzFDLGtEQUE4Qzs7Ozs7SUFDOUMsc0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWNlYm9va0xvZ2luUHJvdmlkZXIsIEdvb2dsZUxvZ2luUHJvdmlkZXIgfSBmcm9tIFwiYW5ndWxhcngtc29jaWFsLWxvZ2luXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgU29jaWFsVXNlciB9IGZyb20gJ2FuZ3VsYXJ4LXNvY2lhbC1sb2dpbic7XG5pbXBvcnQgeyBTb2NpYWxsb2dpblNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvc29jaWFsbG9naW4uc2VydmljZSdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1qb29tbGEtc29jaWFsbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vc29jaWFsbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zb2NpYWxsb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU29jaWFsbG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmYWNlYm9vazogYm9vbGVhbjtcbiAgQElucHV0KCkgZ29vZ2xlOiBib29sZWFuO1xuICBASW5wdXQoKSBzaXRlVXJsIDogc3RyaW5nO1xuICBAT3V0cHV0KCkgc2lnbkluVXNlckRhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIG5hdlVybDogc3RyaW5nO1xuXG4gIGxvZ2dlZEluOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgc29jaWFsbG9naW5TZXJ2aWNlOiBTb2NpYWxsb2dpblNlcnZpY2UsIFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc29jaWFsbG9naW5TZXJ2aWNlLmluaXQodGhpcy5zaXRlVXJsKTtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhTdGF0ZS5zdWJzY3JpYmUoKHVzZXIpID0+IHtcbiAgICAgIHRoaXMubG9nZ2VkSW4gPSAodXNlciAhPSBudWxsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNpZ25JbldpdGhHb29nbGUoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5zaWduSW4oR29vZ2xlTG9naW5Qcm92aWRlci5QUk9WSURFUl9JRCkudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5zb2NpYWxsb2dpblNlcnZpY2UuZG9Tb2NpYWxMb2dpbihyZXMuYXV0aFRva2VuLCByZXMucHJvdmlkZXIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5zaWduSW5Vc2VyRGF0YS5lbWl0KHJlcyk7XG4gICAgICAgIGlmKHRoaXMubmF2VXJsKVxuICAgICAge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nICsgdGhpcy5uYXZVcmxdKTtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLnNpZ25JblVzZXJEYXRhLmVtaXQocmVzKTtcbiAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2lnbkluV2l0aEZCKCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbkluKEZhY2Vib29rTG9naW5Qcm92aWRlci5QUk9WSURFUl9JRCkudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5zb2NpYWxsb2dpblNlcnZpY2UuZG9Tb2NpYWxMb2dpbihyZXMuYXV0aFRva2VuLCByZXMucHJvdmlkZXIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5zaWduSW5Vc2VyRGF0YS5lbWl0KHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNpZ25PdXQoKTogdm9pZCB7XG4gICAgdGhpcy5zb2NpYWxsb2dpblNlcnZpY2UubG9nb3V0KCk7XG4gICAgdGhpcy5hdXRoU2VydmljZS5zaWduT3V0KCkudGhlbihyZXMgPT4ge1xuICAgICAgYWxlcnQoJ1N1Y2Nlc3NmdWxseSBzaWduT3V0Jyk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19