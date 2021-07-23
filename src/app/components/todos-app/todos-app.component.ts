import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-app',
  templateUrl: './todos-app.component.html',
  styleUrls: ['./todos-app.component.css'],
})
export class TodosAppComponent implements OnInit {
  todos: Todo[] = [{ content: '', completed: false }];
  inputTask: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Task',
        completed: true,
      },
      {
        content: 'Second Task',
        completed: false,
      },
    ];
  }

  addTask() {

    if (this.inputTask!="")
      this.todos.push({ content: this.inputTask, completed: false });
    this.inputTask = '';
  }
  deleteTask(id: number) {
    this.todos = this.todos.filter((v, i) => i != id);
  }

  toggle(id: number) {
    this.todos.map((v, i) => {
      if (i == id) {
        v.completed = !v.completed;
      }
      return v;
    });
  }
}
