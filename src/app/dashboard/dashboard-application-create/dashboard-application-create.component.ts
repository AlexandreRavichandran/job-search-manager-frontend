import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Application } from '../application/application';
import { ApplicationService } from '../application/application.service';
import { FormTypeConstant } from './form-type-constant';

@Component({
  selector: 'app-dashboard-application-create',
  templateUrl: './dashboard-application-create.component.html',
  styleUrls: ['./dashboard-application-create.component.scss']
})
export class DashboardApplicationCreateComponent implements OnInit {

  application: Application = {

    id: 0,
    title: "",
    description: "",
    status: "string",
    link: "string",
    archived: false,
    result: "string",
    date: new Date(),
    companyName: "string",
    companyAdress: "string",
    contactEmail: "string",
    contactPhoneNumber: "string",
  };

  selectedForm: string = this.formtypeConstant.TYPE_AUTO_FILLING;

  applicationCreateFirstStepForm = new FormGroup({
    link: new FormControl(''),
    title: new FormControl('')
  })

  applicationCreateSecondStepForm = new FormGroup({
    title: new FormControl(this.application.title, Validators.required),
    description: new FormControl(''),
    companyName: new FormControl(''),
    companyAdress: new FormControl(''),
    contactName: new FormControl(''),
    contactEmail: new FormControl(''),
    contactPhoneNumber: new FormControl(''),

  })

  constructor(
    private applicationService: ApplicationService, 
    private router: Router, 
    public formtypeConstant: FormTypeConstant) { }

  ngOnInit(): void {
  }


  onFirstStepSubmit(): void {
    this.application.title = this.applicationCreateFirstStepForm.value.title;
    if (this.selectedForm === this.formtypeConstant.TYPE_AUTO_FILLING) {
      console.log(`Make import search with ${this.applicationCreateFirstStepForm.value.link}`);
      this.applicationService.generateApplicationDataByLink(this.applicationCreateFirstStepForm.value.link).subscribe(application => {
        this.application = application;
      })
    }
  }

  onSecondStepSubmit(): void {
    // this.applicationService.add(this.application).subscribe(() => {
      this.router.navigateByUrl("/dashboard");
    // })
  }

  setSelectedForm(type: string): void {
    this.selectedForm = type;
  }
}
