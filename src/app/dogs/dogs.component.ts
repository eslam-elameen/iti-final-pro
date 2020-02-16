import { Component, OnInit } from '@angular/core';
import {ProudctsService} from '../proudcts.service'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  productsData;
  dogData;

  constructor(private dogServe:ProudctsService,private route: ActivatedRoute) {
  
    this.dogServe.getData().subscribe(data =>{
      this.productsData = data;
      console.log(this.productsData);
      this.route.params.subscribe( params => { this.dogData = this.productsData.filter(item => item.category== params.category);
        console.log( this.dogData )
    })
     
      
    
    } )
   }
  

  ngOnInit() {
 
      // this.dogData = this.productsData.filter(item => 
      //   item.category = "dog")
      //   console.log(this.data);
      //  for(item of this.productsData)  
      console.log( this.dogData ); 
  }
  getDogsData(){
 
   
  } 
  

  

}
