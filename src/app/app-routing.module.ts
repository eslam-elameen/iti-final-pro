import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { from } from 'rxjs';
import { BlogComponent } from './blog/blog.component';
import { ShippingAreaComponent } from './shipping-area/shipping-area.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

const routes: Routes = [

  {path:'blog', component : BlogComponent },
  {path:'shipping', component:ShippingAreaComponent},
  {
    path:'blog/:id',
    component: SingleBlogComponent
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
