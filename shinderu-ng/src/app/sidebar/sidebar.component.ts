import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  name: string;
  isLoggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.name = this.authService.getUserUid();
    this.isLoggedIn = this.authService.getUserUid() !== null;
  }

  login() {
    // TODO: make the display change once the user logs in.
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  getUser() {
    return this.authService.getCurrentUser();
  }

}
