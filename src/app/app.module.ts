import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxStarRatingModule } from 'ngx-star-rating';
// import { NgxNavbarModule } from 'ngx-bootstrap-navbar';                                  

import { NavbarComponent } from './navbar/navbar.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { FooterComponent } from './footer/footer.component';
import { ShippingAreaComponent } from './shipping-area/shipping-area.component';
import { BlogComponent } from './blog/blog.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { ProductsComponent } from './products/products.component';
import { ProTypeComponent } from './products/pro-type/pro-type.component';
import { SearchComponent } from './navbar/search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProuductRandomComponent } from './prouduct-random/prouduct-random.component';
import { TestComponent } from './test/test.component';
import { SignleProductComponent } from './signle-product/signle-product.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { NgxSpinnerModule } from "ngx-spinner";
import { FilterResultPipe } from './filter-result.pipe';
import { RandomBlogComponent } from './random-blog/random-blog.component';
import { GalaryComponent } from './galary/galary.component';
import { OfferProductComponent } from './offer-product/offer-product.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgwWowModule } from 'ngx-wow';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FileUploadModule } from 'ng2-file-upload';//import this package for profile img
import { RegisterationComponent } from './registeration/registeration.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckComponent } from './check/check.component';
import { PayComponent } from './pay/pay.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroHeaderComponent,
    FooterComponent,
    ShippingAreaComponent,
    BlogComponent,
    SingleBlogComponent,
    ProductsComponent,
    ProTypeComponent,
    SearchComponent,
    SearchResultComponent,
    NavComponent,
    HomeComponent,
    UserprofileComponent,
    PayComponent,
    CheckComponent,
    FilterResultPipe,
    RegisterationComponent,
    HomeComponent,
    ServicesComponent,
    ProuductRandomComponent,
    TestComponent,
    SignleProductComponent,
    RandomBlogComponent,
    GalaryComponent,
    OfferProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    // CarouselModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule,
    RouterModule,
    CarouselModule,
    NgxStarRatingModule,
    RatingModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgwWowModule,
    NgxSpinnerModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
