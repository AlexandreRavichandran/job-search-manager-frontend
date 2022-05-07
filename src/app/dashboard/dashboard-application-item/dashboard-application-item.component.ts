import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../application/application';
import { ApplicationService } from '../application/application.service';

@Component({
  selector: 'jsm-dashboard-application-item',
  templateUrl: './dashboard-application-item.component.html',
  styleUrls: ['./dashboard-application-item.component.scss']
})
export class DashboardApplicationItemComponent implements OnInit {

  @Input() application!: Application
  moved: boolean = false;
  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
  }

  setApplicationResult(result: string): void {
    this.application.result = result;
    this.applicationService.edit(this.application).subscribe({
      next: (application) => {
        this.application = application
      },
    });
  }
}
