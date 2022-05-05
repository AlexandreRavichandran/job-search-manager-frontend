import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../application/application';
import { ApplicationService } from '../application/application.service';
import { AbstractDashboardCardSectionComponent } from './abstract-dashboard-card-section.component';

@Component({
  selector: 'jsm-dashboard-card-section',
  templateUrl: './dashboard-card-section.component.html',
  styleUrls: ['./dashboard-card-section.component.scss']
})
export class DashboardCardSectionComponent extends AbstractDashboardCardSectionComponent implements OnInit {
  loading: boolean = false;
  @Output() protected refreshSectionEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  applicationList: Application[] = [];
  @Input() name: string = "";
  @Input() status!: string;
  color: string = 'yellow';
  numberOfApplications!: number;

  constructor(override applicationService: ApplicationService, private router: Router) {
    super(applicationService)
  }

  ngOnInit(): void {
    this.getApplications();

  }

  getApplications(): void {
    this.loading = true;
    this.applicationService.browseByStatusAndArchived(this.status, false).subscribe(applications => {
      this.applicationList = applications;
      this.numberOfApplications = applications.length;
      this.loading = false;
    })
  }

  getClassByStatus(): string {
    let relatedClass: string = "";

    switch (this.status) {
      case "Going to apply":
        relatedClass = "section__going__to__apply"
        break;
      case "Applied":
        relatedClass = "section__applied"
        break;
      case "Relaunched":
        relatedClass = "section__relaunch"
        break;
      case "Have a meeting":
        relatedClass = "section__have__a__meeting"
        break;
    }

    return relatedClass;
  }

  private setNumberOfApplications(numberOfApplication: number): void {
    this.numberOfApplications = numberOfApplication;
  }

  createApplication(): void {
    this.router.navigate(["dashboard/new"], { state: { status: this.status } })
  }

  refreshNumberOfApplication(): void {
    this.refreshSectionEvent.emit(true);
  }
}
