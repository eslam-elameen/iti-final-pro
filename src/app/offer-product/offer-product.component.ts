import { Component, OnInit } from '@angular/core';
import {ProudctsService} from '../proudcts.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgxStarRatingModule } from 'ngx-star-rating';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-offer-product',
  templateUrl: './offer-product.component.html',
  styleUrls: ['./offer-product.component.scss']
})
export class OfferProductComponent implements OnInit {
  x: number = 5;
  y: number = 4;
  ranarr = []
  sets;
  postItem;
  // 
  constructor(private http: ProudctsService, private wowService: NgwWowService, private dataServ: ProudctsService, private _router: Router,private productData: ProudctsService) { }
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
        // console.log(this.random);
      }

    });


  }


}
