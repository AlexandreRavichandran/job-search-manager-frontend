import { Component, OnInit, ViewChildren } from '@angular/core';
import { ApplicationStatusConstant } from '../application/application-status-constant';
import { DashboardCardSectionArchivedComponent } from '../dashboard-card-section-archived/dashboard-card-section-archived.component';

@Component({
  selector: 'jsm-dashboard-archived',
  templateUrl: './dashboard-archived.component.html',
  styleUrls: ['./dashboard-archived.component.scss']
})
export class DashboardArchivedComponent implements OnInit {

  @ViewChildren(DashboardCardSectionArchivedComponent) childrens!: DashboardCardSectionArchivedComponent[];

  constructor(public applicationConstant: ApplicationStatusConstant) { }

  ngOnInit(): void {
  }

  refreshApplicationNumber(): void {
    this.childrens.forEach(children => {
      children.getApplications();
    })
  }

}
