/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
        /** @type {?} */
        var payloaddata = '&access_token=' + accessToken + '&provider=' + provider;
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
    /** @nocollapse */ SocialloginService.ngInjectableDef = i0.defineInjectable({ factory: function SocialloginService_Factory() { return new SocialloginService(i0.inject(i1.HttpClient)); }, token: SocialloginService, providedIn: "root" });
    return SocialloginService;
}());
export { SocialloginService };
if (false) {
    /** @type {?} */
    SocialloginService.prototype.socialloginApi;
    /** @type {?} */
    SocialloginService.prototype.baseUrl;
    /** @type {?} */
    SocialloginService.prototype.headers;
    /**
     * @type {?}
     * @private
     */
    SocialloginService.prototype.currentUserSubject;
    /** @type {?} */
    SocialloginService.prototype.currentUser;
    /**
     * @type {?}
     * @private
     */
    SocialloginService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsbG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VzZXItbG9naW4vIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NvY2lhbGxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7QUFFbkQ7SUFTRSw0QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUxwQyxtQkFBYyxHQUFXLHlEQUF5RCxDQUFDO1FBTWpGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUU1RCxDQUFDOzs7Ozs7O0lBRU0saUNBQUk7Ozs7OztJQUFYLFVBQVksT0FBTztRQUNqQixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7O0lBRU0sbUNBQU07OztJQUFiO1FBQ0UsaURBQWlEO1FBQ2pELFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCwwQ0FBYTs7Ozs7SUFBYixVQUFjLFdBQVcsRUFBRSxRQUFRO1FBQW5DLGlCQXFCQzs7WUFwQkssV0FBVyxHQUFHLGdCQUFnQixHQUFHLFdBQVcsR0FBRyxZQUFZLEdBQUcsUUFBUTtRQUUxRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQzs7WUFFcEQsUUFBUSxHQUNaO1lBQ0UsY0FBYyxFQUFFLFdBQVc7WUFDM0IsVUFBVSxFQUFFLFFBQVE7U0FDckI7UUFFRCxPQUFPLElBQUksT0FBTzs7OztRQUFDLFVBQUEsT0FBTztZQUN2QixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDckYsU0FBUzs7OztZQUFDLFVBQUEsR0FBRztnQkFDWixZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUMvQixDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBaERGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsVUFBVTs7OzZCQURuQjtDQXNEQyxBQWpERCxJQWlEQztTQTlDWSxrQkFBa0I7OztJQUM3Qiw0Q0FBbUY7O0lBQ25GLHFDQUFZOztJQUNaLHFDQUFhOzs7OztJQUNiLGdEQUFpRDs7SUFDakQseUNBQW9DOzs7OztJQUN4QixrQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTb2NpYWxsb2dpblNlcnZpY2Uge1xuICBzb2NpYWxsb2dpbkFwaTogc3RyaW5nID0gJy9pbmRleC5waHA/b3B0aW9uPWNvbV9hcGkmYXBwPXVzZXJzJnJlc291cmNlPWpmYmNvbm5lY3QnO1xuICBiYXNlVXJsOiAnJztcbiAgaGVhZGVyczogYW55O1xuICBwcml2YXRlIGN1cnJlbnRVc2VyU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PGFueT47XG4gIHB1YmxpYyBjdXJyZW50VXNlcjogT2JzZXJ2YWJsZTxhbnk+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpKSk7XG4gICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMuY3VycmVudFVzZXJTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIH1cblxuICBwdWJsaWMgaW5pdChzaXRlVXJsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gc2l0ZVVybDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgLy8gcmVtb3ZlIHVzZXIgZnJvbSBsb2NhbCBzdG9yYWdlIHRvIGxvZyB1c2VyIG91dFxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xuICAgIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0Lm5leHQobnVsbCk7XG4gIH1cbiAgXG4gIGRvU29jaWFsTG9naW4oYWNjZXNzVG9rZW4sIHByb3ZpZGVyKSB7XG4gICAgbGV0IHBheWxvYWRkYXRhID0gJyZhY2Nlc3NfdG9rZW49JyArIGFjY2Vzc1Rva2VuICsgJyZwcm92aWRlcj0nICsgcHJvdmlkZXI7XG5cbiAgICB0aGlzLmhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgdGhpcy5oZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcblxuICAgIGxldCB1c2VyRGF0YSA9XG4gICAge1xuICAgICAgJ2FjY2Vzc190b2tlbic6IGFjY2Vzc1Rva2VuLFxuICAgICAgJ3Byb3ZpZGVyJzogcHJvdmlkZXJcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7IFxuICAgICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArIHRoaXMuc29jaWFsbG9naW5BcGksIHVzZXJEYXRhLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRVc2VyJywgSlNPTi5zdHJpbmdpZnkocmVzWydkYXRhJ10pKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdC5uZXh0KHJlc1snZGF0YSddKTtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgYWxlcnQoJyBMb2dpbiBTdWNjZXNzZnVsbHknKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==