import { OnInit, EventEmitter } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialloginService } from '../../providers/sociallogin.service';
import { Router } from '@angular/router';
export declare class SocialloginComponent implements OnInit {
    private authService;
    private socialloginService;
    private router;
    facebook: boolean;
    google: boolean;
    siteUrl: string;
    signInUserData: EventEmitter<{}>;
    navUrl: string;
    loggedIn: any;
    constructor(authService: AuthService, socialloginService: SocialloginService, router: Router);
    ngOnInit(): void;
    signInWithGoogle(): void;
    signInWithFB(): void;
    signOut(): void;
}
