import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService implements OnInit{
  products = [];
  flag: boolean;

  constructor() { 

  }
  ngOnInit() {
  }


  addCart(product){
    this.flag = false
    for (let item of this.products) {
      if (item.id === product.id) {
        this.flag = true;
      }
    }

    if (this.flag == false) {
      product['qty'] = 0;
      this.products.push(product);
    }

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
    if(localStorage.getItem('shoppingCart') === null){
      this.products = []
    }else{
     this.products = JSON.parse(localStorage.getItem('shoppingCart'));
    }
  }



 
}
