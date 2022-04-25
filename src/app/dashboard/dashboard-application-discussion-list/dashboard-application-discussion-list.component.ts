import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../application/application';
import { Discussion } from '../discussion/discussion';

@Component({
  selector: 'jsm-dashboard-application-discussion-list',
  templateUrl: './dashboard-application-discussion-list.component.html',
  styleUrls: ['./dashboard-application-discussion-list.component.scss']
})
export class DashboardApplicationDiscussionListComponent implements OnInit {

  @Input() application!: Application;
  @Input() discussionList: Discussion[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  deleteFromList(deletedActivityId: number): void {
    this.discussionList = this.discussionList.filter(discussion => deletedActivityId !== discussion.id);
  }
}
