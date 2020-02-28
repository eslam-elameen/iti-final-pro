import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxStarRatingModule } from 'ngx-star-rating';
// import { NgxNavbarModule } from 'ngx-bootstrap-navbar';                                  
import {MaterialAnglur} from './material'
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
// import { BrowserModule } from '@angular/platform-browser';


import { FilterResultPipe } from './filter-result.pipe';
import { RandomBlogComponent } from './random-blog/random-blog.component';
import { GalaryComponent } from './galary/galary.component';
import { OfferProductComponent } from './offer-product/offer-product.component';
import { from } from 'rxjs';


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
    FilterResultPipe,
    
    HomeComponent,
    ServicesComponent,
    ProuductRandomComponent,
    TestComponent,
    SignleProductComponent,
    RandomBlogComponent,
    GalaryComponent,
    OfferProductComponent
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
    CarouselModule,
    NgxStarRatingModule,
    RatingModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    MaterialAnglur
    

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
