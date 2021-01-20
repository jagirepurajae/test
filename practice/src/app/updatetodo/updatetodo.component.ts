import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllTodoService } from '../service/data/get-all-todo.service';
import { ToDo } from '../todo/todo.component';

@Component({
  selector: 'app-updatetodo',
  templateUrl: './updatetodo.component.html',
  styleUrls: ['./updatetodo.component.css']
})
export class UpdatetodoComponent implements OnInit {
  id: number = 0;
  public todo: ToDo = new ToDo(8, '', true, new Date());
  constructor(private router: Router, private getAllTodoService: GetAllTodoService, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.getAllTodoService.getToDoById(this.id).subscribe(data => this.todo = data);
  }
  saveTODo() {
    this.getAllTodoService.saveToDo(this.todo).subscribe(data => console.log(data))
    
    this.router.navigate(['todos']);
  }
}
