import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProudctsService } from '../proudcts.service';
import { NgwWowService } from 'ngx-wow';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
export interface Product {
  category: string;
  kind: string;
  storeName: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mySearch = new FormControl('', Validators.required);
  filterAutoComolete: Observable<Product[]>;
  productsData;
  filterd;
  searchResult;
  toggle;
  // toggle2 = false;
  toggle3 = false;
  public constructor(private wowService: NgwWowService,private fb: FormBuilder, private searchServer: ProudctsService) {
    this.searchServer.getData().subscribe(res => this.searchResult = this.productsData = res)
    this.filterAutoComolete = this.mySearch.valueChanges
    .pipe(
      startWith(''),
      map(product => product ? this._filterStates(product) : this.filterd)
    );
}
private _filterStates(value: string): Product[] {
  const filterValue = value.toLowerCase();
  return this.productsData.filter(product => product.storeName.includes(filterValue)  );
  }
  divToggle1(event) {
    this.toggle3 = !this.toggle3;
  }


  onSubmit(form) {
    this.searchResult = (form.value) ?
      this.productsData.filter(item => item.productTitle.includes(form.value) ) :
      this.searchResult ;
    console.log(this.searchResult)
    this.searchServer.getResult(this.searchResult)
    console.log(form.value)
    this.mySearch.setValue('')
  }
  ngOnInit() {
    this.wowService.init();

 
   
  }
}