import { LoggedOutGuard } from './../shared/logged-out.guard';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent,
  canActivate: [LoggedOutGuard],
  children: [
    {
      path: '',
      component: SignInComponent
    },
    {
      path: 'sign-up',
      component: SignUpComponent
    },
    {
      path: 'logged-out',
      component: LoggedOutComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
