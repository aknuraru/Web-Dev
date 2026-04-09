import { Component, input ,output} from '@angular/core';
import {Student} from '../models';

@Component({
  selector: 'app-stdent-card',
  imports: [],
  templateUrl: './stdent-card.html',
  styleUrl: './stdent-card.css',
})
export class StdentCard {
  student=input.required<Student>();
  delete=output<number>();
  onDelete(){
    this.delete.emit(this.student().id);
  }
}
