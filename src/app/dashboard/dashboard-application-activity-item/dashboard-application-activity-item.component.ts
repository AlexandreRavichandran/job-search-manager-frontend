import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Activity } from '../activity/activity';
import { ActivityService } from '../activity/activity.service';
import { Application } from '../application/application';

@Component({
    selector: 'jsm-dashboard-application-activity-item',
    templateUrl: './dashboard-application-activity-item.component.html',
    styleUrls: ['./dashboard-application-activity-item.component.scss']
})
export class DashboardApplicationActivityItemComponent implements OnInit {
    @Input() application!: Application
    @Input() activity!: Activity;
    @Output() deleteActivityEvent: EventEmitter<number> = new EventEmitter<number>();
    constructor(private activityService: ActivityService) { }

    ngOnInit(): void {
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
}
