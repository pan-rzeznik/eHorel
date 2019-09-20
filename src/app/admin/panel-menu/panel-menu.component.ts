import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.scss']
})
export class PanelMenuComponent implements OnInit {
  user$;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user$ = this.auth.currentUser();
  }
  logout() {
    this.auth.logoutUser();
    this.router.navigate(['/login/logged-out']);
  }
}
