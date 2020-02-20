import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FileUploadModule } from 'ng2-file-upload';//import this package for profile img

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { FormsModule } from '@angular/forms';
import { DiplayimgprofileComponent } from './diplayimgprofile/diplayimgprofile.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { Profile1Component } from './profile1/profile1.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    DiplayimgprofileComponent,
    NavComponent,
    HomeComponent,
    Profile1Component,
    UserprofileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule ,  
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
