import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from '../abstract-service.service';
import { User } from '../user/user';
import { Auth } from './auth';
import { Token } from './token';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    super();
  }

  getLoggedUserToken(): string | null {
    return sessionStorage.getItem("token");
  }

  getUsername(): any {
    let datas;
    const token = this.getLoggedUserToken();
    if (token) {
      datas = this.jwtHelper.decodeToken(token);
    }
    return datas.sub;
  }
  login(credentials: Auth): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/login`, credentials);
  }

  register(user: User): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/register`, user);
  }

  logout(): void {
    sessionStorage.clear();
  }
}
