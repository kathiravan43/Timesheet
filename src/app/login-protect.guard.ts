import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginProtectGuard implements CanActivate {
  public isAuthenticated:any = sessionStorage.getItem('userName');
  constructor(private router: Router ,private login:LoginComponent){}
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): boolean {
    if (!this.login.success) {
      this.router.navigate(['login']);
    return false;

    }
    else

    return true;
  }
}


