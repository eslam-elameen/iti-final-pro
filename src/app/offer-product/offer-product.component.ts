import { Component, OnInit } from '@angular/core';
import { ProudctsService } from '../proudcts.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgxStarRatingModule } from 'ngx-star-rating';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ShoppingCartService } from '../shopping-cart.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-offer-product',
  templateUrl: './offer-product.component.html',
  styleUrls: ['./offer-product.component.scss']
})
export class OfferProductComponent implements OnInit {
  ranarr = []
  sets;
  postItem;
  modul;
  constructor(
    private http: ProudctsService,
    private dataServ: ProudctsService,
    private _router: Router,
    private productData: ProudctsService,
    private shoppingCart: ShoppingCartService,
    private wowService: NgwWowService,
  ) { }

  cards;
  random;
  posts;
  ngOnInit() {
    this.wowService.init();
    this.http.getData().subscribe(res => {
      this.posts = res;
      // console.log(this.posts);

    });
    this.http.getData().subscribe(res => {
      this.cards = res;
      
      for (let item of this.cards) {
        this.random = this.cards[Math.floor(Math.random() * this.cards.length)];
       if (this.ranarr.length < 4) {
          this.ranarr.push(this.random)
        }
        
        this.sets = [...new Set(this.ranarr)]
        // console.log(this.sets[0].price);
        
      }

    });
    // this.http.getData().subscribe( data =>{
    //   this.cards = data
    //   for (let i = 0; i < this.cards.length; i++) {
        
    //     console.log(this.modul);
        
      
    //   }
    // })

    // Save Product in local Storage 
    this.shoppingCart.saveInLocalStorge();
  }


  // Add Product to Shopping Cart
  onAddToCart(product) {
    this.shoppingCart.addCart(product)
  }
}
