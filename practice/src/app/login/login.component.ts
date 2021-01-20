import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedLoginService } from '../service/hardcoded-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName='rajaejagirepu';
  public password='rajae';
  public errorMessage='Invalid credentials';
  public invalidLogin=false;

  constructor(private _route:Router,private hardCodedLogin:HardcodedLoginService) { }

  ngOnInit(): void {
  }

  handleLogin()
  {
    if(this.hardCodedLogin.validateLogin(this.userName,this.password))
    {
      this.invalidLogin=false;
      this._route.navigate(['/welcome',this.userName]);
    } 
    else
    {
      this.invalidLogin =true; 
    }
  }

}
