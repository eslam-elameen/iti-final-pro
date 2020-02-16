import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DogsComponent} from './dogs/dogs.component'


const routes: Routes = [
  {path:"products/:category",component:DogsComponent},
  {path:"products/:category/:kindFood",component:DogsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
