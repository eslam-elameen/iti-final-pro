import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allProduct;

  constructor(private productServices: BlogServiceService) { }

  ngOnInit() {
    this.productServices.getData().subscribe(data =>{
      this.allProduct = data;
      console.log(this.allProduct)
    })
  }

}
