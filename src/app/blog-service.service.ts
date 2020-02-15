import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  posts;
  count = 0;
  num: Number;
  myArr = [];
  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();
  constructor(private http: HttpClient) { 
    
   }
   getData() {
    return this.http.get("  http://localhost:3000/posts")
  }
  getSingleData(id) {
    return this.http.get(`  http://localhost:3000/posts/${id}`)
  }
  cardDetail(id) {
    return this.http.get(`  http://localhost:3000/posts`)
  }

  getCount() {
    this.count++;
  }
  changeMessage(count: number) {
    this.messageSource.next(count)
  }
}
