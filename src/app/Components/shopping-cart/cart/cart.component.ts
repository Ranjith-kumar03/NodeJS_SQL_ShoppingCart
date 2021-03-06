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
    this.handleSubscription();

    this.loadCartItems();

  }

  handleSubscription()
  {
    this.messangerService.getMsg().subscribe(() => {
      setTimeout(() => {
        this.loadCartItems()
      }, 500);

   })
  }
  loadCartItems()
  {
    this.cartService.getCartItem().subscribe((CartItems: CartItem[]) => {

     this.cartItems = CartItems

     this.totalPrice();
     //console.log("display component called")
   })
  }




  totalPrice()
  {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
this.cartTotal +=(item.qty * item.price);
});
    }

    reduceCount(item: CartItem)
    {


      // console.log(item)

      if(item.qty>0)
      {
        console.log("rwe are hit for refresh")

        console.log("reduce count hit")
        this.cartService.updateCartItemQuantity(item).subscribe((error)=>{
          if(error!==null)
          {
          console.log(error)
          console.log("Iam not getting data")
          }
          setTimeout(() => {
            this.loadCartItems()
          }, 500);

        })


      }else{
        console.log("canno0t find cart item")
        this.cartItems.pop()

      }
    }
}
