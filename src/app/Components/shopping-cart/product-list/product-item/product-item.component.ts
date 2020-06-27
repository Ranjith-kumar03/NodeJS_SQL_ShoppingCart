import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { MessangerService } from 'src/app/Services/messanger.service';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private messangerService: MessangerService , private cartService: CartService) { }
@Input() public product_item : Product;

  ngOnInit(): void {


  }
  handlerAddToCart()
  {
    console.log(this.product_item)
    this.cartService.addCartItem(this.product_item).subscribe(()=>{
      this.messangerService.sentMsg(this.product_item)
    })

  }



}
