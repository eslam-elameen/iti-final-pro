import { Component, OnInit } from '@angular/core';
import { ProudctsService } from './../proudcts.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from "@angular/router";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-prouduct-random',
  templateUrl: './prouduct-random.component.html',
  styleUrls: ['./prouduct-random.component.scss']
})
export class ProuductRandomComponent implements OnInit {
  bsModalRef: BsModalRef;
  userId : number;
  ranarr = []
  sets;
  postItem;
  max: number = 5;
  rate: number = 4.4;
  isReadonly: boolean = true;


  constructor(private http: ProudctsService, private dataServ: ProudctsService, private single: ActivatedRoute, private _router: Router, private blogService: ProudctsService) { }
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
        if (this.ranarr.length < 4) {
          this.ranarr.push(this.random)
        }
        this.sets = [...new Set(this.ranarr)]
        // console.log(this.random);
      }

    });


  }
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 1
  //     },
  //     740: {
  //       items: 2
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }

}
