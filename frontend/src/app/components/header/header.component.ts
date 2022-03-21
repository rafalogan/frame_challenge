import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // get title(): string {
  //   return  this.headerService.headerData.title;
  // }
  //
  // get icon(): string {
  //   return this.headerService.headerData.icon;
  // }
  //
  // get routeUrl(): string {
  //   return  this.headerService.headerData.routeUrl;
  // }
}
