import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {productsUrl, productUrl} from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /* products: Product[] = [
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


  ] */


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(productsUrl);
  }

  getOneProduct(id: number): Observable<Product>{
    return this.http.get<Product>(productUrl + id);
  }
}
