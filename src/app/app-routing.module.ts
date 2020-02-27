import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component'
import {ProTypeComponent} from './products/pro-type/pro-type.component'

import { BlogComponent } from './blog/blog.component';

import {SearchResultComponent} from './search-result/search-result.component'
import { ShippingAreaComponent } from './shipping-area/shipping-area.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { HomeComponent } from './home/home.component';
import { ProuductRandomComponent } from './prouduct-random/prouduct-random.component';
import { SignleProductComponent } from './signle-product/signle-product.component';


const routes: Routes = [

  {path:'',component: HomeComponent},
  {path:'blog', component : BlogComponent },
  {path:'shipping', component:ShippingAreaComponent},
  {path:'blog/:id',component: SingleBlogComponent},
  {path:'result',component:SearchResultComponent},
 {path: 'randomProduct/:id', component:SignleProductComponent},
 {path : 'randomProduct',component:ProuductRandomComponent},
  {path:":category",component:ProductsComponent},
  {path:":category/:kind",component:ProTypeComponent},

  // {path:"cats/:kind",component:DogsComponent},
  // {path:"birds/:kind",component:DogsComponent},
]







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
