import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../activity/activity';
import { Application } from '../application/application';

@Component({
  selector: 'jsm-dashboard-application-activity-list',
  templateUrl: './dashboard-application-activity-list.component.html',
  styleUrls: ['./dashboard-application-activity-list.component.scss']
})
export class DashboardApplicationActivityListComponent implements OnInit {
  @Input() application!: Application;
  @Input() activityList: Activity[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  deleteFromList(deletedActivityId: number): void {
    this.activityList = this.activityList.filter(activity => deletedActivityId !== activity.id);
  }
}
