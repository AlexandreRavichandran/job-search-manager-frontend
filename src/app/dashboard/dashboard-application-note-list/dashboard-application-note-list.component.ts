import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../application/application';
import { Note } from '../note/note';

@Component({
  selector: 'jsm-dashboard-application-note-list',
  templateUrl: './dashboard-application-note-list.component.html',
  styleUrls: ['./dashboard-application-note-list.component.scss']
})
export class DashboardApplicationNoteListComponent implements OnInit {
  @Input() noteList: Note[] = [];
  @Input() application!: Application;
  constructor() { }

  ngOnInit(): void {
  }

  deleteFromList(deletedNoteId: number): void {
    this.noteList = this.noteList.filter(note => deletedNoteId !== note.id);
  }

}
