import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class SocialloginService {
    private http;
    socialloginApi: string;
    baseUrl: '';
    headers: any;
    private currentUserSubject;
    currentUser: Observable<any>;
    constructor(http: HttpClient);
    init(siteUrl: any): this;
    logout(): void;
    doSocialLogin(accessToken: any, provider: any): Promise<{}>;
}
