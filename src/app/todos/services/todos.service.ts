import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos$= new BehaviorSubject<TodoInterface[]>([]);
  filter$= new BehaviorSubject<FilterEnum>(FilterEnum.all);
  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      id: Math.random().toString(16).slice(2),
      text,
      isCompleted: false
    };
    const updatedTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos);
  }
  toggleAll(isCompleted: boolean): void {
    console.log("isCompleted", isCompleted);
    const updatedTodos = this.todos$.getValue().map(todo => {
      return {
        ...todo,
        isCompleted
      }
    });
    console.log("updatedTodos",updatedTodos);
    this.todos$.next(updatedTodos);
  }
  changeFilter(filterName: FilterEnum): void{
    this.filter$.next(filterName);
  }

  changeTodo(id: string, text: string): void {
    const updatedTodos = this.todos$.getValue().map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text
        }
      }
      return todo;
    });
    this.todos$.next(updatedTodos);
  }
}
