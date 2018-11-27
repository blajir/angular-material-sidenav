import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  opened: boolean;

  constructor() {
    this.opened = false;
  }

  ngOnInit() {
  }

  toggleNav() {
    this.opened = !this.opened;
  }

}
