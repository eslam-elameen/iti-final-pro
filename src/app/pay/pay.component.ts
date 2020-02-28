import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {

  userData ;
  products
  constructor(private payment:  ApiService) {
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
     
  }

 

}
