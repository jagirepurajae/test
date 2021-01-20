import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteTodoService {

  constructor(private http:HttpClient) { }

  deleteToDoById(id:number)
  {
    return this.http.delete(`http://localhost:8080/HellowWorldController/deleteToDo/${id}`);
  }
}

