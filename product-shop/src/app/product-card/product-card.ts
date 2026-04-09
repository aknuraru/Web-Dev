import { Component,input,output } from '@angular/core';
import {Product} from '../product-model';
@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
    product=input.required<Product>();
    delete=output<number>();
    like(){
      this.product().likes++;
    }
    onDelete(){
      this.delete.emit(this.product().id);
    }
}
