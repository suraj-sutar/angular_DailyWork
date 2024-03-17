import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todoList: any[] = [];

  // inject that service
  constructor(private _todoService: TodosService) {}

  //then create method for creating data then make a call
  createTodo() {
    let todo = {
      id: new Date().getTime(),
      title: 'Practice Decorator',
    };

    // this._todosService.createTodo(todo).subscribe((res) => {});
    this._todoService.createTodo(todo).subscribe((res: any) => {
      console.log('Resourse created', res);
      this.getTodos();
    });
  }

  getTodos() {
    this._todoService.getTodos().subscribe((res) => {
      console.log('get all todos', res);
      this.todoList = res;
    });
  }

  editTodo(todo: any) {
    console.log('edit call', todo);

    let data = {
      id: new Date().getTime(),
      title: 'Edit - Practice makes man perfect',
    };

    this._todoService.updateTodo(todo.id, data).subscribe((res) => {
      console.log('Data updated successfully', res);
      this.getTodos();
    });
  }

  deleteTodo(id: any) {
    console.log('delete called', id);

    this._todoService.deleteTodo(id).subscribe((res) => {
      console.log('Record deleted');
      this.getTodos();
    });
  }
  ngOnInit(): void {
    this.getTodos();
  }
}
