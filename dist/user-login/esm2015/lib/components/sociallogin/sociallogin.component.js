/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { AuthService } from 'angularx-social-login';
import { SocialloginService } from '../../providers/sociallogin.service';
import { Router } from '@angular/router';
export class SocialloginComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdXNlci1sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NvY2lhbGxvZ2luL3NvY2lhbGxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFjLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUE7QUFDeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7OztJQVEvQixZQUFvQixXQUF3QixFQUNsQyxrQkFBc0MsRUFDdEMsTUFBYztRQUZKLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2xDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU5kLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU94QyxDQUFDOzs7O0lBRVAsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSTs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUNoQjtvQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztpQkFDM0M7cUJBQUk7b0JBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQy9CO1lBQ0QsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3BFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSTs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFyREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHNsQkFBMkM7O2FBRTVDOzs7O1lBUlEsV0FBVztZQUNYLGtCQUFrQjtZQUNsQixNQUFNOzs7dUJBU1osS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7NkJBQ0wsTUFBTTtxQkFDTixLQUFLOzs7O0lBSk4sd0NBQTJCOztJQUMzQixzQ0FBeUI7O0lBQ3pCLHVDQUEwQjs7SUFDMUIsOENBQThDOztJQUM5QyxzQ0FBd0I7O0lBRXhCLHdDQUFjOzs7OztJQUNGLDJDQUFnQzs7Ozs7SUFDMUMsa0RBQThDOzs7OztJQUM5QyxzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhY2Vib29rTG9naW5Qcm92aWRlciwgR29vZ2xlTG9naW5Qcm92aWRlciB9IGZyb20gXCJhbmd1bGFyeC1zb2NpYWwtbG9naW5cIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBTb2NpYWxVc2VyIH0gZnJvbSAnYW5ndWxhcngtc29jaWFsLWxvZ2luJztcbmltcG9ydCB7IFNvY2lhbGxvZ2luU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9zb2NpYWxsb2dpbi5zZXJ2aWNlJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWpvb21sYS1zb2NpYWxsb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zb2NpYWxsb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NvY2lhbGxvZ2luLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTb2NpYWxsb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZhY2Vib29rOiBib29sZWFuO1xuICBASW5wdXQoKSBnb29nbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNpdGVVcmwgOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBzaWduSW5Vc2VyRGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgbmF2VXJsOiBzdHJpbmc7XG5cbiAgbG9nZ2VkSW46IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzb2NpYWxsb2dpblNlcnZpY2U6IFNvY2lhbGxvZ2luU2VydmljZSwgXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zb2NpYWxsb2dpblNlcnZpY2UuaW5pdCh0aGlzLnNpdGVVcmwpO1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuYXV0aFN0YXRlLnN1YnNjcmliZSgodXNlcikgPT4ge1xuICAgICAgdGhpcy5sb2dnZWRJbiA9ICh1c2VyICE9IG51bGwpO1xuICAgIH0pO1xuICB9XG5cbiAgc2lnbkluV2l0aEdvb2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25JbihHb29nbGVMb2dpblByb3ZpZGVyLlBST1ZJREVSX0lEKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnNvY2lhbGxvZ2luU2VydmljZS5kb1NvY2lhbExvZ2luKHJlcy5hdXRoVG9rZW4sIHJlcy5wcm92aWRlcikudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnNpZ25JblVzZXJEYXRhLmVtaXQocmVzKTtcbiAgICAgICAgaWYodGhpcy5uYXZVcmwpXG4gICAgICB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLycgKyB0aGlzLm5hdlVybF0pO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuc2lnbkluVXNlckRhdGEuZW1pdChyZXMpO1xuICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzaWduSW5XaXRoRkIoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5zaWduSW4oRmFjZWJvb2tMb2dpblByb3ZpZGVyLlBST1ZJREVSX0lEKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnNvY2lhbGxvZ2luU2VydmljZS5kb1NvY2lhbExvZ2luKHJlcy5hdXRoVG9rZW4sIHJlcy5wcm92aWRlcikudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnNpZ25JblVzZXJEYXRhLmVtaXQocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2lnbk91dCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvY2lhbGxvZ2luU2VydmljZS5sb2dvdXQoKTtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25PdXQoKS50aGVuKHJlcyA9PiB7XG4gICAgICBhbGVydCgnU3VjY2Vzc2Z1bGx5IHNpZ25PdXQnKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=