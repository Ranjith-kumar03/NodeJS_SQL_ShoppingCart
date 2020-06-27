import { CartService } from './../../../Services/cart.service';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/Services/messanger.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public cartItems: CartItem[] = []
public cartTotal:number = 0;
public reduceQtyCount:number =0
public c1: CartItem
  constructor(private messangerService: MessangerService ,private cartService: CartService ) { }
   public id: number = 0;
  
   
  ngOnInit(): void {
    this.handleSubscription()
    this.loadCartItems()
   
  }

  handleSubscription()
  {
    this.messangerService.getMsg().subscribe((product: Product) => {
      this.loadCartItems()
   })
  }
  loadCartItems()
  {
    this.cartService.getCartItem().subscribe((cartItems: CartItem[]) => {
      
     this.cartItems = cartItems
   })
  }


  

  addProductToCart(product:Product)
  {
    let productExists = false
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
this.cartTotal +=(item.qty * item.price);
});
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
        this.cartItems.pop()

      }
    }
}
