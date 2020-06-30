import { Injectable } from '@angular/core';
import { getWishListUrl, addWishListUrl, deleteWishListUrl } from '../config/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { Wishlist } from '../model/wishlist';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  getWishList():Observable<number[]>
  {
    return this.http.get(getWishListUrl).pipe(
      map((data:any[]) =>{
        let results =[]
        data.forEach( item => results.push(item.product_id))
        return results
      })
    )}

  addToWishList(product_id:number):Observable<any>
  {
    let wishList = new Wishlist(0 , product_id)
    return this.http.post(addWishListUrl,  wishList )


  }

  removeFromWishList(product_id:number):Observable<any>
  {
    return this.http.delete(deleteWishListUrl + '/' +product_id)

  }
}
