import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Application } from '../application/application';

@Component({
  selector: 'jsm-dashboard-application-edit-form',
  templateUrl: './dashboard-application-edit-form.component.html',
  styleUrls: ['./dashboard-application-edit-form.component.scss']
})
export class DashboardApplicationEditFormComponent implements OnInit {
  @Input() editedApplication!: Application;
  @Output() updatedApplicationEvent: EventEmitter<Application> = new EventEmitter<Application>();
  @Output() cancelEditingEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  applicationEditForm: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required),
    companyName: new FormControl(""),
    companyAdress: new FormControl(""),
    contactName: new FormControl(""),
    contactEmail: new FormControl(""),
    contactPhoneNumber: new FormControl(""),
  })

  ngOnInit(): void {
    this.applicationEditForm.patchValue(this.editedApplication);
  }

  constructor() { }


  editForm(): void {
    this.updatedApplicationEvent.emit(this.applicationEditForm.value);
  }

  cancelEdition(): void {
    this.cancelEditingEvent.emit(true);
  }

}
