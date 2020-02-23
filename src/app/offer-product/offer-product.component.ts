import { Component, OnInit } from '@angular/core';
import {ProudctsService} from '../proudcts.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgxStarRatingModule } from 'ngx-star-rating';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-offer-product',
  templateUrl: './offer-product.component.html',
  styleUrls: ['./offer-product.component.scss']
})
export class OfferProductComponent implements OnInit {
  ranarr = []
  sets;
  postItem;
  constructor(
    private http: ProudctsService,
      private dataServ: ProudctsService,
       private _router: Router,
       private productData: ProudctsService,
       private shoppingCart: ShoppingCartService
       ) { }
  cards;
  random;
  posts;
  ngOnInit() {
    this.http.getData().subscribe(res => {
      this.posts = res;
      // console.log(this.posts);

    });
    this.http.getData().subscribe(res => {
      this.cards = res;
      for (let item of this.cards) {
        this.random = this.cards[Math.floor(Math.random() * this.cards.length)];
        if (this.ranarr.length <= 4) {
          this.ranarr.push(this.random)
        }
        this.sets = [...new Set(this.ranarr)]
        // console.log(this.random);
      }

    });

 // Save Product in local Storage 
 this.shoppingCart.saveInLocalStorge();
  }
  customOptions: OwlOptions = {
    loop: true,
    // margin: 10,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 0
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

 // Add Product to Shopping Cart
 onAddToCart(product) {
  this.shoppingCart.addCart(product)
}
}
