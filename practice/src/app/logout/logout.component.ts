import { Component, OnInit } from '@angular/core';
import { HardcodedLoginService } from '../service/hardcoded-login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedLoginService:HardcodedLoginService) { }

  ngOnInit(): void {
    this.hardcodedLoginService.logout();
  }

}
