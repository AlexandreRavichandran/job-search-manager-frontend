import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardActivitySectionComponent } from './dashboard-activity-section/dashboard-activity-section.component';
import { DashboardApplicationCreateComponent } from './dashboard-application-create/dashboard-application-create.component';
import { DashboardApplicationReadComponent } from './dashboard-application-read/dashboard-application-read.component';
import { DashboardArchivedComponent } from './dashboard-archived/dashboard-archived.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: "", component: DashboardComponent },
    { path: "archived", component: DashboardArchivedComponent },
    { path: "applications/:id", component: DashboardApplicationReadComponent },
    { path: "actions", component: DashboardActivitySectionComponent },
    { path: "new", component: DashboardApplicationCreateComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
