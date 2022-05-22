import { ComponentType } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Application } from '../application/application';
import { ApplicationService } from '../application/application.service';
import { ApplicationAbstractModalContentComponent } from '../dashboard-application-item/modal-content/application-abstract-modal-content/application-abstract-modal-content.component';
import { ApplicationArchiveModalContentComponent } from '../dashboard-application-item/modal-content/application-archive-modal-content/application-archive-modal-content.component';
import { ApplicationMoveModalContentComponent } from '../dashboard-application-item/modal-content/application-move-modal-content/application-move-modal-content.component';
import { ApplicationDeleteModalContentComponent } from './modal-content/application-delete-modal-content/application-delete-modal-content.component';
import { ApplicationRestoreModalContentComponent } from './modal-content/application-restore-modal-content/application-restore-modal-content.component';

@Component({
  selector: 'jsm-dashboard-application-item-archived',
  templateUrl: './dashboard-application-item-archived.component.html',
  styleUrls: ['./dashboard-application-item-archived.component.scss']
})
export class DashboardApplicationItemArchivedComponent extends ModalComponent<ApplicationAbstractModalContentComponent> implements OnInit {
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

  move(): void {
    this.context = "move";
    this.open();
  }


  restore(): void {
    this.context = "restore";
    this.open();
  }

  delete(): void {
    this.context = "delete";
    this.open();
  }

  getModalContentClass(): ComponentType<ApplicationAbstractModalContentComponent> {

    let modalContent: ComponentType<ApplicationAbstractModalContentComponent> = ApplicationAbstractModalContentComponent;

    switch (this.context) {
      case "delete":
        modalContent = ApplicationDeleteModalContentComponent;
        break;

      case "restore":
        modalContent = ApplicationRestoreModalContentComponent;
        break;

      case "move":
        modalContent = ApplicationMoveModalContentComponent;
        break;
    }

    return modalContent;
  }

}
