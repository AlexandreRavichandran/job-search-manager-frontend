import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Application } from '../application/application';
import { Discussion } from '../discussion/discussion';
import { DiscussionService } from '../discussion/discussion.service';

@Component({
  selector: 'jsm-dashboard-application-discussion-item',
  templateUrl: './dashboard-application-discussion-item.component.html',
  styleUrls: ['./dashboard-application-discussion-item.component.scss']
})
export class DashboardApplicationDiscussionItemComponent implements OnInit {
  @Input() application!: Application;
  @Input() discussion!: Discussion;
  @Output() deleteDiscussionEvent: EventEmitter<number> = new EventEmitter<number>();
  constructor(private discussionService: DiscussionService) { }

  ngOnInit(): void {
  }

  formatDiscussionType(): string {
    let formattedDiscussionType: string = "";
    switch (this.discussion.type) {

      case "PHYSICAL_MEETING":
        formattedDiscussionType = "Physical meeting"
        break;
      case "MAIL_DISCUSSION":
        formattedDiscussionType = "Discussion by mail"
        break;
      case "PHONE_MEETING":
        formattedDiscussionType = "Phone meeting"
        break;
      case "VISIO_MEETING":
        formattedDiscussionType = "Online meeting on visio"
        break;

    }
    return formattedDiscussionType;
  }

  delete(): void {
    this.discussionService.delete(this.application.id, this.discussion.id).subscribe({
      next: discussion => {
        this.deleteDiscussionEvent.emit(discussion.id);
      },
      error: error => {
        console.log(error);

      }
    });
  }
}
