import { ComponentType } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Application } from '../application/application';
import { ApplicationService } from '../application/application.service';
import { ApplicationAbstractModalContentComponent } from './modal-content/application-abstract-modal-content/application-abstract-modal-content.component';
import { ApplicationApplyModalContentComponent } from './modal-content/application-apply-modal-content/application-apply-modal-content.component';
import { ApplicationArchiveModalContentComponent } from './modal-content/application-archive-modal-content/application-archive-modal-content.component';
import { ApplicationFailedModalContentComponent } from './modal-content/application-failed-modal-content/application-failed-modal-content.component';
import { ApplicationSucceedModalContentComponent } from './modal-content/application-succeed-modal-content/application-succeed-modal-content.component';

@Component({
  selector: 'jsm-dashboard-application-item',
  templateUrl: './dashboard-application-item.component.html',
  styleUrls: ['./dashboard-application-item.component.scss']
})
export class DashboardApplicationItemComponent extends ModalComponent<ApplicationAbstractModalContentComponent> implements OnInit {
  @Input() application!: Application;
  context: string = "";
  moved: boolean = false;
  constructor(modal: MatDialog, private applicationService: ApplicationService) {
    super(modal);
  }

  ngOnInit(): void {
    this.datas = {
      application: this.application
    };
  }

  setApplicationResult(result: string): void {
    this.application.result = result;
    this.applicationService.edit(this.application).subscribe({
      next: (application) => {
        this.application = application
      },
    });
  }

  setAsArchived(): void {
    this.context = "archive";
    this.open();
  }


  setAsSucceed(): void {
    this.context = "succeed";
    this.open();
  }

  setAsFailed(): void {
    this.context = "failed";
    this.open();
  }

  setAsApply(): void {
    this.context = "apply";
    this.open();
  }

  getContentClass(): ComponentType<ApplicationAbstractModalContentComponent> {
    let modalContent: ComponentType<ApplicationAbstractModalContentComponent> = ApplicationAbstractModalContentComponent;

    switch (this.context) {
      case "archive":
        modalContent = ApplicationArchiveModalContentComponent;
        break;

      case "succeed":
        modalContent = ApplicationSucceedModalContentComponent;
        break;

      case "failed":
        modalContent = ApplicationFailedModalContentComponent;
        break;

      case "apply":
        modalContent = ApplicationApplyModalContentComponent;
        break;
    }

    return modalContent;
  }

}
