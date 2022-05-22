import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Application } from 'src/app/dashboard/application/application';
import { ApplicationResultConstant } from 'src/app/dashboard/application/application-result-constant';
import { ApplicationService } from 'src/app/dashboard/application/application.service';
import { ApplicationAbstractModalContentComponent } from '../application-abstract-modal-content/application-abstract-modal-content.component';

@Component({
  selector: 'jsm-application-archive-modal-content',
  templateUrl: './application-archive-modal-content.component.html',
  styleUrls: ['./application-archive-modal-content.component.scss']
})
export class ApplicationArchiveModalContentComponent extends ApplicationAbstractModalContentComponent implements OnInit {
  application!: Application;
  archiveForm: FormGroup = new FormGroup({
    result: new FormControl("", Validators.required),
    description: new FormControl("")
  });

  applicationArchiveForm: FormGroup = new FormGroup({
    result: new FormControl("", Validators.required),
    description: new FormControl("")
  });
  constructor(
    private dialogRef: MatDialogRef<ApplicationArchiveModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private applicationService: ApplicationService,
    private applicationConstant: ApplicationResultConstant) {
    super();
  }
  ngOnInit(): void {
    this.application = this.data.datas.application;
  }

  onConfirm(): void {
    this.application.archived = true;
    this.application.result = this.getResult();
    this.applicationService.edit(this.application).subscribe({
      next: application => {
        this.application = application;
        this.dialogRef.close();
      }
    })
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  private getResult(): string {
    let result: string = "";
    switch (this.applicationArchiveForm.get("description")?.value) {
      case "failed":
        result = this.applicationConstant.RESULT_FAILED;
        break;
      case "succeed":
        result = this.applicationConstant.RESULT_SUCCEED;
        break;
      case "No response":
        result = this.applicationConstant.RESULT_NO_RESPONSE;
        break;

    }

    return result;
  }
}
