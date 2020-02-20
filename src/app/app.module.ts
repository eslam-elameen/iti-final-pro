import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FileUploadModule } from 'ng2-file-upload';//import this package for profile img

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { DiplayimgprofileComponent } from './diplayimgprofile/diplayimgprofile.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { Profile1Component } from './profile1/profile1.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    ProfileComponent,
    DiplayimgprofileComponent,
    NavComponent,
    HomeComponent,
    DisplayComponent,
    Profile1Component,
    UserprofileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
