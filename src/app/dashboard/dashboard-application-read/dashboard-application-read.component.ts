import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application } from '../application/application';
import { ApplicationService } from '../application/application.service';

@Component({
  selector: 'jsm-dashboard-application-read',
  templateUrl: './dashboard-application-read.component.html',
  styleUrls: ['./dashboard-application-read.component.scss']
})
export class DashboardApplicationReadComponent implements OnInit {
  application!: Application;
  editMode: boolean = false;
  constructor(private router: ActivatedRoute, private applicationService: ApplicationService) { }

  ngOnInit(): void {
    const id: number = Number(this.router.snapshot.paramMap.get("id"));
    this.applicationService.read(id).subscribe({
      next: application => {
        this.application = application;
      }
    })
  }

  delete(): void {
    this.applicationService.delete(this.application.id).subscribe();
  }

  toggleArchive(): void {
    this.application.archived = !this.application.archived;
    this.applicationService.edit(this.application).subscribe();
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  updateApplication(event: any): void {
    const editedApplication = this.application;
    editedApplication.title = event.title;
    editedApplication.companyAdress = event.companyAdress;
    editedApplication.companyName = event.companyName;
    editedApplication.contactEmail = event.contactEmail;
    editedApplication.contactname = event.contactName;
    editedApplication.contactPhoneNumber = event.contactPhoneNumber;

    this.applicationService.edit(editedApplication).subscribe(application => {
      this.application = application;
      this.editMode = false;
    });
    
  }
}
