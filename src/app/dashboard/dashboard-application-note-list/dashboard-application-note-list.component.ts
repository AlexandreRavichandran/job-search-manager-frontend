import { ComponentType } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Application } from '../application/application';
import { NoteEditModalContentComponent } from '../dashboard-application-note-item/note-edit-modal-content/note-edit-modal-content.component';
import { Note } from '../note/note';

@Component({
  selector: 'jsm-dashboard-application-note-list',
  templateUrl: './dashboard-application-note-list.component.html',
  styleUrls: ['./dashboard-application-note-list.component.scss']
})
export class DashboardApplicationNoteListComponent extends ModalComponent<NoteEditModalContentComponent> implements OnInit {

  @Input() noteList: Note[] = [];
  @Input() application!: Application;
  constructor(modal: MatDialog) {
    super(modal);
  }

  ngOnInit(): void {
  }

  deleteFromList(deletedNoteId: number): void {
    this.noteList = this.noteList.filter(note => deletedNoteId !== note.id);
  }

  create(): void {
    this.datas = {
      applicationId: this.application.id,
    }
    this.modalTitle = "Creation of new note";
    this.open();
  }

  getContentClass(): ComponentType<NoteEditModalContentComponent> {
    return NoteEditModalContentComponent;
  }
}
