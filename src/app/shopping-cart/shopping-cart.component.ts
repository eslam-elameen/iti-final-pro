import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  productFromLocal: any = [];
  total: number = 0;
  services: any = [];

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit() {

    if (JSON.parse(localStorage.getItem('shoppingCart'))) {
      this.productFromLocal = JSON.parse(localStorage.getItem('shoppingCart'));
    }

    if (JSON.parse(sessionStorage.getItem('services'))) {
      this.services = JSON.parse(sessionStorage.getItem('services'));
    }

    this.total = this.shoppingCart.totalPrice() + this.shoppingCart.totalServicesPrice()

  }

  //  on increases button
  onIncrease(product) {
    for (let item of this.productFromLocal) {
      if (product.id === item.id && item.qty < 15) {
        item.qty++;
        item.totalPrice = product.qty * product.price;
        localStorage.setItem('shoppingCart', JSON.stringify(this.productFromLocal));

        // update quantity in navbar
        this.shoppingCart.getAllQuantityProduct();

        // update total price in shopping cart
        this.shoppingCart.totalPrice();
        this.total = this.shoppingCart.totalPrice() + this.shoppingCart.totalServicesPrice()

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

        // update quantity in navbar
        this.shoppingCart.getAllQuantityProduct();

        // update total price in shopping cart
        this.shoppingCart.totalPrice();
        this.total = this.shoppingCart.totalPrice() + this.shoppingCart.totalServicesPrice()

      }
    }
  }


  // On Delete Button
  onDelete(productID) {
    for (let item of this.productFromLocal) {
      if (item.id === productID) {
        this.productFromLocal.splice(this.productFromLocal.indexOf(item), 1);
        localStorage.setItem('shoppingCart', JSON.stringify(this.productFromLocal))

        // update quantity in navbar
        this.shoppingCart.getAllQuantityProduct();

        // update total price in shopping cart
        this.shoppingCart.totalPrice();
        this.total = this.shoppingCart.totalPrice() + this.shoppingCart.totalServicesPrice()
      }
    }

    for (let item of this.shoppingCart.products) {
      if (item.id === productID) {
        this.shoppingCart.products.splice(this.shoppingCart.products.indexOf(item), 1);
        console.log(this.shoppingCart.products);

      }
    }



  }

  onDeleteServices(service) {
    for (let item of this.services) {
      if (item === service) {
        this.services.splice(this.services.indexOf(item), 1);
        sessionStorage.setItem('services', JSON.stringify(this.services))

        this.shoppingCart.totalPrice();
        this.total = this.shoppingCart.totalPrice() + this.shoppingCart.totalServicesPrice()
      }
    }
  }


}
