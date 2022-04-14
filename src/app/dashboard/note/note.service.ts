import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/shared/abstract-service.service';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService extends AbstractService {

  constructor(private http: HttpClient) {
    super();
  }

  browseByApplicationId(applicationId: number): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}/applications/${applicationId}/notes`);
  }

  read(applicationId: number, noteId: number): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}/applications/${applicationId}/notes/${noteId}`);
  }

  edit(applicationId: number, noteId: number, note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}/applications/${applicationId}/notes/${noteId}`, note);
  }

  add(applicationId: number, note: Note): Observable<Note> {
    return this.http.post<Note>(`${this.apiUrl}/applications/${applicationId}/notes`, note);
  }

  delete(applicationId: number, noteId: number): Observable<Note> {
    return this.http.delete<Note>(`${this.apiUrl}/applications/${applicationId}/notes/${noteId}`);
  }
}
