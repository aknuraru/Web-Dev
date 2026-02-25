import {Component} from '@angular/core';
import {ProductService} from './services/product.service';
import {Product} from './models/product.model';
import {Category} from './models/category.model';
import {ProductList} from './product/product-list/product-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports:[ProductList],
})
export class App {
  categories: Category[];
  selectedCategoryId: number|null=null;
  filteredProducts: Product[]=[];
  constructor(private productService: ProductService,) {
    this.categories = this.productService.getCategories();
  }
  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.filteredProducts=this.productService.getProductByCategory(id);
  }

}
