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
      case "Going to apply":
        classToAdd = "going__to__apply";
        break;
      case "Applied":
        classToAdd = "applied";
        break;
      case "Relaunch":
        classToAdd = "relaunched";
        break;

    }

    return classToAdd;
  }

  setLabelByType(): void {

    let label = "";

    switch (this.type) {
      case "Going to apply":
        label = "Created at ";
        break;
      case "Applied":
        label = "Applied at ";
        break;
      case "Relaunch":
        label = "Relaunched at ";
        break;
    }

    this.label = label;

  }
}
