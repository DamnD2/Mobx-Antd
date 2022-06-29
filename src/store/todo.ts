import { makeAutoObservable } from 'mobx';
import convert from '../api/converter';
import { TodoType } from '../interfaces/interfaces';

class Todo {
  todos: TodoType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => (this.todos = convert.toTodos(json)));
  }

  changeStatus(id: string) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  addTodo(title: string) {
    this.todos = [
      ...this.todos,
      {
        id: (this.todos.length + 1).toString(),
        userId: 1,
        title,
        completed: false,
      },
    ];
  }
}

export default new Todo();
