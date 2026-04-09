import  { Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TaskList} from './task-list/task-list';
@Component({
  selector: 'app-root',
  imports: [FormsModule,TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tasks: string[]=[];
  newTask:string="";
  addTask(){
    if(this.newTask!=''){
      this.tasks.push(this.newTask);
    }else{
      alert("add task");
    }
    this.newTask='';
  }
  deleteTask(index:number){
    this.tasks.splice(index,1);
  }
}
