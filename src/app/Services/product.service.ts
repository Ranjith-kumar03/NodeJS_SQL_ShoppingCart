import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'kannuse','he is stupid one', 23, 'assets/pictureGallery/20200528_150237.jpg'),
    new Product(2, 'pannuse','he is stupid one', 23, 'assets/pictureGallery/20200527_220119.jpg'),
    new Product(3, 'mannuse','he is stupid one', 23, 'assets/pictureGallery/20200528_143420.jpg'),
    new Product(4, 'sannuse','he is stupid one', 23, 'assets/pictureGallery/20200528_150237.jpg'),
    new Product(5, 'oannuse','he is stupid one', 23, 'assets/pictureGallery/20200528_150237.jpg'),
    new Product(6, 'uannuse','he is stupid one', 23, 'assets/pictureGallery/20200528_150237.jpg'),
    new Product(7, 'iannuse','he is stupid one', 23, 'assets/pictureGallery/20200528_150237.jpg'),
    new Product(8, 'aannuse','he is stupid one', 23, 'assets/pictureGallery/20200528_150237.jpg'),
    new Product(9, 'bannuse','he is stupid one', 23, 'assets/pictureGallery/20200528_150237.jpg'),
    new Product(10, 'dannuse','he is stupid one', 23, 'assets/pictureGallery/20200528_150237.jpg'),
    new Product(11, 'fannuse','he is stupid one', 23, 'assets/pictureGallery/20200528_150237.jpg')


  ]

  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }
}
