import { Component, OnInit } from '@angular/core';
import { ApplicationStatusConstant } from '../application/application-status-constant';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public applicationConstant: ApplicationStatusConstant) { }

  ngOnInit(): void {
  }

}
