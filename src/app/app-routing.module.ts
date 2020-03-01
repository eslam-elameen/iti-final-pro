import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component'
import {ProTypeComponent} from './products/pro-type/pro-type.component'
import { RegisterationComponent } from './registeration/registeration.component'
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component'
import {SearchResultComponent} from './search-result/search-result.component'

import { ShippingAreaComponent } from './shipping-area/shipping-area.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { HomeComponent } from './home/home.component';
import { ProuductRandomComponent } from './prouduct-random/prouduct-random.component';
import { SignleProductComponent } from './signle-product/signle-product.component';
import { OfferProductComponent } from './offer-product/offer-product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { from } from 'rxjs';

const routes: Routes = [

  {path:'',component: HomeComponent},
  {path:'blog', component : BlogComponent },
  {path:'shoppingCart', component:ShoppingCartComponent},
  {path:'profile', component:ProfileComponent},
 

  
  {path:"signIn",component:LoginComponent },
  {path:"signUp",component:RegisterationComponent },
  {path:'blog/:id',component: SingleBlogComponent},
  {path:'result',component:SearchResultComponent},
  {path:"ourService",component:OurServicesComponent},
  {path:'randomProduct',component:ProuductRandomComponent},
  {path: 'OfferProduct', component: OfferProductComponent },
  {path:'randomProduct/:id', component: SignleProductComponent },
  {path:'OfferProduct/:id', component: SignleProductComponent },
  {path:":category",component:ProductsComponent},
  {path:":category/:kind",component:ProTypeComponent},
  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
