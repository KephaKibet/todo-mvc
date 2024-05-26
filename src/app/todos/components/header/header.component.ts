import { Component } from '@angular/core';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  text: string = '';
  changeText(event: Event) {
    const target = event.target as HTMLInputElement;
    this.text
    console.log(target.value);
  }

  addToto():void {
    console.log('addTodo',this.text);
  }
}
