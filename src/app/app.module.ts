import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { FooterComponent } from './footer/footer.component';
import { ShippingAreaComponent } from './shipping-area/shipping-area.component';
import { BlogComponent } from './blog/blog.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroHeaderComponent,
    FooterComponent,
    ShippingAreaComponent,
    BlogComponent,
    SingleBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    HttpClientModule,
    FormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
