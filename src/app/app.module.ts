import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { NavComponent } from './Components/Shared/nav/nav.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { FilterComponent } from './Components/shopping-cart/filter/filter.component';
import { ProductListComponent } from './Components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './Components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './Components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './Components/shopping-cart/product-list/product-item/product-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FilterComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
