import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class CheckboxFilterService {

  private filterBehavior =  new BehaviorSubject([]);
  filterBehaviorSub =this.filterBehavior.asObservable()

  searchDataResult =[];
  storeName =[];
  kind = [];
  catogery = [];
  count = 0;

  allArr = [this.storeName, this.kind, this.catogery];
  updateData = [];
  filterdData = [];
  sendResult = data =>this.filterBehavior.next(data);
  
  runs = () => {
    for (let item of this.allArr) {
    item.length > 0? this.updateData.push(item):console.log(item)}
    for (let it of this.updateData) {
      it.length === 0? this.updateData.splice(this.updateData.indexOf(it), 1)
      :console.log(this.updateData);}
    this.count > 0?this.filterdData = this.updateData.reduce((a, c) => a.filter(i => c.includes(i)))
      :console.log(this.filterdData);
      this.sendResult(this.filterdData)
    }

  
  constructor() {
   }

  ////// start///// add fiterd data to storeName array ////// 
  getStoreName = even => {
    console.log(even.target.checked, even.target.name)
    for (let i in this.searchDataResult) {
      if (this.searchDataResult[i].storeName.toLowerCase() === even.target.name.toLowerCase() && even.target.checked === true) {
        this.storeName.push(this.searchDataResult[i])
        this.count++
      } else if (even.target.checked === false) {
        let j:any;
        for ( j in this.storeName) {
          console.log(typeof(j))
          if (this.storeName[j].storeName.toLowerCase() === even.target.name.toLowerCase()) {
            this.storeName.splice(j, 1)
            this.count--
          }
        }
      }
    }
    this.runs()
    console.log(this.searchDataResult)
    console.log(this.storeName)
    console.log(this.allArr)
  }
///////////end/////////////////////
/////////// start///// add filterd data to kind array ////// 
  getKind(eventKind) {
    for (let i = 0; i < this.searchDataResult.length; i++) {
      if (this.searchDataResult[i].kind === eventKind.target.name && eventKind.target.checked === true) {
        this.kind.push(this.searchDataResult[i])
        this.count++
      } else if (eventKind.target.checked === false) {
        for (let i = 0; i < this.kind.length; i++) {
          if (this.kind[i].kind === eventKind.target.name) {
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
  getCatogery(eve) {
    console.log(eve.target.checked,eve.target.name)
    for (let i = 0; i < this.searchDataResult.length; i++) {
      if (this.searchDataResult[i].category.toLowerCase() === eve.target.name.toLowerCase() && eve.target.checked === true) {
        this.catogery.push(this.searchDataResult[i])
        this.count++
      } else if (eve.target.checked === false) {
        for (let i = 0; i < this.catogery.length; i++) {
          if (this.catogery[i].category.toLowerCase() === eve.target.name.toLowerCase()) {
            this.catogery.splice(i, 1)
            this.count--
          }
        }
      }
    }
    this.runs()
    console.log(this.catogery)
    console.log(this.filterdData)
  }

}