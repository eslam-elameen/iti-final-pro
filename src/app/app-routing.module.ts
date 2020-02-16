import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DogsComponent} from './dogs/dogs.component'

import { from } from 'rxjs';
import { BlogComponent } from './blog/blog.component';
import { ShippingAreaComponent } from './shipping-area/shipping-area.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

const routes: Routes = [
  {path:"products/:category",component:DogsComponent},
  {path:"products/:category/:kindFood",component:DogsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
