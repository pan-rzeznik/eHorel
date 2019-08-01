import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

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
  }

  logoutUser(){
    this.auth.logoutUser();
    this.router.navigate(['/logged-out']);
  }

}
