import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  images=[
  
    {img:"./../../assets/img/1.jpg"},
    {img:"./../../assets/img/2.jpg"},
    {img:"./../../assets/img/3.jpg"},
    {img:"./../../assets/img/3.jpg"}

 ]
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


  ngOnInit() {
  }

}
