import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../application/application';
import { Discussion } from '../discussion/discussion';

@Component({
  selector: 'jsm-dashboard-discussion-list',
  templateUrl: './dashboard-discussion-list.component.html',
  styleUrls: ['./dashboard-discussion-list.component.scss']
})
export class DashboardDiscussionListComponent implements OnInit {

  @Input() application!: Application;
  @Input() discussionList: Discussion[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  deleteFromList(deletedActivityId: number): void {
    this.discussionList = this.discussionList.filter(discussion => deletedActivityId !== discussion.id);
  }
}
