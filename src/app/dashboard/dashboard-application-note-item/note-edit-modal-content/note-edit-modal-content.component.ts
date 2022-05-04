import { Component, OnInit, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../../note/note';
import { NoteService } from '../../note/note.service';

@Component({
  selector: 'app-note-edit-modal-content',
  templateUrl: './note-edit-modal-content.component.html',
  styleUrls: ['./note-edit-modal-content.component.scss']
})
export class NoteEditModalContentComponent implements OnInit {
  note!: Note;
  noteEditForm: FormGroup = new FormGroup({
    date: new FormControl(new Date(), Validators.required),
    description: new FormControl("")
  });
  
  constructor(
    private dialogRef: MatDialogRef<NoteEditModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private noteService: NoteService) {

  }

  @Output() noteUpdateEvent: EventEmitter<Note> = new EventEmitter<Note>();
  ngOnInit(): void {
    this.note = this.data.datas.note;
  }

  onSubmit(): void {
    this.note.date = this.noteEditForm.value["date"];
    this.note.description = this.noteEditForm.value["description"];
    this.noteService.edit(this.data.datas.applicationId, this.data.datas.note.id, this.note).subscribe(note => {
      this.dialogRef.close();
    })

  }

}
