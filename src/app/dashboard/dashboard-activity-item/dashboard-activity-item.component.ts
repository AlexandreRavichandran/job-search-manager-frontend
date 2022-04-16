import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../activity/activity';

@Component({
  selector: 'jsm-dashboard-activity-item',
  templateUrl: './dashboard-activity-item.component.html',
  styleUrls: ['./dashboard-activity-item.component.scss']
})
export class DashboardActivityItemComponent implements OnInit {

  @Input() activity!: Activity;
  
  constructor() { }

  ngOnInit(): void {
  }

}
