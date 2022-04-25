import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Application } from '../application/application';
import { Note } from '../note/note';
import { NoteService } from '../note/note.service';

@Component({
  selector: 'jsm-dashboard-application-note-item',
  templateUrl: './dashboard-application-note-item.component.html',
  styleUrls: ['./dashboard-application-note-item.component.scss']
})
export class DashboardApplicationNoteItemComponent implements OnInit {
  @Input() note!: Note;
  @Input() application!: Application;
  @Output() deleteNoteEvent: EventEmitter<number> = new EventEmitter<number>();
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.noteService.delete(this.application.id, this.note.id).subscribe({
      next: note => {
        this.deleteNoteEvent.emit(note.id);
      }
    })
  }
}
