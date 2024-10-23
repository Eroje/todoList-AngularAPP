/* import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
} */

  import { Component } from '@angular/core';
  import { TodoListComponent } from './todo-list/todo-list.component';

  @Component({
    standalone: true,
    selector: 'app-root',
    template: '<app-todo-list></app-todo-list>',
    imports: [TodoListComponent],
  })
  export class AppComponent {}

