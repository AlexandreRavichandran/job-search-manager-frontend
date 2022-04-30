import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../application/application';
import { Discussion } from '../discussion/discussion';

@Component({
  selector: 'jsm-dashboard-application-discussion-list',
  templateUrl: './dashboard-application-discussion-list.component.html',
  styleUrls: ['./dashboard-application-discussion-list.component.scss']
})
export class DashboardApplicationDiscussionListComponent implements OnInit {

  wrapped: boolean = true;
  displayedDiscussionList: Discussion[] = [];
  @Input() application!: Application;
  @Input() discussionList: Discussion[] = [];

  constructor() { }

  ngOnInit(): void {
    this.showFew();
  }

  deleteFromList(deletedDiscussionId: number): void {
    this.discussionList = this.discussionList.filter(discussion => deletedDiscussionId !== discussion.id);
    this.displayedDiscussionList = this.displayedDiscussionList.filter(discussion => deletedDiscussionId !== discussion.id)
  }

  showFew(): void {
    this.displayedDiscussionList = this.discussionList.slice(0, 2);
  }

  showAll(): void {
    this.displayedDiscussionList = this.discussionList;
  }

  toggleWrapper(event: any) {
    if (event) {
      this.showFew();
    } else {
      this.showAll();
    }
  }
}
