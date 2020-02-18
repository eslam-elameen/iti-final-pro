import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  flag;
  products = [];

  constructor(private http: HttpClient) { }

  // Getting All Product From Json File
  getData(){
    return this.http.get("http://localhost:3000/products");
  }

  // Getting Product from Shopping Cart in Json file
  getShoping(){
    return this.http.get("http://localhost:3000/shoppingCart");
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
