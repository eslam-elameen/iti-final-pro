import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService implements OnInit{
  products: any = [];
  flag: boolean;

  constructor() { 

  }
  ngOnInit() {
  }

  // Add product to shopping cart
  addCart(product){
    this.flag = false
    for (let item of this.products) {
      if (item.id === product.id) {
        this.flag = true;
      }
    }

    // push one product to shopping cart
    if (this.flag == false) {
      product['qty'] = 0;
      this.products.push(product);
    }

    // increase quantity of product and save hem in local Storage
    for(let item of this.products){
      if(item.id === product.id){
        item.qty++
        product['totalPrice'] = product.qty * product.price;
        localStorage.setItem('shoppingCart', JSON.stringify(this.products));
      }
    }
    
     
  }

  // Save In LocalStorage
  saveInLocalStorge(){
    // check if shopping cart is empty or not 
    if(localStorage.getItem('shoppingCart') === null){
      this.products = []
    }else{
     this.products =JSON.parse( localStorage.getItem('shoppingCart'));
     console.log( this.products);
    }
  }



 
}
