import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  myForm: FormGroup;
  checkoutData;
  productFromLocal: any;
  checkoutDataUser = {}
  constructor(private fb: FormBuilder,
    private checkout: ApiService,
    private router: Router,
    private shoppingCart: ShoppingCartService
  ) { }

  ngOnInit() {
    // console.log(this.productFromLocal);


    this.myForm = this.fb.group({
      fName: ['', [Validators.required, Validators.pattern('[a-z]{2,12}')]],
      lName: ['', [Validators.required, Validators.pattern('[a-z]{2,12}')]],
      city: ['', [Validators.required, Validators.pattern('[a-z]{2,12}')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+@(hotmail|yahoo|gmail|)\.com$')]],
      // [Validators.required,Validators.pattern('[a-zA-Z0-9@a-z.com]')]
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      address: ['', Validators.required],
      postalCode: ["", [Validators.required, Validators.pattern('[0-9]{6}')]]
    });


    this.productFromLocal = JSON.parse(localStorage.getItem('shoppingCart'));

    // console.log(this.shoppingCart);

  }
 
  onSubmit(form) {
    console.log(form.value)
    this.checkoutData = form.value
    this.checkout.sendgetdata(form.value)
    this.router.navigate(['pay'])
    console.log(form.value)
  }
  totalAllProductPrice() {
    let total = 0;
    for (let item of this.productFromLocal) {
      total += item.totalPrice;
    }
    return total;
  }
  
}
