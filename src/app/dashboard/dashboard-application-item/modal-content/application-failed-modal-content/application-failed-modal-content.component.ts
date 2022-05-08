import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Application } from 'src/app/dashboard/application/application';
import { ApplicationResultConstant } from 'src/app/dashboard/application/application-result-constant';
import { ApplicationService } from 'src/app/dashboard/application/application.service';
import { ApplicationAbstractModalContentComponent } from '../application-abstract-modal-content/application-abstract-modal-content.component';

@Component({
  selector: 'jsm-application-failed-modal-content',
  templateUrl: './application-failed-modal-content.component.html',
  styleUrls: ['./application-failed-modal-content.component.scss']
})
export class ApplicationFailedModalContentComponent extends ApplicationAbstractModalContentComponent implements OnInit {

  application!: Application;
  constructor(
    private dialogRef: MatDialogRef<ApplicationFailedModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private applicationService: ApplicationService,
    private applicationConstant: ApplicationResultConstant) {
    super();
  }

  ngOnInit(): void {
    this.application = this.data.datas.application;
  }

  onConfirm(): void {
    this.application.result = this.applicationConstant.RESULT_FAILED;
    this.applicationService.edit(this.application).subscribe({
      next: application => {
        this.application = application;
        this.dialogRef.close();
      }
    })
  }

}
