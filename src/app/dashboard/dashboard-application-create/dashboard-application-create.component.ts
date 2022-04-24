import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Application } from '../application/application';
import { ApplicationImportation } from '../application/application-importation';
import { ApplicationService } from '../application/application.service';
import { FormTypeConstant } from './form-type-constant';

@Component({
  selector: 'jsm-dashboard-application-create',
  templateUrl: './dashboard-application-create.component.html',
  styleUrls: ['./dashboard-application-create.component.scss']
})
export class DashboardApplicationCreateComponent implements OnInit {
  statusOfCreatedApplication: string | null = "";
  applicationImportFailed: boolean = false;
  application: Application = {

    id: 0,
    title: "",
    description: "",
    status: "Going to apply",
    link: "",
    archived: false,
    result: "",
    createdAt: new Date(),
    companyName: "",
    companyAdress: "",
    contactEmail: "",
    contactPhoneNumber: "",
    moved: false,
    activities: []
  };

  selectedForm: string = this.formtypeConstant.TYPE_AUTO_FILLING;

  applicationCreateFirstStepForm = new FormGroup({
    link: new FormControl(''),
    title: new FormControl(''),
    status: new FormControl(this.statusOfCreatedApplication)
  })

  applicationCreateSecondStepForm = new FormGroup({
    title: new FormControl(this.application.title, Validators.required),
    description: new FormControl(this.application.description),
    companyName: new FormControl(this.application.companyName),
    companyAdress: new FormControl(''),
    contactName: new FormControl(''),
    contactEmail: new FormControl(''),
    contactPhoneNumber: new FormControl(''),

  })

  constructor(
    private applicationService: ApplicationService,
    private router: Router,
    public formtypeConstant: FormTypeConstant) {
    if (this.router.getCurrentNavigation()?.extras === undefined) {
      this.router.navigate(["/dashboard"]);
    } else {
      this.statusOfCreatedApplication = this.router.getCurrentNavigation()?.extras.state!['status'];
    }

  }

  ngOnInit(): void {

  }

  onFirstStepSubmit(): void {
    this.application.title = this.applicationCreateFirstStepForm.value.title;
    if (this.applicationCreateFirstStepForm.valid && this.selectedForm === this.formtypeConstant.TYPE_AUTO_FILLING) {
      console.log(`Make import search with ${this.applicationCreateFirstStepForm.value.link}`);
      const applicationLink: ApplicationImportation = {
        link: this.applicationCreateFirstStepForm.value.link
      }

      this.applicationService.generateApplicationDataByLink(applicationLink).subscribe({
        next: application => {
          this.application = application;
          this.application.status = this.applicationCreateFirstStepForm.value.status.toUpperCase().replace(/ /g, "_");
        },
        error: error => {
          this.applicationImportFailed = true;
          console.log(error);
        }
      })
    }
  }

  onSecondStepSubmit(): void {
    this.application.createdAt = new Date();
    this.applicationService.add(this.application).subscribe(() => {
      this.router.navigateByUrl("/dashboard");
    })
  }

  setSelectedForm(type: string): void {
    this.selectedForm = type;
  }

  onBackToFirstForm(): void {
    this.applicationImportFailed = false;
  }
}
