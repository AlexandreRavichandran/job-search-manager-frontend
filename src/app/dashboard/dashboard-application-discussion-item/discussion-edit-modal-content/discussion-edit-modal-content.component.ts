import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Discussion } from '../../discussion/discussion';
import { DiscussionService } from '../../discussion/discussion.service';

@Component({
  selector: 'jsm-discussion-edit-modal-content',
  templateUrl: './discussion-edit-modal-content.component.html',
  styleUrls: ['./discussion-edit-modal-content.component.scss']
})
export class DiscussionEditModalContentComponent implements OnInit {
  modalTitle: string = "";
  discussion!: Discussion;
  discussionEditForm: FormGroup = new FormGroup({
    type: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    description: new FormControl(""),
  })
  @Output() discussionUpdateEvent: EventEmitter<Discussion> = new EventEmitter<Discussion>();

  constructor(
    private dialogRef: MatDialogRef<DiscussionEditModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private discussionService: DiscussionService) { }

  ngOnInit(): void {

    this.modalTitle = this.data.title;
    if (this.data.datas.discussion !== undefined) {
      this.discussion = this.data.datas.discussion;
      this.setFormInitialValues();
    }

  }

  onSubmit(): void {


    if (this.guessActionByTitle() === "edit") {
      this.discussion.type = this.discussionEditForm.value.type;
      this.discussion.description = this.discussionEditForm.value.description;
      this.discussionService.edit(this.data.datas.applicationId, this.discussion.id, this.discussion).subscribe(() => {
        this.dialogRef.close();
      });
    } else if (this.guessActionByTitle() === "create") {

      this.discussion = {
        id: null,
        description: this.discussionEditForm.value.description,
        date: new Date(),
        type: this.discussionEditForm.value.type,
        createdAt: new Date().toString(),
      }

      this.discussionService.add(this.data.datas.applicationId, this.discussion).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

  private setFormInitialValues(): void {
    this.discussionEditForm.setValue(
      {
        "type": this.discussion.type,
        "description": this.discussion.description,
        "date": this.discussion.date
      });
  }

  private guessActionByTitle(): string {
    let action: string = "";

    if (this.modalTitle.includes("Edition")) {
      action = "edit";
    } else if (this.modalTitle.includes("Creation")) {
      action = "create";
    }

    return action;
  }
}
