import {Component} from '@angular/core';
import {TodoService} from './todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  private todos: any;
  private newTodo: string;
  private editMode: boolean[] = new Array();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodos();
  }

  title = 'Angular 6 TODO App';

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => {
        this.todos = todos;
        for (var i = 0; i < todos.length; i++) {
          this.editMode.push(false);
        }
        console.log(this.editMode);
      })
  }

  addTodo(): void {
    this.todoService.addTodo(this.newTodo)
      .subscribe(res => {
        this.newTodo = '';
        this.getTodos();
      });
  }

  deleteTodo(todoId, isDone): void {
    this.todoService.deleteTodo(todoId, isDone)
      .subscribe(res => {
        console.log('deleted', res);
        this.getTodos();
      });
  }

  editTodo(id, text, index): void {
    console.log(id, text, index);
    this.todoService.editTodo(id, text)
      .subscribe(res => {
        this.editMode[index] = false;
        this.getTodos();
      })
  }





}
