import { Component } from '@angular/core';
import {Product} from './product-model';
import {ProductCard} from './product-card/product-card';


@Component({
  selector: 'app-root',
  imports: [ ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products: Product[]=[
    {id:1,name:"bread",price:150,inStock:true,likes:0,},
    {id:2,name:"milk",price:130,inStock:true,likes:0,},
    {id:3,name:"pasta",price:768,inStock:true,likes:0,},
    {id:4,name:"water",price:90,inStock:true,likes:0,},
    {id:5,name:"sweets",price:345,inStock:true,likes:0,},
  ];
  deleteProduct(id:number){
    this.products=this.products.filter(product=>product.id !== id);
  }
}
