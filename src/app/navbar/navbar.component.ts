import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProudctsService } from '../proudcts.service';
import { NgwWowService } from 'ngx-wow';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
export interface Product {
  category: string;
  kind: string;
  storeName: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mySearch = new FormControl('', Validators.required);
  filterAutoComolete: Observable<Product[]>;
  productsData;
  filterd;
  shoppingCartProduct;
  searchResult;
  toggle
  public constructor( private searchServer: ProudctsService,private wowService: NgwWowService) {
    this.searchServer.getData().subscribe(res => this.searchResult = this.productsData = res)
    this.filterAutoComolete = this.mySearch.valueChanges
    .pipe(
      startWith(''),
      map(product => product ? this._filterStates(product) : this.filterd)
    );

}
private _filterStates(value: string): Product[] {
  const filterValue = value.toLowerCase();
  return this.productsData.filter(product => product.kind.toLowerCase().includes(filterValue) || product.productTitle.toLowerCase().includes(filterValue) );
  }
  droptoggle(event) {
    this.toggle = document.getElementById('navbarSupportedContent');
    if (this.toggle.style.display === "none") {
      this.toggle.style.display = "block";
    }
    else {
      this.toggle.style.display = "none";
    }
  }
  onSubmit(form) {
    this.searchResult = (form.value) ?
      this.productsData.filter(item => item.productTitle.toLowerCase().includes(form.value) ) :
      this.searchResult ;
    console.log(this.searchResult)
    this.searchServer.getResult(this.searchResult)
    console.log(form.value)
    this.mySearch.setValue('')
    console.log(this.productsData)
  }
  ngOnInit() {
    this.wowService.init();


  }

  // Count all Product quantity in navbar Shopping cart
  getAllQuantityProduct() {
    // get product from localStorage 
    let shoppingCartProduct = JSON.parse(localStorage.getItem('shoppingCart'))
    let total = 0;
    // check if shopping cart in local storage or not 
    if (shoppingCartProduct) {
      for (let item of shoppingCartProduct) {
        total += item.qty;
      }
    }
    return total;
  }
}