import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.getLoggedUserToken()) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }

}
