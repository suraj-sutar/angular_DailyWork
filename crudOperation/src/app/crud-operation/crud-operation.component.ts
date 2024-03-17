import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css'],
})
export class CrudOperationComponent implements OnInit {
  //create a one veriable for storing the getting data
  todosList: any[] = [];

  //first inject that serive
  constructor(private _todosService: TodosService) {}

  //this method is create the todos ok but this method is not trigeer automatically
  //so create a one button in html then add a event banding into that button and pass this method
  createTodos() {
    //first create data
    let todo = {
      //we will create a a random number using date and getTime Method
      id: new Date().getTime(),
      title: 'Practice Logical Programs ',
    };

    this._todosService.createTodos(todo).subscribe((res) => {
      console.log('Create Todos', res);
      this.getTodos();
    });
  }

  //call this method to get the data from the server
  getTodos() {
    this._todosService.getTodos().subscribe((res) => {
      console.log('Get the data From Local Server', res);
      this.todosList = res;
    });
  }
  ngOnInit(): void {
    this.getTodos();
  }

  //edit entity then we need create a method and also inside that we need to
  // create data to update the entity

  editTodos(todo: any) {
    let data = {
      id: new Date().getTime(),
      title: 'Update - Practice daily one Program ',
    };

    this._todosService.updateTodos(todo.id, data).subscribe((res) => {
      console.log('Update successfully...', res);
      this.getTodos();
    });
  }

  delTodos(id: any) {
    this._todosService.deleteTodos(id).subscribe((res) => {
      console.log('Delete Created Entity...', res);
      this.getTodos();
    });
  }
}
