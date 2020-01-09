import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  name: string;
  isLoggedIn: boolean;

  constructor() { }

  ngOnInit() {
    this.name = "dev user";
    this.isLoggedIn = true;
  }

}
