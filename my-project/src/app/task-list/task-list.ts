import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TaskItem} from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule,  TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks:string[]=[];
  newTask:string="";
  addTask(){
    if(this.newTask!==''){
      this.tasks.push(this.newTask);
    }
    else{
      alert("add task:");
    }
    this.newTask='';
  }
  deleteTask(index:number){
    this.tasks.splice(index,1);
  }
}
