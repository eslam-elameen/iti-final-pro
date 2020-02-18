import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  product;
  constructor(private productServ: ShoppingCartService) { }

  ngOnInit() {

  }


  countProductFromLocal(){
    let productLocal = JSON.parse(localStorage.getItem('shoppingCart'));

    let total = 0;
    if(productLocal){

    for(let item of productLocal){
      total += item.qty;
    }
  }
    return total;
  }

}
