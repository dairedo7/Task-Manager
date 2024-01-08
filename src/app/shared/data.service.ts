import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private todos!: Todo[];

  constructor() {
    this.loadTodos();
  }

  private loadTodos() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    } else {
      this.todos = [];
    }
  }

  private saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.saveTodos();
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
    this.saveTodos();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }
}
