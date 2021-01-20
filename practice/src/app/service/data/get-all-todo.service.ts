import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class GetAllTodoService {

  constructor(private http: HttpClient) { }

  getAllToDo() {
    return this.http.get<ToDo[]>(`http://localhost:8080/HellowWorldController/getAllToDos`);
  }

  
  getToDoById(id: number) {
    return this.http.get<ToDo>(`http://localhost:8080/HellowWorldController/getToDoById/${id}`);
  }

  updateToDo(todo:ToDo)
  {
    return this.http.put(`http://localhost:8080/HellowWorldController/updateToDo`,todo);
  }

  addToDo(todo:ToDo)
  {
    return this.http.post(`http://localhost:8080/HellowWorldController/addToDo`,todo);
  }
}
