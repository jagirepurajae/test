import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteTodoService } from '../service/data/delete-todo.service';
import { GetAllTodoService } from '../service/data/get-all-todo.service';

export class ToDo {
  constructor(public id: number, public description: String, public done: boolean, public date: Date) {

  }

}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})



export class TodoComponent implements OnInit {
  // public todo={id:1, description:'to learn dance'};
  // public todos=[
  //  new ToDo(1,'to learn Angular',false, new Date()),
  //  new ToDo(2,'to learn Java',false, new Date()),
  //  new ToDo(3,'to learn MySql',false, new Date()),
  //  new ToDo(4,'to learn Html',false, new Date())
  // ];
  public message: string = '';
  public todos: any;
  public todo:any;
  constructor(public getalltoservce: GetAllTodoService, private deleteTodoservice: DeleteTodoService, private router: Router) { }

  ngOnInit() {
    this.getallToDO();
  }

  getallToDO() {
    this.getalltoservce.getAllToDo().subscribe(response => this.todos = response);
  }

  deleteToDo(id: number) {
    this.deleteTodoservice.deleteToDoById(id).subscribe(response => {
      this.message = `Deleted ToDo with id: ${id} Successfully!`;
      this.getallToDO();
    })

  }

  editToDo(id: number) {
    this.router.navigate(['todos', id]);
  }
  addToDo()
  {
   this.router.navigate(['todos',-1])
  }
}
