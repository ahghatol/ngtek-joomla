import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../providers/login.service';
export declare class LoginComponent implements OnInit {
    private formBuilder;
    private loginService;
    private router;
    loginForm: FormGroup;
    siteUrl: string;
    sociallogin: boolean;
    facebook: boolean;
    google: boolean;
    navUrl: string;
    loginUserData: EventEmitter<{}>;
    constructor(formBuilder: FormBuilder, loginService: LoginService, router: Router);
    ngOnInit(): void;
    readonly f: {
        [key: string]: import("@angular/forms").AbstractControl;
    };
    doLogin(): void;
    getSocialSignInUserData(data: any): void;
}
