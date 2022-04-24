import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/shared/abstract-service.service';
import { Application } from './application';
import { ApplicationImportation } from './application-importation';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService extends AbstractService {
  private headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {
    super();
  }

  browseByStatusAndArchived(status: string, archived: boolean): Observable<Application[]> {
    const formattedStatus: string = status.replace(/ /g, "_");
    return this.http.get<Application[]>(`${this.apiUrl}/applications/status/${formattedStatus}/archived/${archived}`);
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

  generateApplicationDataByLink(link: ApplicationImportation): Observable<Application> {
    return this.http.post<Application>(`${this.apiUrl}/applications/importation`, link, { headers: this.headers });
  }

}
