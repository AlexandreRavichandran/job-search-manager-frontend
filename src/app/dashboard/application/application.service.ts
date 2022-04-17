import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/shared/abstract-service.service';
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService extends AbstractService {

  constructor(private http: HttpClient) {
    super();
  }

  browseByStatus(status: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/applications`);
  }

  read(applicationId: number): Observable<Application> {
    return this.http.get<Application>(`${this.apiUrl}/applications/${applicationId}`);
  }

  edit(application: Application): Observable<Application> {
    return this.http.put<Application>(`${this.apiUrl}/applications/${application.id}`, application);
  }

  add(application: Application): Observable<Application> {
    return this.http.post<Application>(`${this.apiUrl}/applications`, application);
  }

  delete(applicationId: number): Observable<Application> {
    return this.http.delete<Application>(`${this.apiUrl}/applications/${applicationId}`);
  }
  
}
