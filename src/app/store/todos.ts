import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import {
  addSubtodo as addingSubtodo,
  recursionFilter,
  recursionSearch,
  recursionToggleTodoComplete,
  Todo,
} from 'src/entity/todo';
import { LOCALSTORAGE_TODOS } from 'src/shared/constants';

class Todos {
  todoArray: Todo[] = localStorage.getItem(LOCALSTORAGE_TODOS)
    ? JSON.parse(localStorage.getItem(LOCALSTORAGE_TODOS) || '[]')
    : [];
  activeTask: Todo | null = null;
  todoName = '';
  todoDesciption = '';

  constructor() {
    makeAutoObservable(this);
  }

  get trimmedTodoName() {
    return this.todoName.trim();
  }

  getNewTodo() {
    const newTodo: Todo = {
      id: uuidv4(),
      name: this.todoName,
      description: this.todoDesciption,
      isCompleted: false,
      subTodos: [],
    };

    return newTodo;
  }

  setTodoName(newValue: string) {
    this.todoName = newValue;
  }

  setTodoDescription(newValue: string) {
    this.todoDesciption = newValue;
  }

  clearFieldsValues() {
    this.setTodoName('');
    this.setTodoDescription('');
  }

  addTodo() {
    if (!this.trimmedTodoName) {
      return;
    }

    this.todoArray.push(this.getNewTodo());

    localStorage.setItem(LOCALSTORAGE_TODOS, JSON.stringify(this.todoArray));
    this.setTodoName('');
    this.setTodoDescription('');
  }

  addSubtodo(id: string) {
    if (!this.trimmedTodoName) {
      return;
    }

    this.todoArray = addingSubtodo(id, this.todoArray, this.getNewTodo());

    localStorage.setItem(LOCALSTORAGE_TODOS, JSON.stringify(this.todoArray));
    this.setTodoName('');
    this.setTodoDescription('');
  }

  removeTodo(id: string) {
    this.todoArray = recursionFilter(id, this.todoArray);

    localStorage.setItem(LOCALSTORAGE_TODOS, JSON.stringify(this.todoArray));

    if (!this.todoArray.length) {
      this.activeTask = null;
      localStorage.removeItem(LOCALSTORAGE_TODOS);
    }
  }

  toggleComplete(id: string) {
    this.todoArray = recursionToggleTodoComplete(id, this.todoArray);

    localStorage.setItem(LOCALSTORAGE_TODOS, JSON.stringify(this.todoArray));
  }

  setActiveTask(id: string | null) {
    if (id === null) {
      this.activeTask = null;

      return;
    }

    this.activeTask = recursionSearch(id, this.todoArray);
  }
}

export const todos = new Todos();
