import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component'
import {ProTypeComponent} from './products/pro-type/pro-type.component'

import { BlogComponent } from './blog/blog.component';
import {SingleBlogComponent} from './single-blog/single-blog.component'



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'blog',component:BlogComponent},
  {path:'blog/:id',component:SingleBlogComponent},
 
  {path:":category",component:ProductsComponent},
  {path:":category/:kind",component:ProTypeComponent},

  // {path:"cats/:kind",component:DogsComponent},
  // {path:"birds/:kind",component:DogsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
