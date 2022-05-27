import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Application } from 'src/app/dashboard/application/application';
import { ApplicationResultConstant } from 'src/app/dashboard/application/application-result-constant';
import { ApplicationService } from 'src/app/dashboard/application/application.service';
import { ApplicationAbstractModalContentComponent } from 'src/app/dashboard/dashboard-application-item/modal-content/application-abstract-modal-content/application-abstract-modal-content.component';

@Component({
  selector: 'jsm-application-delete-modal-content',
  templateUrl: './application-delete-modal-content.component.html',
  styleUrls: ['./application-delete-modal-content.component.scss']
})
export class ApplicationDeleteModalContentComponent extends ApplicationAbstractModalContentComponent implements OnInit {

  application!: Application;
  constructor(
    private dialogRef: MatDialogRef<ApplicationDeleteModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private applicationService: ApplicationService,
    private applicationConstant: ApplicationResultConstant) {
    super();
  }

  ngOnInit(): void {
    this.application = this.data.datas.application;
  }

  onConfirm(): void {
    this.applicationService.delete(this.application.id).subscribe({
      next: () => {
        this.dialogRef.close();
      }
    })
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
