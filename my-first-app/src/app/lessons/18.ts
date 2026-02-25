import {Component, inject} from '@angular/core';
import {CarService} from './17';

@Component({
  selector: 'app-root',
  template: '<p> {{ carService.getCars() }} </p>',
})
export class App {
  carService = inject(CarService);
}
