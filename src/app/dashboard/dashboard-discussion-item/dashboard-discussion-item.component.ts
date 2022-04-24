import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Application } from '../application/application';
import { Discussion } from '../discussion/discussion';
import { DiscussionService } from '../discussion/discussion.service';

@Component({
  selector: 'jsm-dashboard-discussion-item',
  templateUrl: './dashboard-discussion-item.component.html',
  styleUrls: ['./dashboard-discussion-item.component.scss']
})
export class DashboardDiscussionItemComponent implements OnInit {
  @Input() application!: Application;
  @Input() discussion!: Discussion;
  @Output() deleteDiscussionEvent: EventEmitter<number> = new EventEmitter<number>();
  constructor(private discussionService: DiscussionService) { }

  ngOnInit(): void {
    console.log(this.discussion);
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

  delete(): Subscription {
    return this.discussionService.delete(this.application.id, this.discussion.id).subscribe({
      next: activity => {
        this.deleteDiscussionEvent.emit(activity.id);
      },
      error: error => {
        console.log(error);

      }
    });
  }
}
