import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedLoginService } from './hardcoded-login.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService implements CanActivate {

  constructor(private hardCodedLogin: HardcodedLoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardCodedLogin.isUserLoggedIn())
      return true;
    else{
      this.router.navigate(['login']);
return false;}

  }
}