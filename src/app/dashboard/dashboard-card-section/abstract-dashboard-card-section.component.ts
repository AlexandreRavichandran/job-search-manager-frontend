import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Application } from '../application/application';
import { ApplicationService } from '../application/application.service';

@Injectable()
export abstract class AbstractDashboardCardSectionComponent {

    constructor(public applicationService: ApplicationService) { }

    drop(event: CdkDragDrop<Application[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );

            event.container.data[event.currentIndex] = this.updateMovedApplicationStatus(event.container.id, event.container.data[event.currentIndex]);
            this.applicationService.edit(event.container.data[event.currentIndex]).subscribe({
                next: () => {

                    this.refreshNumberOfApplication();
                },
                error: () => {
                    //Rollback if status change failed
                    transferArrayItem(
                        event.container.data,
                        event.previousContainer.data,
                        event.currentIndex,
                        event.previousIndex,
                    );
                }
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
                nextStatus = "RELAUNCHED";
                break
            case "cdk-drop-list-3":
                nextStatus = "HAVE_A_MEETING";
                break
        }
        return nextStatus;
    }

    private updateMovedApplicationStatus(nextContainerId: string, movedApplication: Application): Application {
        const nextStatus = this.guessNextStatusByNextContainerId(nextContainerId);
        movedApplication.status = nextStatus;
        movedApplication.moved = true;
        return movedApplication;
    }

    protected abstract refreshNumberOfApplication(): void;
}