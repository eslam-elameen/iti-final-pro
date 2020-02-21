import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute, Router } from "@angular/router";
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-random-blog',
  templateUrl: './random-blog.component.html',
  styleUrls: ['./random-blog.component.scss']
})
export class RandomBlogComponent implements OnInit {
  posts;
  ranarr = []
  sets;
  postItem;
  cards;
  random;
  constructor(private http: BlogServiceService, private dataServ: BlogServiceService, private _router: Router) { }

  ngOnInit() {
    this.http.getData().subscribe(res => {
      this.posts = res;
      // console.log(this.posts);

    });



    this.http.getData().subscribe(res => {
      this.cards = res;
      for (let item of this.cards) {
        this.random = this.cards[Math.floor(Math.random() * this.cards.length)];
        if (this.ranarr.length < 5) {
          this.ranarr.push(this.random)
        }
        this.sets = [...new Set(this.ranarr)]
        // console.log(this.random);
      }

    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

}
