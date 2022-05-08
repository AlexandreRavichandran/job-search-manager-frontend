import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../../note/note';
import { NoteService } from '../../note/note.service';

@Component({
  selector: 'jsm-note-edit-modal-content',
  templateUrl: './note-edit-modal-content.component.html',
  styleUrls: ['./note-edit-modal-content.component.scss']
})
export class NoteEditModalContentComponent implements OnInit {
  note!: Note;
  modalTitle: string = "";
  noteEditForm: FormGroup = new FormGroup({
    date: new FormControl("", Validators.required),
    description: new FormControl("")
  });

  constructor(
    private dialogRef: MatDialogRef<NoteEditModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteService: NoteService) {

  }

  ngOnInit(): void {
    if (this.data.datas?.note !== undefined) {
      this.setFormInitialValues();
    }
    this.modalTitle = this.data.title;
  }

  onSubmit(): void {

    if (this.guessActionByTitle() === "create") {
      this.note = {
        id: null,
        date: new Date(),
        description: this.noteEditForm.value["description"],
        createdAt: new Date(),
      }

      this.noteService.add(this.data.datas.applicationId, this.note).subscribe(() => {
        this.dialogRef.close();
      })
    } else if (this.guessActionByTitle() === "edit") {

      this.note.date = this.noteEditForm.value["date"];
      this.note.description = this.noteEditForm.value["description"];
      this.noteService.edit(this.data.datas.applicationId, this.data.datas.note.id, this.note).subscribe(() => {
        this.dialogRef.close();
      })
    }
  }

  setFormInitialValues(): void {
    this.noteEditForm.setValue(
      {
        "description": this.note.description,
        "date": this.note.date
      });
  }

  private guessActionByTitle(): string {
    let action: string = "";

    if (this.modalTitle.includes("Edition")) {
      action = "edit";
    } else if (this.modalTitle.includes("Creation")) {
      action = "create";
    }

    return action;
  }
}
