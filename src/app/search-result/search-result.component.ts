import { Component, OnInit, } from '@angular/core';
import { ProudctsService } from '../proudcts.service';



@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  searchData;
  count = 0;
  storeName = [];
  kind = [];
  catogery = [];
  allArr = [this.storeName, this.kind, this.catogery];
  updateData = [];
  filterdData = [];
  
  runs() {
    for (let item of this.allArr) {
      if (item.length > 0) {
        this.updateData.push(item)
        console.log(item)
      }
    }
    for (let it of this.updateData) {
      if (it.length === 0) {
        this.updateData.splice(this.updateData.indexOf(it), 1)
      }
    }
    if (this.count > 0) {
      this.filterdData = this.updateData.reduce((a, c) => a.filter(i => c.includes(i)))
      console.log(this.filterdData)
    }
  }
  constructor(private resultServer: ProudctsService) { }
  ngOnInit() {
    this.resultServer.getSearch.subscribe((data) => {
      this.searchData = data; // And he have data here too!
      console.log(data)
      // console.log(this.dog)
    });
  }
  ////// start///// add fiterd data to storeName array ////// 
  getStoreName(checked, value) {
    console.log(checked, value)
    for (let i = 0; i < this.searchData.length; i++) {
      if (this.searchData[i].storeName.toLowerCase() === value.toLowerCase() && checked === true) {
        this.storeName.push(this.searchData[i])
        this.count++
      } else if (checked === false) {
        for (let i = 0; i < this.storeName.length; i++) {
          if (this.storeName[i].storeName.toLowerCase() === value.toLowerCase()) {
            this.storeName.splice(i, 1)
            this.count--
          }
        }
      }
    }
    this.runs()
    console.log(this.searchData)
    console.log(this.storeName)
    console.log(this.allArr)
  }
///////////end/////////////////////

/////////// start///// add fiterd data to kind array ////// 

  getKind(chec, val) {
    for (let i = 0; i < this.searchData.length; i++) {
      if (this.searchData[i].kind.toLowerCase() === val.toLowerCase() && chec === true) {
        this.kind.push(this.searchData[i])
        this.count++
      } else if (chec === false) {
        for (let i = 0; i < this.kind.length; i++) {
          if (this.kind[i].kind.toLowerCase() === val.toLowerCase()) {
            this.kind.splice(i, 1)
            this.count--
          }
        }
      }
    }
    this.runs()
    console.log(this.kind)
    console.log(this.allArr)
  }
  ////////////////////////end//////////////////////////////

  ////// start///// add fiterd data to catogery array ////// 

  getCatogery(checked, value) {
    console.log(checked, value)
    for (let i = 0; i < this.searchData.length; i++) {
      if (this.searchData[i].category.toLowerCase() === value.toLowerCase() && checked === true) {
        this.catogery.push(this.searchData[i])
        this.count++
      } else if (checked === false) {
        for (let i = 0; i < this.catogery.length; i++) {
          if (this.catogery[i].category.toLowerCase() === value.toLowerCase()) {
            this.catogery.splice(i, 1)
            this.count--
          }
        }
      }
    }
    this.runs()
    console.log(this.catogery)
    console.log(this.allArr)
  }


}
