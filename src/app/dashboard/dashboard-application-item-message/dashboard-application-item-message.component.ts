import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-application-item-message',
  templateUrl: './dashboard-application-item-message.component.html',
  styleUrls: ['./dashboard-application-item-message.component.scss']
})
export class DashboardApplicationItemMessageComponent implements OnInit {
  @Input() type!: string;
  @Input() date!: Date;
  label!: string;

  constructor() { }

  ngOnInit(): void {
    this.setLabelByType();
  }

  setClassByType(): string {
    let classToAdd = "";

    switch (this.type) {
      case "going_to_apply":
        classToAdd = "going__to__apply";
        break;
      case "applied":
        classToAdd = "applied";
        break;
      case "relaunch":
        classToAdd = "relaunched";
        break;

    }
    return classToAdd;
  }

  setLabelByType(): void {

    let label = "";

    switch (this.type) {
      case "going_to_apply":
        label = "Created at ";
        break;
      case "applied":
        label = "Applied at ";
        break;
      case "relaunch":
        label = "Relaunched at ";
        break;
    }

    this.label = label;

  }
}
