import { AuthService } from './../../shared/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', Validators.required],
      confirmPassword: ['', [
        Validators.required,
      ]]
    });
  }

  createNewUserWithEmail() {
    this.auth.createUserWithEmail(this.form.get('email').value, this.form.get('confirmPassword').value);
    this.router.navigate(['/']);
  }
}
