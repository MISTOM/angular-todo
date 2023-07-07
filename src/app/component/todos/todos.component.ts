import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  
  todos:Todo[] = []
  inputTodo:string = "";
  
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        description: 'First todo',
        completed: false
      },
      {
        description: 'Second todo',
        completed: false
      }
    ]
  }
  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  addTodo () {
    this.todos.push({
      description: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

}
