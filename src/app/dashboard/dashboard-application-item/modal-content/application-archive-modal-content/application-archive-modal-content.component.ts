import { Component, OnInit } from '@angular/core';
import { ApplicationAbstractModalContentComponent } from '../application-abstract-modal-content/application-abstract-modal-content.component';

@Component({
  selector: 'jsm-application-archive-modal-content',
  templateUrl: './application-archive-modal-content.component.html',
  styleUrls: ['./application-archive-modal-content.component.scss']
})
export class ApplicationArchiveModalContentComponent extends ApplicationAbstractModalContentComponent implements OnInit {

  ngOnInit(): void {
  }

}
