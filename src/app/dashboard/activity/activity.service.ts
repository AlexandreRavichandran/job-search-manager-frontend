import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/shared/abstract-service.service';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService extends AbstractService {

  constructor(private http: HttpClient) {
    super();
  }

  getByApplicationId(applicationId: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.apiUrl}/${applicationId}/activities`);
  }

  read(applicationId: number, activityId: number): Observable<Activity> {
    return this.http.get<Activity>(`${this.apiUrl}/${applicationId}/activities/${activityId}`)
  }

  add(applicationId: number, activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(`${this.apiUrl}/${applicationId}/activities`, activity);
  }

  delete(applicationId: number, activityId: number): Observable<Activity> {
    return this.http.delete<Activity>(`${this.apiUrl}/${applicationId}/activities/${activityId}`)
  }
  
}
