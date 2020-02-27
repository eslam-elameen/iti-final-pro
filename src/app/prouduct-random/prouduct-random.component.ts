import { Component, OnInit } from '@angular/core';
import { ProudctsService } from './../proudcts.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from "@angular/router";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ShoppingCartService } from '../shopping-cart.service';

import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-prouduct-random',
  templateUrl: './prouduct-random.component.html',
  styleUrls: ['./prouduct-random.component.scss']
})
export class ProuductRandomComponent implements OnInit {
  
  x: number = 5;
  y: number = 2;
  bsModalRef: BsModalRef;
  userId: number;
  ranarr = []
  sets;
  postItem;
  isReadonly: boolean = true;


  constructor(
    private http: ProudctsService,
    private dataServ: ProudctsService,
    private single: ActivatedRoute,
    private _router: Router,
    private blogService: ProudctsService,
    private shoppingCart: ShoppingCartService,
    private wowService: NgwWowService,
  ) { }

  cards;
  random;
  posts;
  ngOnInit() {
    // Save Product in local Storage 
    this.shoppingCart.saveInLocalStorge();

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
        // console.log(this.random);
      }

    });


  }
 
  // Add Product to Shopping Cart
  onAddToCart(product) {
    this.shoppingCart.addCart(product)
  }

}
