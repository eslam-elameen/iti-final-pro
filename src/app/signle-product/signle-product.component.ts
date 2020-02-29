import { Component, OnInit } from '@angular/core';
import {ProudctsService} from '../proudcts.service';
import { ActivatedRoute, Router } from "@angular/router";
import { NgxStarRatingModule } from 'ngx-star-rating';

import { from } from 'rxjs';
@Component({
  selector: 'app-signle-product',
  templateUrl: './signle-product.component.html',
  styleUrls: ['./signle-product.component.scss']
})
export class SignleProductComponent implements OnInit {
  postItem;
  

  constructor(private http: ProudctsService,  private dataServ: ProudctsService, private single: ActivatedRoute, private _router: Router,private productData: ProudctsService) { }

  ngOnInit() {
    this.single.paramMap.subscribe(param => {
      this.getSinglePost(param.get('id'));
      console.log(param)
    });
  }
  getSinglePost(postId) {
    this.productData.getSingleData(postId).subscribe(postObj => {
      this.postItem = postObj;
      console.log(this.postItem);
    })
  }
}
