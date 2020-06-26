import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/Services/messanger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public cartItem: CartItem[] = []
public cartTotal:number = 0;
public reduceQtyCount:number =0
public c1: CartItem 
  constructor(private messangerService:MessangerService) { }

  ngOnInit(): void {
    this.messangerService.getMsg().subscribe((product: Product) => {
   this.addProductToCart(product)
    })
  }

  addProductToCart(product:Product)
  {
    let productExists = false
    for(let i in this.cartItem)
    {
      if(this.cartItem[i].productId === product.id)
      {
              this.cartItem[i].qty++
              productExists = true
              break;
      }
    }
    if(!productExists)
    {
      this.cartItem.push(
        new CartItem(product.id, product.name, 1, product.price))
    }
    this.cartTotal = 0;
    this.cartItem.forEach(item => {
    this.cartTotal +=(item.qty * item.price)
    })

    }

    reduceCount(item: CartItem)
    {
     
      console.log("Reduce is triggered ------------------------" + typeof(item))
       console.log(item.productName + "is the name from child")
      
      if(item.qty>0)
      {
        item.qty--;
      }else{
        console.log("canno0t find cart item")
        this.cartItem.pop()
               
      } 
    }
}
