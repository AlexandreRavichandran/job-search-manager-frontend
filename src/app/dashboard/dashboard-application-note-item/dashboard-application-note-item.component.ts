import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Application } from '../application/application';
import { Note } from '../note/note';
import { NoteService } from '../note/note.service';
import { NoteEditModalContentComponent } from './note-edit-modal-content/note-edit-modal-content.component';

@Component({
  selector: 'jsm-dashboard-application-note-item',
  templateUrl: './dashboard-application-note-item.component.html',
  styleUrls: ['./dashboard-application-note-item.component.scss']
})
export class DashboardApplicationNoteItemComponent extends ModalComponent<NoteEditModalContentComponent> implements OnInit {

  @Input() note!: Note;
  @Input() application!: Application;
  @Output() deleteNoteEvent: EventEmitter<number> = new EventEmitter<number>();
  constructor(modal: MatDialog, private noteService: NoteService) {
    super(modal);
  }

  ngOnInit(): void {

    this.datas = {
      note: this.note,
      applicationId: this.application.id,
    }
  }

  delete(): void {
    this.noteService.delete(this.application.id, this.note.id).subscribe({
      next: note => {
        this.deleteNoteEvent.emit(note.id);
      }
    })
  }

  openEditForm(): void {
    this.modalTitle = "Edition of note";
    this.open();
  }

  getContentClass(): ComponentType<NoteEditModalContentComponent> {
    return NoteEditModalContentComponent;
  }

}
