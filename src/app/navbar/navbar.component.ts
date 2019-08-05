import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweenMax } from 'gsap';
import { delay } from 'q';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.currentUser().subscribe(res => this.currentUser = res);
    TweenMax.from('.nav-link', 1, {scale: 0})
  }

  logoutUser() {
    this.auth.logoutUser();
    this.router.navigate(['/logged-out']);
  }

}
