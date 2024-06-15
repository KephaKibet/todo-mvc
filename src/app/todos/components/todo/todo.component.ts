import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
 
})
export class TodoComponent {
  @Input('todo')
  todoProps!: TodoInterface
  @Input('isEditing') isEditingProps!: boolean ;
@Output('setEditingId') setEditingIdEvent:EventEmitter<string|null> = new EventEmitter();

  setTodoInEditMode(): void{
    console.log("set todo In edit mode");
    this.setEditingIdEvent.emit(this.todoProps.id);
  }
}
