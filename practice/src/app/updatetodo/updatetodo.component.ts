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

  constructor(private router: Router, private getAllTodoService: GetAllTodoService, private activeRoute: ActivatedRoute) {

  }
  public todo:ToDo=new ToDo(this.id,'',false,new Date());;
  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    if(this.id!=-1){
    this.todo=new ToDo(this.id,'',false,new Date());
    this.getAllTodoService.getToDoById(this.id).subscribe(data => this.todo = data);
    }
  }
  saveTODo() {
    if(this.id===-1){
      this.getAllTodoService.addToDo(this.todo).subscribe(data=>{console.log('added successfully')
    this.router.navigate(['todos'])});
    }else{
      this.getAllTodoService.updateToDo(this.todo).subscribe(data => this.router.navigate(['todos']));
    }
  
  }
}
