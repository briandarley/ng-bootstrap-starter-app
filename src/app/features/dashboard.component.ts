import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mnuCollapsed: boolean = false;
  search: string = '';
  constructor() { }


  onClick() {
    this.mnuCollapsed = !this.mnuCollapsed;
  }
  onSearchPo() {
    console.log(this.search);
  }
  ngOnInit() {
  }

}
