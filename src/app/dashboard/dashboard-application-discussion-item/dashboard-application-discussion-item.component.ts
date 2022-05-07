import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Application } from '../application/application';
import { Discussion } from '../discussion/discussion';
import { DiscussionService } from '../discussion/discussion.service';
import { DiscussionEditModalContentComponent } from './discussion-edit-modal-content/discussion-edit-modal-content.component';

@Component({
  selector: 'jsm-dashboard-application-discussion-item',
  templateUrl: './dashboard-application-discussion-item.component.html',
  styleUrls: ['./dashboard-application-discussion-item.component.scss']
})
export class DashboardApplicationDiscussionItemComponent extends ModalComponent<DiscussionEditModalContentComponent> implements OnInit {
  protected override datas: any;
  @Input() application!: Application;
  @Input() discussion!: Discussion;
  @Output() deleteDiscussionEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(modal: MatDialog, private discussionService: DiscussionService) {
    super(modal);
  }

  ngOnInit(): void {
    this.datas = {
      discussion: this.discussion,
      applicationId: this.application.id,
    }
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

  getContentClass(): ComponentType<DiscussionEditModalContentComponent> {
    return DiscussionEditModalContentComponent;
  }

  openEditForm(): void {
    this.open();
  }

  delete(): void {
    this.discussionService.delete(this.application.id, this.discussion.id).subscribe({
      next: (discussion) => {
        this.deleteDiscussionEvent.emit(discussion.id);
      }
    })
  }
}
