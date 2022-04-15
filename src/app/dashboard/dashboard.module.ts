import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardSubHeaderComponent } from './dashboard-sub-header/dashboard-sub-header.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardSubHeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
