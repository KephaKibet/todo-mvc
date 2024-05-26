import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    CommonModule,
    AppRoutingModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
