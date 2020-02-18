import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {


  private behaviorSubject = new BehaviorSubject([]);
  countItem = this.behaviorSubject.asObservable();

  constructor(private http: HttpClient) {}


}
