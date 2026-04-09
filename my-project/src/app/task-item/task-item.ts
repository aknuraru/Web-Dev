import {Component, input, output, OnInit, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem implements OnInit, OnChanges, OnDestroy {
  task = input.required<string>();
  index = input.required<number>();
  delete = output<number>();

  createdAt: string = '';

  constructor() {
    console.log('Component constructor');
  }

  ngOnInit() {
    this.createdAt = new Date().toLocaleTimeString();
    console.log('Component ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Component ngOnChanges');
    console.log(changes)
  }

  ngOnDestroy() {
    console.log('Component ngOnDestroy');
  }

  onDelete() {
    this.delete.emit(this.index());
  }
}
