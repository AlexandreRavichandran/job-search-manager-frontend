import { ComponentType } from '@angular/cdk/portal';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Activity } from '../activity/activity';
import { ActivityService } from '../activity/activity.service';
import { Application } from '../application/application';
import { ActivityEditModalContentComponent } from './activity-edit-modal-content/activity-edit-modal-content.component';

@Component({
    selector: 'jsm-dashboard-application-activity-item',
    templateUrl: './dashboard-application-activity-item.component.html',
    styleUrls: ['./dashboard-application-activity-item.component.scss']
})
export class DashboardApplicationActivityItemComponent extends ModalComponent<ActivityEditModalContentComponent> implements OnInit {
    protected override datas: any;
    @Input() application!: Application
    @Input() activity!: Activity;
    @Output() deleteActivityEvent: EventEmitter<number> = new EventEmitter<number>();
    constructor(modal: MatDialog, private activityService: ActivityService) {
        super(modal);
    }

    ngOnInit(): void {
        this.datas = {
            activity: this.activity,
            applicationId: this.application.id,
        }
    }

    openEditForm(): void {
        this.open();
    }

    formatResult(): string {
        let formattedResult: string = "";
        switch (this.activity.result) {

            case "FAILED":
                formattedResult = "Negative response";
                break;
            case "NO_RESPONSE":
                formattedResult = "No response";
                break;
            case "SUCCEED":
                formattedResult = "I've got the job";
                break;

        }
        return formattedResult;
    }

    formatStatus(): string {
        let formattedStatus: string = "";
        switch (this.activity.result) {
            case "APPLIED":
                formattedStatus = "I have applied";
                break;
            case "RELAUNCHED":
                formattedStatus = "I've made a relaunch";
                break;
            case "HAVE_A_MEETING":
                formattedStatus = "I have a meeting";
                break;
        }

        return formattedStatus;
    }

    delete(): void {
        this.activityService.delete(this.application.id, this.activity.id).subscribe({
            next: activity => {
                this.deleteActivityEvent.emit(activity.id);
            },
            error: error => {
                console.log(error);

            }
        });
    }

    getContentClass(): ComponentType<ActivityEditModalContentComponent> {
        return ActivityEditModalContentComponent;
    }
}
