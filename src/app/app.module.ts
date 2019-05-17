import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//import { UserLoginModule } from 'user-login';

import { UserLoginModule } from '../../../ngtek-user-login/projects/user-login/src/lib/user-login.module';

const ComponenetsInterface = {
   googleClientId : '1005635293950-29g89s87fm0dvj3540rsufta0oguts1l.apps.googleusercontent.com',
   fbAppId : '2037079629930934',
   baseUrl: 'https://smart-citizen.tekdi.net'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserLoginModule.forRoot(ComponenetsInterface),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
