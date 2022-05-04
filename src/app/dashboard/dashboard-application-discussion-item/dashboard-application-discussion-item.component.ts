import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Application } from '../application/application';
import { DashboardApplicationCreateComponent } from '../dashboard-application-create/dashboard-application-create.component';
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
    //this.modal.open(DashboardApplicationCreateComponent);
    // this.discussionService.delete(this.application.id, this.discussion.id).subscribe({
    //   next: discussion => {
    //     this.deleteDiscussionEvent.emit(discussion.id);
    //   },
    //   error: error => {
    //     console.log(error);

    //   }
    // });
  }
}
