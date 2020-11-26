import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
  displayMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  displayMenuHandler() {
    console.log(this.displayMenu);

    this.displayMenu = !this.displayMenu;
  }

}
