import { ApiService } from './../api.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  
  // formMethod = document.getElementById("x").setAttribute("disabled", "false");

  myForm: FormGroup;
price=800
  userData ;
  products
  constructor(private payment:  ApiService,private fb: FormBuilder) {
    // this.payment.getConfig().subscribe(data=>{
    //   this.products =data
    //   })
   }

  ngOnInit() {
        this.payment.checkdatafinal.subscribe(
      data => {
        console.log(data)
        this.userData = data;
        console.log(this.userData);

      })
      this.myForm = this.fb.group({
        CardNumber: ['', [Validators.required, Validators.pattern('[0-9]{14}')]],
        CardHolders: ['', [Validators.required, Validators.pattern('[a-z]{5,15}')]],
        year: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
        month: ['', [Validators.required, Validators.pattern('[0-9]{1,2}')]],
        day: ['', [Validators.required, Validators.pattern('[0-9]{1,2}')]]
  })
  this.myForm.disable()
}

onSubmit(form){
console.log(form.value)
}

undisable(hoda){
  if(hoda=='credit'){
  this.myForm.enable()
  console.log(hoda)
  }else{
  this.myForm.disable()
  }
}

}
