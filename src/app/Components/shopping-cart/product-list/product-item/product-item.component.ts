import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { MessangerService } from 'src/app/Services/messanger.service';
import { CartService } from 'src/app/Services/cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() public itemStatusWishlist: boolean
  constructor(private messangerService: MessangerService ,
              private cartService: CartService ,
              private wishlist: WishlistService) { }
@Input() public product_item : Product;

  ngOnInit(): void {


  }
  handlerAddToCart()
  {

    this.cartService.addCartItem(this.product_item).subscribe(()=>{

      this.messangerService.sentMsg(this.product_item)


    })

  }

    handleAddtoWishList()
        {
          console.log("wish list is true "+this.itemStatusWishlist +"babababa se the id "+this.product_item.iD)
          this.wishlist.addToWishList(this.product_item.iD).subscribe(()=>{
          this.itemStatusWishlist =  true;
        });
        }
   handleremoveFromWishList()
        {
          this.wishlist.removeFromWishList(this.product_item.iD).subscribe(data=>{
            this.itemStatusWishlist =  false;
            console.log("wish list is false "+this.itemStatusWishlist)})
        }

}
