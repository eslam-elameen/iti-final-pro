import { Component,OnInit } from '@angular/core';
import { BlogServiceService } from './blog-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // title = 'iti-final-pro';
  posts;

  constructor(private http: BlogServiceService, private dataServ: BlogServiceService) { }
  title = 'myNewApp';
  count = 0;
  Cart = [];
  res;
  message: number;
  cards;
  ngOnInit() {
    this.http.getData().subscribe(res => {
      this.posts = res;
      // console.log(res);
      this.dataServ.currentMessage.subscribe(message => this.message = message);
    });
}
newMessage() {
  this.message = this.Cart.length + 1;
  this.dataServ.changeMessage(this.message)
  this.Cart.push(this.message)
  console.log(this.Cart);
}
getCount() {
  return this.count++;
}
}