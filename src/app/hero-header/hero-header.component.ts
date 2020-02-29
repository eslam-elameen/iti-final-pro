import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements OnInit {
  images;
  constructor(private wowService: NgwWowService,private http: BlogServiceService, private dataServ: BlogServiceService, private _router: Router) { }

  ngOnInit() {
    this.wowService.init();
    this.http.getSlider().subscribe(res => {
      this.images = res;
      // console.log(this.posts);

    });
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    nav:false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    items: 3,
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
        items: 1
      }
    },
  }
}
