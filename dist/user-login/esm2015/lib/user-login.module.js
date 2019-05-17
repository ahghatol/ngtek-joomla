/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { UserLoginComponent } from './user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
//Componenets
import { SocialloginComponent } from './components/sociallogin/sociallogin.component';
import { LoginComponent } from './components/login/login.component';
//Providers
import { LoginService } from './providers/login.service';
//Social login third party module
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
/** @type {?} */
let googleClientId = '1005635293950-29g89s87fm0dvj3540rsufta0oguts1l.apps.googleusercontent.com';
/** @type {?} */
let fbAppId = '2037079629930934';
const ɵ0 = GoogleLoginProvider.PROVIDER_ID, ɵ1 = FacebookLoginProvider.PROVIDER_ID;
/** @type {?} */
let config = new AuthServiceConfig([
    {
        id: ɵ0,
        provider: new GoogleLoginProvider(googleClientId)
    },
    {
        id: ɵ1,
        provider: new FacebookLoginProvider(fbAppId)
    }
]);
/**
 * @return {?}
 */
export function provideConfig() {
    return config;
}
export class UserLoginModule {
}
UserLoginModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    UserLoginComponent,
                    LoginComponent,
                    SocialloginComponent
                ],
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    ReactiveFormsModule,
                    SocialLoginModule
                    //MDBBootstrapModule.forRoot(),
                ],
                exports: [
                    UserLoginComponent,
                    LoginComponent,
                    SocialloginComponent,
                ],
                providers: [
                    LoginService,
                    {
                        provide: AuthServiceConfig,
                        useFactory: provideConfig
                    }
                ],
                schemas: [NO_ERRORS_SCHEMA]
            },] }
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1sb2dpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91c2VyLWxvZ2luLyIsInNvdXJjZXMiOlsibGliL3VzZXItbG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFHLGdCQUFnQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBSXhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFBO0FBQ3JGLE9BQU0sRUFBRSxjQUFjLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQTs7QUFHakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFBOztBQUd4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUFFL0UsY0FBYyxHQUFHLDJFQUEyRTs7SUFDNUYsT0FBTyxHQUFHLGtCQUFrQjtXQUd4QixtQkFBbUIsQ0FBQyxXQUFXLE9BSS9CLHFCQUFxQixDQUFDLFdBQVc7O0lBTnJDLE1BQU0sR0FBRyxJQUFJLGlCQUFpQixDQUFDO0lBQ2pDO1FBQ0UsRUFBRSxJQUFpQztRQUNuQyxRQUFRLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxjQUFjLENBQUM7S0FDbEQ7SUFDRDtRQUNFLEVBQUUsSUFBbUM7UUFDckMsUUFBUSxFQUFFLElBQUkscUJBQXFCLENBQUMsT0FBTyxDQUFDO0tBQzdDO0NBQ0YsQ0FBQzs7OztBQUVGLE1BQU0sVUFBVSxhQUFhO0lBQzNCLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFrQ0QsTUFBTSxPQUFPLGVBQWU7OztZQS9CM0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2Qsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDZCxtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsK0JBQStCO2lCQUNsQztnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLG9CQUFvQjtpQkFHckI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULFlBQVk7b0JBQ1o7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsVUFBVSxFQUFFLGFBQWE7cUJBQzFCO2lCQUNGO2dCQUNELE9BQU8sRUFBRSxDQUFFLGdCQUFnQixDQUFFO2FBRTlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vdXNlci1sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy9pbXBvcnQgeyBNREJCb290c3RyYXBNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWJvb3RzdHJhcC1tZCc7XG5cbi8vQ29tcG9uZW5ldHNcbmltcG9ydCB7IFNvY2lhbGxvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NvY2lhbGxvZ2luL3NvY2lhbGxvZ2luLmNvbXBvbmVudCdcbmltcG9ydHsgTG9naW5Db21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnXG5cbi8vUHJvdmlkZXJzXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9sb2dpbi5zZXJ2aWNlJ1xuXG4vL1NvY2lhbCBsb2dpbiB0aGlyZCBwYXJ0eSBtb2R1bGVcbmltcG9ydCB7IFNvY2lhbExvZ2luTW9kdWxlLCBBdXRoU2VydmljZUNvbmZpZyB9IGZyb20gXCJhbmd1bGFyeC1zb2NpYWwtbG9naW5cIjtcbmltcG9ydCB7IEdvb2dsZUxvZ2luUHJvdmlkZXIsIEZhY2Vib29rTG9naW5Qcm92aWRlciB9IGZyb20gXCJhbmd1bGFyeC1zb2NpYWwtbG9naW5cIjtcbiBcbmxldCBnb29nbGVDbGllbnRJZCA9ICcxMDA1NjM1MjkzOTUwLTI5Zzg5czg3Zm0wZHZqMzU0MHJzdWZ0YTBvZ3V0czFsLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcbmxldCBmYkFwcElkID0gJzIwMzcwNzk2Mjk5MzA5MzQnO1xubGV0IGNvbmZpZyA9IG5ldyBBdXRoU2VydmljZUNvbmZpZyhbXG4gIHtcbiAgICBpZDogR29vZ2xlTG9naW5Qcm92aWRlci5QUk9WSURFUl9JRCxcbiAgICBwcm92aWRlcjogbmV3IEdvb2dsZUxvZ2luUHJvdmlkZXIoZ29vZ2xlQ2xpZW50SWQpXG4gIH0sXG4gIHtcbiAgICBpZDogRmFjZWJvb2tMb2dpblByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAgIHByb3ZpZGVyOiBuZXcgRmFjZWJvb2tMb2dpblByb3ZpZGVyKGZiQXBwSWQpXG4gIH1cbl0pO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbmZpZygpIHtcbiAgcmV0dXJuIGNvbmZpZztcbn1cbiBcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVXNlckxvZ2luQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIFNvY2lhbGxvZ2luQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgU29jaWFsTG9naW5Nb2R1bGVcbiAgICAgIC8vTURCQm9vdHN0cmFwTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFVzZXJMb2dpbkNvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBTb2NpYWxsb2dpbkNvbXBvbmVudCxcbiAgICAvL01EQkJvb3RzdHJhcE1vZHVsZVxuXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIExvZ2luU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBdXRoU2VydmljZUNvbmZpZyxcbiAgICAgIHVzZUZhY3Rvcnk6IHByb3ZpZGVDb25maWdcbiAgICB9XG4gIF0sXG4gIHNjaGVtYXM6IFsgTk9fRVJST1JTX1NDSEVNQSBdXG5cbn0pXG5leHBvcnQgY2xhc3MgVXNlckxvZ2luTW9kdWxlIHsgfVxuIl19