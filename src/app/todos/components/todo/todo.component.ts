import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
 
})
export class TodoComponent implements OnInit {
  @Input('todo')
  todoProps!: TodoInterface
  @Input('isEditing') isEditingProps!: boolean;
  @Output('setEditingId') setEditingIdEvent: EventEmitter<string | null> = new EventEmitter();
  
  editingText: string = '';
  constructor(private todosService: TodosService) {
  }
  ngOnInit(): void {
    this.editingText = this.todoProps.text;
  }

  setTodoInEditMode(): void {
    console.log("set todo In edit mode");
    this.setEditingIdEvent.emit(this.todoProps.id);
  }
  removeTodo(): void {
    console.log("remove todo");
    // this.setEditingIdEvent.emit(null);
  }
  toggleTodo(): void {
    console.log("toggle todo");
  }

  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
    console.log("change text");
  }

  changeTodo(): void {
    console.log("change todo", this.editingText);
    this.todosService.changeTodo(this.todoProps.id, this.editingText);
    this.setEditingIdEvent.emit(null);
    // const target = event.target as HTMLInputElement;
    // this.todoProps.isCompleted = target.checked;
  }
 
}



