import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Application } from 'src/app/dashboard/application/application';
import { ApplicationStatusConstant } from 'src/app/dashboard/application/application-status-constant';
import { ApplicationService } from 'src/app/dashboard/application/application.service';
import { ApplicationAbstractModalContentComponent } from '../application-abstract-modal-content/application-abstract-modal-content.component';

@Component({
  selector: 'jsm-application-move-modal-content',
  templateUrl: './application-move-modal-content.component.html',
  styleUrls: ['./application-move-modal-content.component.scss']
})
export class ApplicationMoveModalContentComponent extends ApplicationAbstractModalContentComponent implements OnInit {
  application!: Application;
  statusChangeForm: FormGroup = new FormGroup(
    {
      status: new FormControl("", Validators.required),
      date: new FormControl("", Validators.required),
      description: new FormControl(""),
    },

  )

  constructor(
    private dialogRef: MatDialogRef<ApplicationMoveModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private applicationService: ApplicationService,
    private applicationConstant: ApplicationStatusConstant
  ) {
    super();
  }

  ngOnInit(): void {
    this.application = this.data.datas.application
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    const editedApplication = Object.assign({}, this.application);
    editedApplication.status = this.guessNewStatusByFormValue();
    this.applicationService.edit(editedApplication).subscribe({
      next: application => {
        this.application = application;
        this.dialogRef.close();
      }
    })
  }

  private guessNewStatusByFormValue(): string {
    let newStatus: string = "";
    switch (this.statusChangeForm.get("status")?.value) {
      case "Going to apply":
        newStatus = this.applicationConstant.STATUS_GOING_TO_APPLY;
        break;
      case "Applied":
        newStatus = this.applicationConstant.STATUS_APPLIED;
        break;
      case "Relaunched":
        newStatus = this.applicationConstant.STATUS_RELAUNCH;
        break;
      case "Have a meeting":
        newStatus = this.applicationConstant.STATUS_HAVE_A_MEETING;
        break;

    }

    return newStatus;
  }
}
