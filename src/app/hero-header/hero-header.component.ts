import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute, Router } from "@angular/router";
import { CLASS_NAME } from 'ngx-bootstrap/modal/modal-options.class';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss']
})
export class HeroHeaderComponent implements OnInit {
  images;
  id :any;

  constructor(private http: BlogServiceService, private dataServ: BlogServiceService, private _router: Router,private wowService: NgwWowService) { }  
  ngOnInit() {
    this.wowService.init();
    this.http.getSlider().subscribe(res => {
      this.images = res;
      this.id = this.images[1];
      console.log(this.id);

      
    //  this.id = document.getElementById('slide2');
      console.log(this.images[1]);
      this.images[1] = Object.assign(this.images[1], {class: "slideTwo"});
      console.log( this.images[1]);
      
      console.log(this.id.class);
      
      

      

        
    });
   
  }
  customOptions: OwlOptions = {
    loop: true,
    // autoplay:true,
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
