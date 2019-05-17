import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class LoginService {
    private http;
    loginApi: string;
    baseUrl: '';
    headers: any;
    private currentUserSubject;
    currentUser: Observable<any>;
    constructor(http: HttpClient);
    init(siteUrl: any): this;
    login(username: any, password: any): Observable<any>;
    logout(): void;
    getCurrentUser(): any;
    isLoggedIn(): boolean;
}
