import { Component, OnInit } from '@angular/core';
import { ProudctsService } from './../proudcts.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-prouduct-random',
  templateUrl: './prouduct-random.component.html',
  styleUrls: ['./prouduct-random.component.scss']
})
export class ProuductRandomComponent implements OnInit {
  ranarr = []
  sets;
  postItem;
  constructor(private http: ProudctsService, private dataServ: ProudctsService, private single: ActivatedRoute, private _router: Router, private blogService: ProudctsService) { }
  cards;
  random;
  posts;
  ngOnInit() {

    this.http.getData().subscribe(res => {
      this.posts = res;
      console.log(this.posts);

    });



    this.http.getData().subscribe(res => {
      this.cards = res;
      for (let item of this.cards) {
        this.random = this.cards[Math.floor(Math.random() * this.cards.length)];
        if (this.ranarr.length < 5) {
          this.ranarr.push(this.random)
        }
        this.sets = [...new Set(this.ranarr)]
        console.log(this.random);
      }

    });


  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
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

}
