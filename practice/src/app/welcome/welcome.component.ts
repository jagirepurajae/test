import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllTodoService } from '../service/data/get-all-todo.service';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public name: any = '';
  constructor(private _activatedRouter: ActivatedRoute, private getallToDoService: GetAllTodoService, private router: Router) { }

  ngOnInit() {
    this.name = this._activatedRouter.snapshot.params['name'];
  }
  getHelloworld() {
    this.router.navigate(['/todos']);
  }
}
