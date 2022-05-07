import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Discussion } from '../../discussion/discussion';
import { DiscussionService } from '../../discussion/discussion.service';

@Component({
  selector: 'app-discussion-edit-modal-content',
  templateUrl: './discussion-edit-modal-content.component.html',
  styleUrls: ['./discussion-edit-modal-content.component.scss']
})
export class DiscussionEditModalContentComponent implements OnInit {
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
    this.discussion = this.data.datas.discussion;
    this.setFormInitialValues();

  }

  onSubmit(): void {
    this.discussion.type = this.discussionEditForm.value.type;
    this.discussion.description = this.discussionEditForm.value.description;
    this.discussionService.edit(this.data.datas.applicationId, this.discussion.id, this.discussion).subscribe(() => {

      this.dialogRef.close();
    });
  }

  setFormInitialValues(): void {
    this.discussionEditForm.setValue(
      {
        "type": this.discussion.type,
        "description": this.discussion.description,
        "date": this.discussion.date
      });
  }
}
