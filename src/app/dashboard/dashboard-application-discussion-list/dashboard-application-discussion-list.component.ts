import { ComponentType } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Application } from '../application/application';
import { DiscussionEditModalContentComponent } from '../dashboard-application-discussion-item/discussion-edit-modal-content/discussion-edit-modal-content.component';
import { Discussion } from '../discussion/discussion';

@Component({
  selector: 'jsm-dashboard-application-discussion-list',
  templateUrl: './dashboard-application-discussion-list.component.html',
  styleUrls: ['./dashboard-application-discussion-list.component.scss']
})
export class DashboardApplicationDiscussionListComponent extends ModalComponent<DiscussionEditModalContentComponent> implements OnInit {

  wrapped: boolean = true;
  displayedDiscussionList: Discussion[] = [];
  @Input() application!: Application;
  @Input() discussionList: Discussion[] = [];

  constructor(modal: MatDialog) {
    super(modal);
  }
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

  create(): void {
    this.modalTitle = "Creation of new discussion";
    this.datas = {
      applicationId: this.application.id
    };
    this.open();
  }
  getContentClass(): ComponentType<DiscussionEditModalContentComponent> {
    return DiscussionEditModalContentComponent;
  }
}
