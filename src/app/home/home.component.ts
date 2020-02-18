import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allProduct;
 

  constructor(private productServices: ShoppingCartService) {
  
  }

  ngOnInit() {
    this.productServices.getData().subscribe(data => {
      this.allProduct = data
    });
    this.productServices.saveInLocalStorge();
  }

 

  addToCart(product) {
    this.productServices.addCart(product);
  }


}

