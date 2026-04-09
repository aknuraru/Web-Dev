import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
    task=input.required<String>();
    index = input.required<number>();
    delete=output<number>();
    onDelete(){
      this.delete.emit(this.index());
    }
}
