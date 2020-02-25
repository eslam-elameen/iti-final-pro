import { PayComponent } from './pay/pay.component';
import { CheckComponent } from './check/check.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RegisterationComponent } from './registeration/registeration.component';

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
import { LoginComponent } from './login/login.component';







const routes: Routes = [
  {path:'',component: UserprofileComponent},
  {path:'blog', component : BlogComponent },
  {path:'shipping', component:ShippingAreaComponent},
  {path:'blog/:id',component: SingleBlogComponent},
  {path:'result',component:SearchResultComponent},
 {path: 'randomProduct/:id', component:SignleProductComponent},
 {path : 'randomProduct',component:ProuductRandomComponent},
  {path:":category",component:ProductsComponent},
  {path:":category/:kind",component:ProTypeComponent},
  {path:"check",component:CheckComponent},
  {path:"pay",component:PayComponent},
  {path:'userProfile',component:UserprofileComponent},
  {path:'register',component:RegisterationComponent},

  // {path:"cats/:kind",component:DogsComponent},
  // {path:"birds/:kind",component:DogsComponent},
 
  
  // {
  //   path:'home',component:HomeComponent
  // },
  
 
  // {path:'',redirectTo:'home',pathMatch:'full'},
  // {path:'result',component:SearchResultComponent},
  // {path:'blog',component:BlogComponent},
  // {path:'blog/:id',component:SingleBlogComponent},
 
  // {path:":category",component:ProductsComponent},
  // {path:":category/:kind",component:ProTypeComponent},

  // // {path:"cats/:kind",component:DogsComponent},
  // // {path:"birds/:kind",component:DogsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
