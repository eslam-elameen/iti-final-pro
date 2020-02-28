import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  myForm: FormGroup;
  checkoutData;
  checkoutDataUser = {}
  constructor(private fb: FormBuilder,
    private checkout: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      fName: ['', [Validators.required,Validators.pattern('[a-z]{2,12}')]],
      lName: ['', [Validators.required,Validators.pattern('[a-z]{2,12}')]],
      city: ['', [Validators.required,Validators.pattern('[a-z]{2,12}')]],
      email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9]+@(hotmail|yahoo|gmail|)\.com$')]],
      // [Validators.required,Validators.pattern('[a-zA-Z0-9@a-z.com]')]
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      address: ['', Validators.required],
       postalCode:["",[Validators.required,Validators.pattern('[0-9]{6}')]]
    });
  }
  onSubmit(form){
    console.log(form.value) 
    this.checkoutData=form.value
    this.checkout.sendgetdata(form.value)
    this.router.navigate(['pay'])
    console.log(form.value)
  }

}
