import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-carts',
  templateUrl: './shopping-carts.component.html',
  styleUrls: ['./shopping-carts.component.scss']
})
export class ShoppingCartsComponent implements OnInit {

  productFromLocal: any = [];
  subTotal: number = 0;
  services: any = [];
  shippingPrice: number;
  totalPrice: number;

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit() {

    if (JSON.parse(localStorage.getItem('shoppingCart'))) {
      this.productFromLocal = JSON.parse(localStorage.getItem('shoppingCart'));
    }

    if (JSON.parse(sessionStorage.getItem('services'))) {
      this.services = JSON.parse(sessionStorage.getItem('services'));
    }

    // Show Sub Total price To user
    this.shoppingCart.subTotalPrice()
    this.subTotal = this.shoppingCart.subTotalPrice() + this.shoppingCart.totalServicesPrice();

    // Show  Total price To user
    this.shoppingCart.totalPrice();
    this.totalPrice = this.shoppingCart.shipping + this.shoppingCart.totalServicesPrice();

    // Show Shippnig Price
    this.shippingPrice = this.shoppingCart.showShipping

    // Save Product to Local Storage
    this.shoppingCart.saveInLocalStorge()

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

        // Update Sub Total price To user
        this.shoppingCart.subTotalPrice()
        this.subTotal = this.shoppingCart.subTotalPrice() + this.shoppingCart.totalServicesPrice();

        // Update  Total price To user
        this.shoppingCart.totalPrice();
        this.totalPrice = this.shoppingCart.shipping + this.shoppingCart.totalServicesPrice();

        // Update Shippnig Price
        this.shippingPrice = this.shoppingCart.showShipping


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

        // Update Sub Total price To user
        this.shoppingCart.subTotalPrice()
        this.subTotal = this.shoppingCart.subTotalPrice() + this.shoppingCart.totalServicesPrice();

        // Update  Total price To user
        this.shoppingCart.totalPrice();
        this.totalPrice = this.shoppingCart.shipping + this.shoppingCart.totalServicesPrice();

        // Update Shippnig Price
        this.shippingPrice = this.shoppingCart.showShipping
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
        // Update Sub Total price To user
        this.shoppingCart.subTotalPrice()
        this.subTotal = this.shoppingCart.subTotalPrice() + this.shoppingCart.totalServicesPrice();

        // Update  Total price To user
        this.shoppingCart.totalPrice();
        this.totalPrice = this.shoppingCart.shipping + this.shoppingCart.totalServicesPrice();

        // Update Shippnig Price
        this.shippingPrice = this.shoppingCart.showShipping
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

        // Update Sub Total price To user
        this.shoppingCart.subTotalPrice()
        this.subTotal = this.shoppingCart.subTotalPrice() + this.shoppingCart.totalServicesPrice();

        // Update  Total price To user
        this.shoppingCart.totalPrice();
        this.totalPrice = this.shoppingCart.shipping + this.shoppingCart.totalServicesPrice();

        // Update Shippnig Price
        this.shippingPrice = this.shoppingCart.showShipping
      }
    }
  }


}
