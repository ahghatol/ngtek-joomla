/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class LoginService {
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
/** @nocollapse */ LoginService.ngInjectableDef = i0.defineInjectable({ factory: function LoginService_Factory() { return new LoginService(i0.inject(i1.HttpClient)); }, token: LoginService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LoginService.prototype.loginApi;
    /** @type {?} */
    LoginService.prototype.baseUrl;
    /** @type {?} */
    LoginService.prototype.headers;
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.currentUserSubject;
    /** @type {?} */
    LoginService.prototype.currentUser;
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VzZXItbG9naW4vIiwic291cmNlcyI6WyJsaWIvcHJvdmlkZXJzL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS3JDLE1BQU0sT0FBTyxZQUFZOzs7O0lBUXZCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFOcEMsYUFBUSxHQUFXLG9EQUFvRCxDQUFDO1FBT3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7O0lBRU0sSUFBSSxDQUFDLE9BQU87UUFDakIsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU0sS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFROztZQUN6QixRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUU7UUFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUMzQixRQUFRLEVBQ1IsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQy9ELFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUM1QztZQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7O0lBRU0sTUFBTTtRQUNYLGlEQUFpRDtRQUNqRCxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVNLGNBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFTSxVQUFVOztZQUNYLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1FBRWhDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7O1lBcERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLFVBQVU7Ozs7O0lBU2pCLGdDQUF3RTs7SUFDeEUsK0JBQVk7O0lBQ1osK0JBQWE7Ozs7O0lBQ2IsMENBQWlEOztJQUNqRCxtQ0FBb0M7Ozs7O0lBRXhCLDRCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XG5cbiAgbG9naW5BcGk6IHN0cmluZyA9ICcvaW5kZXgucGhwP29wdGlvbj1jb21fYXBpJmFwcD11c2VycyZyZXNvdXJjZT1sb2dpbic7XG4gIGJhc2VVcmw6ICcnO1xuICBoZWFkZXJzOiBhbnk7XG4gIHByaXZhdGUgY3VycmVudFVzZXJTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8YW55PjtcbiAgcHVibGljIGN1cnJlbnRVc2VyOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ1gtQXV0aCc6ICdsb2dpbicgfSk7XG4gICAgdGhpcy5jdXJyZW50VXNlclN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSkpO1xuICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0KHNpdGVVcmwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBzaXRlVXJsO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgIHRoaXMuYmFzZVVybCArIHRoaXMubG9naW5BcGksXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH0pLnBpcGUobWFwKHVzZXIgPT4ge1xuICAgICAgICBpZiAoIXVzZXJbJ2Vycl9jb2RlJ10gJiYgKHVzZXJbJ2RhdGEnXS5hdXRoIHx8IHVzZXJbJ2RhdGEnXS5pZCkpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyWydkYXRhJ10pKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdC5uZXh0KHVzZXJbJ2RhdGEnXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZXJbJ2RhdGEnXTtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgLy8gcmVtb3ZlIHVzZXIgZnJvbSBsb2NhbCBzdG9yYWdlIHRvIGxvZyB1c2VyIG91dFxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xuICAgIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0Lm5leHQobnVsbCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q3VycmVudFVzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0LnZhbHVlO1xuICB9XG5cbiAgcHVibGljIGlzTG9nZ2VkSW4oKSB7XG4gICAgbGV0IHVzZXIgPSB0aGlzLmdldEN1cnJlbnRVc2VyKCk7XG5cbiAgICByZXR1cm4gdXNlci5hdXRoID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==