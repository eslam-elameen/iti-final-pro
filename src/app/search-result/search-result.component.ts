import { Component, OnInit } from '@angular/core';
import { ProudctsService } from '../proudcts.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  searchData;
  filterdData = [];
  constructor(private resultServer: ProudctsService) { }

  ngOnInit() {
    this.resultServer.getSearch.subscribe((data) => {
      this.searchData = data; // And he have data here too!
      console.log(data)
      // console.log(this.dog)
    });
  }
  onClick(tex, s) {
    console.log(tex, s)
   if (this.filterdData.length === 0 ){
    for (let i = 0; i < this.searchData.length; i++) {
      if (this.searchData[i].storeName === s && tex === true) {
        this.filterdData.push(this.searchData[i])

      } else if (tex === false) {
        for (let i = 0; i < this.filterdData.length; i++) {
          if (this.filterdData[i].storeName === s) {
            this.filterdData.splice(this.filterdData.indexOf(this.filterdData[i]), 1)

          }
        }
      }
    }

   }else{
    for (let i = 0; i < this.filterdData.length; i++) {
      if (this.searchData[i].storeName === s && tex === true) {
        this.filterdData.push(this.searchData[i])

      } else if (tex === false) {
        for (let i = 0; i < this.filterdData.length; i++) {
          if (this.filterdData[i].storeName === s) {
            this.filterdData.splice(this.filterdData.indexOf(this.filterdData[i]), 1)

          
          }
        }
      }
    }

   }
 
   

    //  this.filterdData=tex? this.searchData.filter( item => {
    //   item.storeName === s
    //  }):

    console.log(this.filterdData)
  }
  ongrom(che,b){
    for (let i = 0; i < this.searchData.length; i++) {
      if (this.searchData[i].kind === b && che === true) {
        this.filterdData.push(this.searchData[i])

      } else if (che === false) {
        for (let i = 0; i < this.filterdData.length; i++) {
          if (this.filterdData[i].kind === b) {
            this.filterdData.splice(this.filterdData.indexOf(this.filterdData[i]), 1)

          }
        }
      }
      
  }
  }
}
