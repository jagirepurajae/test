import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class GetAllTodoService {

  constructor(private http: HttpClient) { }

  getAllToDo() {

    let basicHeader=this.createBasicHttpAuthentucation();
    let headers=new HttpHeaders({Authorization:basicHeader})
    return this.http.get<ToDo[]>(`http://localhost:8080/HellowWorldController/getAllToDos`,{headers});
  }

  createBasicHttpAuthentucation()
  {
    let username='rajae'
    let password='rajae'
    let basicHeader='Basic '+window.btoa(username+':'+password);
    console.log(basicHeader)
    return basicHeader;
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
