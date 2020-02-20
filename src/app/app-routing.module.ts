import { UserprofileComponent } from './userprofile/userprofile.component';
import { Profile1Component } from './profile1/profile1.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  

  {
    path:'userProfile',component:UserprofileComponent
  },
  {
    path:'',component:HomeComponent
  },
  
  {
    path:'home',component:HomeComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
 
  {
    path:'register',component:RegisterationComponent
  },
  {
    path:"displayImg",component:DisplayComponent
  },
  {
    path:"profile1",component:Profile1Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
