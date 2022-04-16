import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardSubHeaderComponent } from './dashboard-sub-header/dashboard-sub-header.component';
import { DashboardCardSectionComponent } from './dashboard-card-section/dashboard-card-section.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { ApplicationStatusConstant } from './application/application-status-constant';
import { DashboardActivitySectionComponent } from './dashboard-activity-section/dashboard-activity-section.component';
import { DashboardActivityListComponent } from './dashboard-activity-list/dashboard-activity-list.component';
import { DashboardActivityItemComponent } from './dashboard-activity-item/dashboard-activity-item.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardSubHeaderComponent,
    DashboardCardSectionComponent,
    DashboardHomeComponent,
    DashboardActivitySectionComponent,
    DashboardActivityListComponent,
    DashboardActivityItemComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApplicationStatusConstant
  ]
})
export class DashboardModule { }
