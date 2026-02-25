import { Component } from '@angular/core';
import {Product} from '../../models/product.model';
@Component({
  selector: 'app-product-list',
  imports: [],
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[]=[
    {
      id: 1,
      name:'Iphone 15',
      description:'Latest Iphone with powerful chip',
      price:2000000,
      rating:4.8,
      image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: [
        'https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'
      ],
      link:'https://kaspi.kz/shop/...',
    },
    {
      id: 2,
      name:'Iphone 6',
      description:'First Iphone with  chip',
      price:100000,
      rating:2.0,
      image: 'https://example.com/image.jpg',
      images: [
        'https://example.com/img1.jpg',
        'https://example.com/img2.jpg',
        'https://example.com/img3.jpg'
      ],
      link:'https://kaspi.kz/shop/...',
    },
    {
      id: 3,
      name:'Iphone 7',
      description:'Second Iphone with powerful chip',
      price:4500000,
      rating:4.4,
      image: 'https://example.com/image.jpg',
      images: [
        'https://example.com/img1.jpg',
        'https://example.com/img2.jpg',
        'https://example.com/img3.jpg'
      ],
      link:'https://kaspi.kz/shop/...',
    },
    {
      id: 4,
      name:'Iphone 8',
      description:'Third Iphone with powerful chip',
      price:3000000,
      rating:4.8,
      image: 'https://example.com/image.jpg',
      images: [
        'https://example.com/img1.jpg',
        'https://example.com/img2.jpg',
        'https://example.com/img3.jpg'
      ],
      link:'https://kaspi.kz/shop/...',
    },
    {
      id: 5,
      name:'Iphone 9',
      description:'Forth Iphone with powerful chip',
      price:1200000,
      rating:4.7,
      image: 'https://example.com/image.jpg',
      images: [
        'https://example.com/img1.jpg',
        'https://example.com/img2.jpg',
        'https://example.com/img3.jpg'
      ],
      link:'https://kaspi.kz/shop/...',
    },
    {
      id: 6,
      name:'Iphone 10',
      description:'Fifth Iphone with powerful chip',
      price:2000000,
      rating:4.3,
      image: 'https://example.com/image.jpg',
      images: [
        'https://example.com/img1.jpg',
        'https://example.com/img2.jpg',
        'https://example.com/img3.jpg'
      ],
      link:'https://kaspi.kz/shop/...',
    },
    {
      id: 7,
      name:'Iphone 11',
      description:'Sixth Iphone with powerful chip',
      price:2000000,
      rating:4.5,
      image: 'https://example.com/image.jpg',
      images: [
        'https://example.com/img1.jpg',
        'https://example.com/img2.jpg',
        'https://example.com/img3.jpg'
      ],
      link:'https://kaspi.kz/shop/...',
    },
    {
      id: 8,
      name:'Iphone 12',
      description:'Seventh Iphone with powerful chip',
      price:2300000,
      rating:3.2,
      image: 'https://example.com/image.jpg',
      images: [
        'https://example.com/img1.jpg',
        'https://example.com/img2.jpg',
        'https://example.com/img3.jpg'
      ],
      link:'https://kaspi.kz/shop/...',
    },
    {
      id: 9,
      name:'Iphone 13',
      description:'Eighth Iphone with powerful chip',
      price:8900000,
      rating:4.9,
      image: 'https://example.com/image.jpg',
      images: [
        'https://example.com/img1.jpg',
        'https://example.com/img2.jpg',
        'https://example.com/img3.jpg'
      ],
      link:'https://kaspi.kz/shop/...',
    },
    {
      id: 10,
      name:'Iphone 14',
      description:'Ninth Iphone with powerful chip',
      price:6700000,
      rating:4.8,
      image: 'https://example.com/image.jpg',
      images: [
        'https://example.com/img1.jpg',
        'https://example.com/img2.jpg',
        'https://example.com/img3.jpg'
      ],
      link:'https://kaspi.kz',
    }
  ];
  share(product : Product){
    const url=
      `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }
  nextImage(product: Product){
    const curr=product.images.indexOf(product.image);
    const next=(curr+1)%product.images.length;
    product.image=product.images[next];
  }
  prevImage(product: Product){
    const curr=product.images.indexOf(product.image);
    const prev=(curr-1+product.images.length)%product.images.length;
    product.image=product.images[prev];
  }
}
