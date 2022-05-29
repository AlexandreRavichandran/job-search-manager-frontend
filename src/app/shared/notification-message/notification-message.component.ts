import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jsm-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.scss']
})
export class NotificationMessageComponent implements OnInit {
  @Input() type!: string;
  @Input() content: string = "";
  @Input() closed: boolean = false;
  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
    this.type = "success";
    console.log(this.type);
  }

  formatStyleByType(): string {
    let typeClass = "";
    switch (this.type) {
      case "success":
        typeClass = "type__success";
        break;

      case "error":
        typeClass = "type__error";
    }

    return typeClass;
  }

  onClose(): void {
    this.closed = true;
    this.closeEvent.emit(true);
  }
}
