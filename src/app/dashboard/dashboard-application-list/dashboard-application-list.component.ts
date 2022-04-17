import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Application } from '../application/application';
import { ApplicationService } from '../application/application.service';

@Component({
  selector: 'jsm-dashboard-application-list',
  templateUrl: './dashboard-application-list.component.html',
  styleUrls: ['./dashboard-application-list.component.scss']
})
export class DashboardApplicationListComponent implements OnInit {
  @Input() status!: string;
  @Output() numberOfApplicationEvent = new EventEmitter<number>();
  applicationList: Application[] = [];
  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.getApplications();
  }


  getApplications(): void {
    this.applicationService.browseByStatus(this.status).subscribe(applications => {
      this.numberOfApplicationEvent.emit(applications.length);
      this.applicationList = applications;

      console.log(this.applicationList);
    })
  }

}
