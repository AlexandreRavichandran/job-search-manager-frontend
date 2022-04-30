import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jsm-toggle-display',
  templateUrl: './toggle-display.component.html',
  styleUrls: ['./toggle-display.component.scss']
})
export class ToggleDisplayComponent implements OnInit {
  @Output() wrapperEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  wrapped: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleWrapper(): void {
    this.wrapped = !this.wrapped;
    this.wrapperEvent.emit(this.wrapped);
  }
}
