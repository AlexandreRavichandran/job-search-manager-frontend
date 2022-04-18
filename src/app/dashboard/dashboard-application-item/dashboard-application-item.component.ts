import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../application/application';

@Component({
  selector: 'jsm-dashboard-application-item',
  templateUrl: './dashboard-application-item.component.html',
  styleUrls: ['./dashboard-application-item.component.scss']
})
export class DashboardApplicationItemComponent implements OnInit {

  @Input() application!: Application
  moved:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
