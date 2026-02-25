import { UpperCasePipe } from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` {{ username | uppercase}} `,
  imports: [UpperCasePipe],
})
export class App {
  username = 'yOunGTECh';
}
