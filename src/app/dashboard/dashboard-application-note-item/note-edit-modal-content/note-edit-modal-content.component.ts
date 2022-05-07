import { Component, OnInit, Inject } from '@angular/core';
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
    date: new FormControl("", Validators.required),
    description: new FormControl("")
  });

  constructor(
    private dialogRef: MatDialogRef<NoteEditModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private noteService: NoteService) {

  }

  ngOnInit(): void {
    this.note = this.data.datas.note;
    this.setFormInitialValues();
  }

  onSubmit(): void {
    this.note.date = this.noteEditForm.value["date"];
    this.note.description = this.noteEditForm.value["description"];
    this.noteService.edit(this.data.datas.applicationId, this.data.datas.note.id, this.note).subscribe(() => {
      this.dialogRef.close();
    })
  }

  setFormInitialValues(): void {
    this.noteEditForm.setValue(
      {
        "description": this.note.description,
        "date": this.note.date
      });
  }

}
