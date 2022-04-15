import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from '../abstract-service.service';
import { Auth } from './auth';
import { Token } from './token';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractService {

  constructor(private http: HttpClient) {
    super();
  }

  login(credentials: Auth): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/login`, credentials);
  }

  register(user: User): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/register`, user);
  }
}
