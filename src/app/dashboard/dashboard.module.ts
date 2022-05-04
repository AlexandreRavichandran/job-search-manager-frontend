import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormTypeConstant } from './dashboard-application-create/form-type-constant';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { DashboardApplicationItemMessageComponent } from './dashboard-application-item-message/dashboard-application-item-message.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { DashboardApplicationReadComponent } from './dashboard-application-read/dashboard-application-read.component';
import { DashboardApplicationActivityListComponent } from './dashboard-application-activity-list/dashboard-application-activity-list.component';
import { DashboardApplicationActivityItemComponent } from './dashboard-application-activity-item/dashboard-application-activity-item.component';
import { DashboardApplicationDiscussionListComponent } from './dashboard-application-discussion-list/dashboard-application-discussion-list.component';
import { DashboardApplicationDiscussionItemComponent } from './dashboard-application-discussion-item/dashboard-application-discussion-item.component';
import { DashboardApplicationNoteListComponent } from './dashboard-application-note-list/dashboard-application-note-list.component';
import { DashboardApplicationNoteItemComponent } from './dashboard-application-note-item/dashboard-application-note-item.component';
import { ToggleDisplayComponent } from '../shared/toggle-display/toggle-display.component';
import { DashboardApplicationEditFormComponent } from './dashboard-application-edit-form/dashboard-application-edit-form.component';
import { NoteEditModalContentComponent } from './dashboard-application-note-item/note-edit-modal-content/note-edit-modal-content.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
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
    DashboardApplicationReadComponent,
    DashboardApplicationActivityListComponent,
    DashboardApplicationActivityItemComponent,
    DashboardApplicationDiscussionListComponent,
    DashboardApplicationDiscussionItemComponent,
    DashboardApplicationNoteListComponent,
    DashboardApplicationNoteItemComponent,
    ToggleDisplayComponent,
    DashboardApplicationEditFormComponent,
    NoteEditModalContentComponent
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
    MatRadioModule,
    MatMenuModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule


  ],
  providers: [
    ApplicationStatusConstant,
    FormTypeConstant,
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
