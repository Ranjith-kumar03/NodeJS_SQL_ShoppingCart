import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/Shared/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: '' , redirectTo: '/shop' , pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shop', component: ShoppingCartComponent},
  {path: '**' , component: PageNotFoundComponent}
];
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule {

}
