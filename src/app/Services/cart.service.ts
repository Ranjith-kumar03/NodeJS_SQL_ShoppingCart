import { productsUrl } from './../config/api';
import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { Observable, throwError} from 'rxjs';
import { map ,  catchError} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AddcartUrl, GetcartUrl , DeletecartUrl } from '../config/api';
import { Product } from '../model/product';
import { ProductService } from './product.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public id = 1;
  constructor( private http: HttpClient , private productService: ProductService) { }

  getCartItem(): Observable<CartItem[]>
  {

     return this.http.get<CartItem[]>(GetcartUrl).pipe(
       map((result: any[]) => {
         const cartItems: CartItem[] = [];
         for (const item of result)
         {
           // console.log("iam in the get")
          // console.log(item)
           let productExists = false;

           for (const i in cartItems)
            {
                  if (cartItems[i].productId === item.productId)
                     {
                          cartItems[i].qty++;
                          cartItems[i].price = item.price;
                          productExists = true;
                          break;
            }
    }
           if (!productExists)
          {
          // console.log("product added in service")

      // iD, name, description = '', price = 0, imageUrl = 'assets/pictureGallery/20200528_145826.jpg'
             const product = new Product(item.productId, item.productName, '', item.price , '');
             // console.log(product.price)
             cartItems.push(new CartItem(item.id, product));
          }

         }

         return cartItems;
       }));

  }

  addCartItem(product: Product): Observable<any>
  {
  const cart = new CartItem(0, product, 1);

  console.log("cart service add triggered")

  return this.http.post<any>(AddcartUrl , cart);
  }





  updateCartItemQuantity(item: CartItem):Observable<any>
  {
    console.log(DeletecartUrl +'/'+ item.id + " iam hit")
    return this.http.delete<any>(DeletecartUrl +'/'+ item.id).pipe(catchError(this.errorHandler))
  }

errorHandler(error: HttpErrorResponse)
{
  return throwError(error)
}




}
