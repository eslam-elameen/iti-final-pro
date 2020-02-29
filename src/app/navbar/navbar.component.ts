import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProudctsService } from '../proudcts.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { NgwWowService } from 'ngx-wow';
import { ShoppingCartService } from '../shopping-cart.service';
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
  searchResult;
  
  toggle
  shoppingCartProduct;
  toggle3
  total;
  totalQty;
  // serviceTotal: number = 0;
  // totalQty: number = 0;

  public constructor(
    private searchServer: ProudctsService,
    private wowService: NgwWowService,
    // private fb: FormBuilder,
    private shoppingServices: ShoppingCartService) {
    this.searchServer.getData().subscribe(res => this.searchResult = this.productsData = res)
    this.filterAutoComolete = this.mySearch.valueChanges
    .pipe(
      startWith(''),
      map(product => product ? this._filterStates(product) : this.filterd)
    );
}
ngOnInit() {
   
  this.wowService.init();
  this.totalQty = this.shoppingServices.getAllQuantityProduct()
console.log(this.totalQty)
  this.shoppingServices.sendCountNumber.subscribe(number => {
    this.total = number 
console.log(this.total)

  });

}
private _filterStates(value: string): Product[] {
  const filterValue = value.toLowerCase();
  return this.productsData.filter(product => product.kind.toLowerCase().includes(filterValue) || product.productTitle.toLowerCase().includes(filterValue) );
  }
  divToggle1(event) {
    this.toggle3 = !this.toggle3
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
      this.productsData.filter(item => item.storeName.toLowerCase().includes(form.value.toLowerCase()) || item.productTitle.toLowerCase().includes(form.value.toLowerCase()) ) :
      this.searchResult ;
    console.log(this.searchResult)
    this.searchServer.getResult(this.searchResult)
    console.log(form.value)
    this.mySearch.setValue('')
  }

}

    // this.mySearch = this.fb.group({
    //   search: ''
    // });


    // this.shoppingServices.sendCountQtyServices.subscribe(number => {
    //   this.serviceTotal = number;
    // })



