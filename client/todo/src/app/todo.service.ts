import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }


  private todosUrl = 'http://localhost:3000/api/todo';

  getTodos(): Observable<any[]> {

    return this.http.get<any[]>(this.todosUrl);


    // return of([
    //   {
    //     text: 'first todo',
    //     createdAt: 'time of creation'
    //   },
    //   {
    //     text: 'second todo',
    //     createdAt: 'time of creation'
    //   },
    //   {
    //     text: 'third todo',
    //     createdAt: 'time of creation'
    //   }]);
  }

  addTodo(todoText: string): Observable<any> {
    return this.http.post<any>(this.todosUrl, {text: todoText});
  }

  deleteTodo(todoId: string, isDone: boolean): Observable<any> {
    return this.http.put(this.todosUrl+'/'+todoId, {isDone: isDone});
  }

  editTodo(todoId: string, todoText: string): Observable<any> {
    return this.http.put(this.todosUrl+'/'+todoId, {text: todoText});
  }
}
