import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Application } from '../application/application';
import { ApplicationService } from '../application/application.service';

export class AbstractDashboardCardSectionComponent {

    constructor(public applicationService: ApplicationService) { }

    drop(event: CdkDragDrop<Application[]>) {

        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            event.container.data[event.currentIndex] = this.updateMovedApplicationStatus(event.container.id, event.container.data[event.currentIndex]);
            this.applicationService.edit(event.container.data[event.currentIndex]).subscribe(() => {
                transferArrayItem(
                    event.previousContainer.data,
                    event.container.data,
                    event.previousIndex,
                    event.currentIndex,
                );

            });
        }
    }

    private guessNextStatusByNextContainerId(nextContainerId: string): string {
        let nextStatus: string = "";
        switch (nextContainerId) {
            case "cdk-drop-list-0":
                nextStatus = "GOING_TO_APPLY";
                break
            case "cdk-drop-list-1":
                nextStatus = "APPLIED";
                break
            case "cdk-drop-list-2":
                nextStatus = "RELAUNCH";
                break
            case "cdk-drop-list-3":
                nextStatus = "have_a_meeting";
                break
        }
        return nextStatus;
    }

    private updateMovedApplicationStatus(nextContainerId: string, movedApplication: Application): Application {
        const nextStatus = this.guessNextStatusByNextContainerId(nextContainerId);
        movedApplication.status = nextStatus;
        return movedApplication;
    }

}