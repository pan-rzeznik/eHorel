import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form;
  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.auth.loginUser(this.form.get('email').value, this.form.get('password').value);
    this.router.navigate(['/']);
  }

  loginWithGoogleMethod() {
    this.auth.loginWithGoogle();
  }

  signUpWithGoogle() {
    this.auth.createUserWithGoogle();
  }

}
