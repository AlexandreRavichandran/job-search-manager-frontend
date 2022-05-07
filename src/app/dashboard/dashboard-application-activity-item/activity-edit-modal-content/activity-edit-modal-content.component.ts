import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Activity } from '../../activity/activity';
import { ActivityService } from '../../activity/activity.service';

@Component({
  selector: 'app-activity-edit-modal-content',
  templateUrl: './activity-edit-modal-content.component.html',
  styleUrls: ['./activity-edit-modal-content.component.scss']
})
export class ActivityEditModalContentComponent implements OnInit {
  activity!: Activity;
  modalTitle: string = "";
  activityEditForm: FormGroup = new FormGroup({
    date: new FormControl("", Validators.required),
    description: new FormControl("")
  })
  @Output() activityUpdateEvent: EventEmitter<Activity> = new EventEmitter<Activity>();
  constructor(
    private dialogRef: MatDialogRef<ActivityEditModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {
    this.modalTitle = this.data.title;
    this.activity = this.data.datas.activity;
    this.setFormInitialValues();
  }

  setFormInitialValues(): void {
    this.activityEditForm.setValue(
      {
        "description": this.activity.description,
        "date": this.activity.changedAt,
      });
  }

  onSubmit(): void {
    this.activity.changedAt = this.activityEditForm.value["date"];
    this.activity.description = this.activityEditForm.value["description"];
    this.activityService.edit(this.data.datas.applicationId, this.data.datas.activity.id, this.activity).subscribe(() => {
      this.dialogRef.close();
    })
  }
}
