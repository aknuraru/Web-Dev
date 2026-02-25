import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div [contentEditable]="isEditable">Type</div> `,
})
export class App {
  isEditable = true;
}
