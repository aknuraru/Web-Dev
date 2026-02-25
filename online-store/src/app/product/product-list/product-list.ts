import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import {ProductItem} from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  standalone: true,
  imports: [
    ProductItem
  ],
})
export class ProductList {
  @Input() products: Product[] = [];

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}

