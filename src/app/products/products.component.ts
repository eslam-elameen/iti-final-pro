import { Component, OnInit } from '@angular/core';
import { ProudctsService } from '../proudcts.service'
import { ActivatedRoute } from "@angular/router";
import { ItemsKindService } from '../items-kind.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsData;
  dogData = [];
  flag

  constructor(
    private dogServe: ProudctsService,
    private route: ActivatedRoute,
    private item: ItemsKindService,
    private shoppingCart: ShoppingCartService
  ) {
    this.dogServe.getData().subscribe(data => {
      this.productsData = data;
      // this.dogData = this.productsData.filter(item => 
      //   item.category =="dog")
      //   console.log(this.dogData)  ;
      console.log(this.productsData);
      this.route.params.subscribe(params => {
        this.dogData = this.productsData.filter(item => item.category.includes(params.category));
        this.item.mydata(this.dogData)

        console.log(this.dogData)
      })



    })
  }


  ngOnInit() {
    this.shoppingCart.saveInLocalStorge();
    //   console.log(this.data);
    //  for(item of this.productsData)  
    console.log(this.dogData);
  }
  getDogsData() {


  }

  // Add Product to Shopping Cart
  onAddCart(product) {
    this.shoppingCart.addCart(product)
  }

}
