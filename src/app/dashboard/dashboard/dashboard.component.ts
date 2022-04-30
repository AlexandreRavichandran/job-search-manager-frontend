import { Component, OnInit, ViewChildren } from '@angular/core';
import { ApplicationStatusConstant } from '../application/application-status-constant';
import { DashboardCardSectionComponent } from '../dashboard-card-section/dashboard-card-section.component';
@Component({
  selector: 'jsm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChildren(DashboardCardSectionComponent) childrens!: DashboardCardSectionComponent[];

  constructor(public applicationConstant: ApplicationStatusConstant) { }

  ngOnInit(): void {
  }

  refreshApplicationNumber(): void {
    this.childrens.forEach(children => {
      children.getApplications();
    })
  }
}
