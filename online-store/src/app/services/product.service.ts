import {Injectable} from '@angular/core';
import {Category} from '../models/category.model';
import {Product} from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories:Category[]=[
    {id:1,name:'Smartphones'},
    {id:2,name:'Laptops'},
    {id:3,name:'Headphones'},
    {id:4,name:'Tablets'},
  ]
  products:Product[]=[
    {id: 1, name: 'iPhone 15', description: 'Apple smartphone', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 1 },

    {id: 2, name: 'Samsung', description: 'Android smartphone', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 1 },

    {id: 3, name: 'Xiaomi', description: 'Android smartphone', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 1 },

    {id: 4, name: 'Google pixel', description: 'Google smartphone', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 1 },

    {id: 5, name: 'OnePLus 12', description: 'OnePlus smartphone', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 1 },

    {id: 6, name: 'Macbook pro 14', description: 'Apple laptop', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 2 },

    {id: 7, name: 'Lenovo', description: 'Window laptop', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 2 },

    {id: 8, name: 'ASUS', description: 'Window laptop', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 2 },

    {id: 9, name: 'Macbook air', description: 'Apple laptop', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 2 },

    {id: 10, name: 'Gigabit', description: 'big Laptop', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 2 },

    {id: 11, name: 'Sony', description: 'headphones wireles', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 3 },

    {id: 12, name: 'Dell', description: 'Dell earbuds', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 3 },

    {id: 13, name: 'JBL', description: 'JBL headphones', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 3 },

    {id: 14, name: 'Airpods pro', description: 'Apple earbuds', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 3 },

    {id: 15, name: 'Samsung buds', description: 'Earbuds', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 3 },

    {id: 16, name: 'Ipad pro', description: 'Apple tablet', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 4 },

    {id: 17, name: 'Samsung galaxy', description: 'Android', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 4 },

    {id: 18, name: 'Lenovo', description: 'lenovo tablet', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 4 },

    {id: 19, name: 'Xiaomi tablet', description: 'xiaomi tablet', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 4 },

    {id: 20, name: 'Huawei tablet', description: 'Huawei tablet', price: 700000, rating: 4.8, image: 'https://ipac31.ru/image/cache/data/product/iPhone/iPhone%2015%20Plus/iPhone-15-plus-logo-300x300-300x300.png',
      images: ['https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-white/iphone-15-white-3.jpg/iphone-15-white-3.jpg/veonmarket%3Alarge',
        'https://i4.storeland.net/3/279/202783812/afacdb/smartfon-apple-iphone-14-pro-max-128gb-zolotoj.jpg',
        'https://gadgetstore.kz/wa-data/public/shop/img/apple-iphone-15-lineup-color-lineup-230912_big.jpg.medium.jpg'],
      link: 'https://kaspi.kz/...',  likes:0,categoryId: 4 },
  ];
  getCategories(){
    return this.categories;
  }
  getProductByCategory(categoryId: number){
    return this.products.filter(product => product.categoryId === categoryId);
  }
}
