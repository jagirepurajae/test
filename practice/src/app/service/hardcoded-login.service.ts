import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedLoginService {

  constructor() { 

  }

  validateLogin(username:any,password:any)
  {
    if(username==='rajae' && password==='rajae'){
      sessionStorage.setItem('username',username);
    return true;}
    return false;
  }

  logout()
  {
    sessionStorage.removeItem('username');
  }

  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('username');
    return !(user===null)
  }
}
