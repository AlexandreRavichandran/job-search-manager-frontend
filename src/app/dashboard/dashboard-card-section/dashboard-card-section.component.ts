import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../application/application';
import { ApplicationStatusConstant } from '../application/application-status-constant';
import { ApplicationService } from '../application/application.service';

@Component({
  selector: 'jsm-dashboard-card-section',
  templateUrl: './dashboard-card-section.component.html',
  styleUrls: ['./dashboard-card-section.component.scss']
})
export class DashboardCardSectionComponent implements OnInit {

  @Input() name: string = "";
  @Input() status!: string;
  color: string = 'yellow';
  numberOfApplications!: number;
  applications: Application[] = [];

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    //this.getApplications();
  }

  getApplications(): void {
    this.applicationService.browseByStatus(this.status).subscribe(applications => {
      this.numberOfApplications = applications.length;
      this.applications = applications;
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
      case "Relaunch":
        relatedClass = "section__relaunch"
        break;
      case "Have a meeting":
        relatedClass = "section__have__a__meeting"
        break;
    }

    return relatedClass;
  }

}
