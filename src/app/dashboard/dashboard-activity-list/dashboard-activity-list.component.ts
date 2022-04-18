import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity/activity';
import { ActivityService } from '../activity/activity.service';

@Component({
  selector: 'jsm-dashboard-activity-list',
  templateUrl: './dashboard-activity-list.component.html',
  styleUrls: ['./dashboard-activity-list.component.scss']
})
export class DashboardActivityListComponent implements OnInit {

  activityList: Activity[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  private getActivities(): void {
    this.activityService.browse().subscribe(activities => {
      this.activityList = activities;
    })
  }

  generateActivities(): void {

  }
}
