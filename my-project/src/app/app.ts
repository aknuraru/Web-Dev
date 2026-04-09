import { Component } from '@angular/core';
import {Student} from './models';
import {StdentCard} from './stdent-card/stdent-card';
import {TaskList} from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [StdentCard,TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  students: Student[]=[
    {id:1,name:"Aknur",email:"a_rysk@kbtu.kz"},
    {id:2,name:"Alia",email:"q_alia@kbtu.kz"},
    {id:3,name:"Arnur",email:"a_arnu@kbtu.kz"},
  ];
  deleteStudent(id:number){
    this.students=this.students.filter(student=>student.id !== id);
  }
}
