import { NgFor, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  newTask: string;
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];
  add() {
    this.tasksList.push(this.newTask);
    this.newTask = '';
    console.log(this.tasksList);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter((e) => e !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
    console.log(this.tasksList);
  }
}
