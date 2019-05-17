/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SocialloginService {
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
        /** @type {?} */
        let payloaddata = '&access_token=' + accessToken + '&provider=' + provider;
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
/** @nocollapse */ SocialloginService.ngInjectableDef = i0.defineInjectable({ factory: function SocialloginService_Factory() { return new SocialloginService(i0.inject(i1.HttpClient)); }, token: SocialloginService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsbG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VzZXItbG9naW4vIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL3NvY2lhbGxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7QUFLbkQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQU03QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBTHBDLG1CQUFjLEdBQVcseURBQXlELENBQUM7UUFNakYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRTVELENBQUM7Ozs7Ozs7SUFFTSxJQUFJLENBQUMsT0FBTztRQUNqQixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7O0lBRU0sTUFBTTtRQUNYLGlEQUFpRDtRQUNqRCxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLFdBQVcsRUFBRSxRQUFROztZQUM3QixXQUFXLEdBQUcsZ0JBQWdCLEdBQUcsV0FBVyxHQUFHLFlBQVksR0FBRyxRQUFRO1FBRTFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDOztZQUVwRCxRQUFRLEdBQ1o7WUFDRSxjQUFjLEVBQUUsV0FBVztZQUMzQixVQUFVLEVBQUUsUUFBUTtTQUNyQjtRQUVELE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3JGLFNBQVM7Ozs7WUFBQyxHQUFHLENBQUMsRUFBRTtnQkFDZixZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUMvQixDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBaERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLFVBQVU7Ozs7O0lBUWpCLDRDQUFtRjs7SUFDbkYscUNBQVk7O0lBQ1oscUNBQWE7Ozs7O0lBQ2IsZ0RBQWlEOztJQUNqRCx5Q0FBb0M7Ozs7O0lBQ3hCLGtDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNvY2lhbGxvZ2luU2VydmljZSB7XG4gIHNvY2lhbGxvZ2luQXBpOiBzdHJpbmcgPSAnL2luZGV4LnBocD9vcHRpb249Y29tX2FwaSZhcHA9dXNlcnMmcmVzb3VyY2U9amZiY29ubmVjdCc7XG4gIGJhc2VVcmw6ICcnO1xuICBoZWFkZXJzOiBhbnk7XG4gIHByaXZhdGUgY3VycmVudFVzZXJTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8YW55PjtcbiAgcHVibGljIGN1cnJlbnRVc2VyOiBPYnNlcnZhYmxlPGFueT47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJykpKTtcbiAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5jdXJyZW50VXNlclN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgfVxuXG4gIHB1YmxpYyBpbml0KHNpdGVVcmwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBzaXRlVXJsO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGxvZ291dCgpIHtcbiAgICAvLyByZW1vdmUgdXNlciBmcm9tIGxvY2FsIHN0b3JhZ2UgdG8gbG9nIHVzZXIgb3V0XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XG4gICAgdGhpcy5jdXJyZW50VXNlclN1YmplY3QubmV4dChudWxsKTtcbiAgfVxuICBcbiAgZG9Tb2NpYWxMb2dpbihhY2Nlc3NUb2tlbiwgcHJvdmlkZXIpIHtcbiAgICBsZXQgcGF5bG9hZGRhdGEgPSAnJmFjY2Vzc190b2tlbj0nICsgYWNjZXNzVG9rZW4gKyAnJnByb3ZpZGVyPScgKyBwcm92aWRlcjtcblxuICAgIHRoaXMuaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICB0aGlzLmhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuXG4gICAgbGV0IHVzZXJEYXRhID1cbiAgICB7XG4gICAgICAnYWNjZXNzX3Rva2VuJzogYWNjZXNzVG9rZW4sXG4gICAgICAncHJvdmlkZXInOiBwcm92aWRlclxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHsgXG4gICAgICAgdGhpcy5odHRwLnBvc3QodGhpcy5iYXNlVXJsICsgdGhpcy5zb2NpYWxsb2dpbkFwaSwgdXNlckRhdGEsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH0pXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeShyZXNbJ2RhdGEnXSkpO1xuICAgICAgICAgIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0Lm5leHQocmVzWydkYXRhJ10pO1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICBhbGVydCgnIExvZ2luIFN1Y2Nlc3NmdWxseScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19