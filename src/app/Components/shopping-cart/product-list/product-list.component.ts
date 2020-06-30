import { ProductService } from 'src/app/Services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService,private wishListService: WishlistService) { }
  public products: Product[] = []
  public  wishlists:number[] =[]
  ngOnInit(): void {
    this.loadProducts()
    this.loadWishList();
  }

  loadProducts()
  {
    this.productService.getProducts().subscribe(products =>{
      this.products = products;

     });
  }

  loadWishList()
  {
    this.wishListService.getWishList().subscribe(data => {
      this.wishlists  = data
      console.log(" see the adata "+this.wishlists)
    })
  }





}
