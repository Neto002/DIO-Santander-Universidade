import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  todo: Todo = {
    id: 0,
    title: '',
    done: false,
  };

  constructor() {}

  ngOnInit(): void {
    let todoList = JSON.parse(localStorage.getItem('todoList')!);
    if (!todoList) {
      this.todoList = [];
    } else {
      this.todoList = todoList;
    }
  }

  addTodo(title: string): void {
    const id = this.todoList.length + 1;
    this.todoList.push({
      id: id,
      title: title,
      done: false,
    });
    console.log(this.todoList);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  removeTodo(todo: Todo): void {
    console.log(todo);
    this.todoList.splice(this.todoList.indexOf(todo), 1);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
