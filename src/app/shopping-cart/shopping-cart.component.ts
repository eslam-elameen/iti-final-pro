import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit{
 
  productFromLocal;

  constructor(private productServ: ShoppingCartService) { }

  ngOnInit() {
 
    this.productFromLocal = JSON.parse(localStorage.getItem('shoppingCart'));

  }


  //  on increases button
  onIncrease(product) {
 
      for (let item of this.productFromLocal) {
        if (product.id === item.id && item.qty < 15) {
          item.qty++;
          item.totalPrice = product.qty * product.price;
          localStorage.setItem('shoppingCart', JSON.stringify(this.productFromLocal))
        }
      }

  }

  //  on Decrease button
  onDecrease(product) {
      for (let item of this.productFromLocal) {
        if (product.id === item.id && item.qty > 1) {
          item.qty--;
          item.totalPrice = product.qty * product.price;
          localStorage.setItem('shoppingCart', JSON.stringify(this.productFromLocal))
        }
      }

  }


  // On Delete Button
  onDelete(productID) {
      for (let item of this.productFromLocal) {
        if (item.id === productID) {
          this.productFromLocal.splice(this.productFromLocal.indexOf(item), 1);
          localStorage.setItem('shoppingCart', JSON.stringify(this.productFromLocal))
        }
      }

  }

  // Total All Product Price
  totalAllProductPrice(){
    let total = 0;
      for (let item of this.productFromLocal) {
       
        total += item.totalPrice

      }
    return total;
  } 
}
