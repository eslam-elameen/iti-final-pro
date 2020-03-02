import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component'
import { ProTypeComponent } from './products/pro-type/pro-type.component'
import { RegisterationComponent } from './registeration/registeration.component'
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component'
import { SearchResultComponent } from './search-result/search-result.component'

import { ShippingAreaComponent } from './shipping-area/shipping-area.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { HomeComponent } from './home/home.component';
import { ProuductRandomComponent } from './prouduct-random/prouduct-random.component';
import { SignleProductComponent } from './signle-product/signle-product.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: 'signin', component: LoginComponent }, 
  { path: 'signup', component: RegisterationComponent }, 
  { path: '', component: HomeComponent },
  { path: 'profile',component:ProfileComponent},
  { path: 'blog', component: BlogComponent },
  { path: "shoppingCart", component: ShoppingCartComponent },
  { path: 'shipping', component: ShippingAreaComponent },
  { path: 'blog/:id', component: SingleBlogComponent },
  { path: 'result', component: SearchResultComponent },
  { path: 'randomProduct/:id', component: SignleProductComponent },
  { path: 'randomProduct', component: ProuductRandomComponent },
  { path: "ourServices", component: OurServicesComponent },
  { path: "catogery/:category", component: ProductsComponent },
  { path: "catogery/:category/:kind", component: ProTypeComponent },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
