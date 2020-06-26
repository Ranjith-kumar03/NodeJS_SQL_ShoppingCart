import { ProductService } from 'src/app/Services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }
  public products: Product[] = []
  ngOnInit(): void {
     this.productService.getProducts().subscribe(products =>{
      this.products = products;
     });
  }





}
