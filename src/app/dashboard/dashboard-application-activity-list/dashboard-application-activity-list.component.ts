import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../activity/activity';
import { Application } from '../application/application';

@Component({
  selector: 'jsm-dashboard-application-activity-list',
  templateUrl: './dashboard-application-activity-list.component.html',
  styleUrls: ['./dashboard-application-activity-list.component.scss']
})
export class DashboardApplicationActivityListComponent implements OnInit {

  wrapped: boolean = true;
  displayedActivityList: Activity[] = [];

  @Input() application!: Application;
  @Input() activityList: Activity[] = [];

  constructor() { }

  ngOnInit(): void {
    this.showFew();
  }

  deleteFromList(deletedActivityId: number): void {
    this.activityList = this.activityList.filter(activity => deletedActivityId !== activity.id);
    this.displayedActivityList = this.displayedActivityList.filter(activity => deletedActivityId !== activity.id);
  }

  showFew(): void {
    this.displayedActivityList = this.activityList.slice(0, 2);
  }

  showAll(): void {
    this.displayedActivityList = this.activityList;
  }

  toggleWrapper(event: any) {
    if (event) {
      this.showFew();
    } else {
      this.showAll();
    }
  }
}
