import { AuthRoutingModule } from './auth-routing.module';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    LoggedOutComponent,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
})
export class AuthModule { }
