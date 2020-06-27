import { productsUrl } from './../config/api';
import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AddcartUrl,GetcartUrl } from '../config/api';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public id:number =1;
  constructor( private http: HttpClient) { }

  getCartItem(): Observable<CartItem[]>
  {
     return this.http.get<CartItem[]>(GetcartUrl).pipe(
       map((result: any[]) =>{
         let cartItems: CartItem[] = [];
         for(let item of result)
         {
           console.log(item)
           let productExists = false;

           for(let i in cartItems)
    {
      if(cartItems[i].productId === item.productId)
      {
              cartItems[i].qty++;
              cartItems[i].price = item.price
              productExists = true;
              break;
      }
    }
           if(!productExists)
    {
      //let product = new Product()   id: 1, productId: 1, productName: "Panjith", qty: 1, price: 23}
      let product = new Product(item.productId,item.productName, item.price ) 
    cartItems.push(new CartItem(item.id, product));
    }

         } 

         return cartItems;
       }));
      
  }

  addCartItem(product: Product):Observable<any>
  {
  let cart = new CartItem(0,product,1);


  return this.http.post<any>(AddcartUrl , cart);
  }
}
