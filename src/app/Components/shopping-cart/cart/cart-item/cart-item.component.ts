import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
@Input() public product: CartItem
@Output() public childEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    
  }
  handlerRemoveFromCart()
  {
    this.childEvent.emit(this.product)
  }
}
