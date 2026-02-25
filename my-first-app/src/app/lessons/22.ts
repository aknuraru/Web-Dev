import {Component} from '@angular/core';
import {ReversePipe} from './23';
@Component({
  selector: 'app-root',
  template: ` Reverse Machine: {{ word }} `,
  imports: [ReversePipe],
})
export class App {
  word = 'You are a champion';
}
