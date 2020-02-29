import { Component, OnInit, } from '@angular/core';
import { ProudctsService } from '../proudcts.service';
import {CheckboxFilterService} from '../checkbox-filter.service'



@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  searchValue:string
  y: number = 4;
  max: number = 5;
  apiData = [];
  searchData=[];
  fiterCheck = [];
  counter = this.filterService.count

 
  checkBoxCat=[];
  checkBoxkind=[];
  checkBoxStore=[];
 
  constructor(private resultServer: ProudctsService , private filterService:CheckboxFilterService) { 
    this.resultServer.getSearch.subscribe((data) => {
      console.log(data); // And he have data here too!
      this.searchValue=data;
        console.log(this.searchValue)
        this.resultServer.getData().subscribe((res:[]) => {
        console.log(res)
        this.apiData = res;
    this.filterService.searchDataResult =  this.searchData = (this.searchValue) ?
        this.apiData.filter(item => item.productTitle.toLowerCase().includes(this.searchValue.toLowerCase()) ) :
          this.searchData ;
        console.log(this.searchData)
        for(let item of this.apiData){
          if(this.checkBoxCat.indexOf(item.category)=== -1){

            this.checkBoxCat.push(item.category)
          }
          if(this.checkBoxkind.indexOf(item.kind)== -1){
            this.checkBoxkind.push(item.kind)
          }
         
          
        } 
      } )
    });
    
  // fiterCheck = this.filterService.filterdData;
  }

  
  ngOnInit() {
    console.log(this.counter) 
      this.filterService.filterBehaviorSub.subscribe(dataa =>{ this.fiterCheck = dataa
  console.log(this.fiterCheck)
  console.log(this.fiterCheck)
} )
  }
  filterGetKind = event=>{event.target.checked? this.counter++:this.counter--;
    this.filterService.getKind(event)
  }
  filterGetCat = eve =>{eve.target.checked? this.counter++:this.counter--;
this.filterService.getCatogery(eve);
  }
  filterGetStore = even =>{even.target.checked? this.counter++:this.counter--;
    this.filterService.getStoreName(even);
  }
   sor(val){
     console.log(val.target.value)
     val.target.value==1?
     this.fiterCheck.sort(function(a, b) {
      var nameA = a.productTitle.toUpperCase(); // ignore upper and lowercase
      var nameB = b.productTitle.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    })
    :val.target.value ==2? this.fiterCheck.sort((a, b)=> {
      a =a.price
      b =b.price
      return b - a;
    }):val.target.value==0? this.fiterCheck.sort(() => Math.random() - 0.5)
:console.log(this.fiterCheck)
   }
}