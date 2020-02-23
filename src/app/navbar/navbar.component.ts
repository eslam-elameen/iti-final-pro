import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProudctsService } from '../proudcts.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  mySearch: FormGroup
  productsData;
  filterd;
  searchResult;
  toggle
  shoppingCartProduct;

  public constructor(
    private searchServer: ProudctsService, private wowService: NgwWowService, private fb: FormBuilder
  ) {
    this.searchServer.getData().subscribe(res => this.searchResult = this.productsData = res)

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



  onSubmit(formGroup) {
    this.searchResult = (formGroup) ?
      this.productsData.filter(item => item.productTitle.toLowerCase().includes(formGroup.toLowerCase())) :
      this.productsData;
    console.log(this.searchResult)

    this.searchServer.getResult(this.searchResult)

  }

  ngOnInit() {
    this.wowService.init();

    this.mySearch = this.fb.group({
      search: ''
    });
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

