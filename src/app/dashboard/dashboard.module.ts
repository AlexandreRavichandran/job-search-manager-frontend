import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardApplicationItemComponent } from './dashboard-application-item/dashboard-application-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardApplicationCreateComponent } from './dashboard-application-create/dashboard-application-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormTypeConstant } from './dashboard-application-create/form-type-constant';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import { DashboardApplicationItemMessageComponent } from './dashboard-application-item-message/dashboard-application-item-message.component';

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
    DashboardFooterComponent,
    DashboardApplicationItemComponent,
    DashboardApplicationCreateComponent,
    DashboardApplicationItemMessageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatFormFieldModule,
    HttpClientModule,
    DragDropModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule

  ],
  providers: [
    ApplicationStatusConstant,
    FormTypeConstant,
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
