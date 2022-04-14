import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/shared/abstract-service.service';
import { Discussion } from './discussion';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService extends AbstractService {

  constructor(private http: HttpClient) {
    super();
  }

  browseByApplication(applicationId: number): Observable<Discussion[]> {
    return this.http.get<Discussion[]>(`${this.apiUrl}/applications/${applicationId}/discussions`);
  }

  read(applicationId: number, discussionId: number): Observable<Discussion> {
    return this.http.get<Discussion>(`${this.apiUrl}/applications/${applicationId}/discussions/${discussionId}`);
  }

  edit(applicationId: number, discussionId: number, discussion: Discussion): Observable<Discussion> {
    return this.http.put<Discussion>(`${this.apiUrl}/applications/${applicationId}/discussions/${discussionId}`, discussion);
  }

  add(applicationId: number, discussion: Discussion): Observable<Discussion> {
    return this.http.post<Discussion>(`${this.apiUrl}/applications/${applicationId}/discussions`, discussion);
  }

  delete(applicationId: number, discussionId: number): Observable<Discussion> {
    return this.http.delete<Discussion>(`${this.apiUrl}/applications/${applicationId}/discussions/${discussionId}`);
  }

}
