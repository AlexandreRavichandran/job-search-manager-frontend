import { Component,Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Application } from 'src/app/dashboard/application/application';
import { ApplicationStatusConstant } from 'src/app/dashboard/application/application-status-constant';
import { ApplicationService } from 'src/app/dashboard/application/application.service';
import { ApplicationAbstractModalContentComponent } from '../application-abstract-modal-content/application-abstract-modal-content.component';

@Component({
  selector: 'jsm-application-apply-modal-content',
  templateUrl: './application-apply-modal-content.component.html',
  styleUrls: ['./application-apply-modal-content.component.scss']
})
export class ApplicationApplyModalContentComponent extends ApplicationAbstractModalContentComponent implements OnInit {

  application!: Application;
  constructor(
    private dialogRef: MatDialogRef<ApplicationApplyModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private applicationService: ApplicationService,
    private applicationConstant: ApplicationStatusConstant) {
    super();
  }

  ngOnInit(): void {
    this.application = this.data.datas.application;
  }
  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.application.moved = true;
    this.application.status = this.applicationConstant.STATUS_APPLIED;
    this.applicationService.edit(this.application).subscribe({
      next: () => {
        this.dialogRef.close();
      }
    })
  }
}
