import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
 
  constructor(private http: HttpClient) { 
    
   }
   getData() {

    let getUrl = ''
    return this.http.get(getUrl);
  }
 

 
}
