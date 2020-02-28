import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private checkdata =new BehaviorSubject({})
  checkdatafinal = this.checkdata.asObservable()

  constructor(private http: HttpClient) { }
  configUrl = './assets/db.json';


  editData(url, body, headers){
    return this.http.post<any>(url.id, body, headers);
  }
  postData(url, body, headers) {
    return this.http.post<any>(url, body, headers);
  };
  getUserData() {
    return this.http.get('http://localhost:3000/users');
  }

  getSingleUser(id){
    return this.http.get('http://localhost:3000/users/'+id);
  }
  getProfileData() {
    return this.http.get('http://localhost:3000/profile');
  }
  updateUser(id, body) {
    return this.http.put("http://localhost:3000/users/" + id, body);
  }

  // getConfig() {
  //   return this.http.get(this.configUrl);
  // }
  
  getConfig() {
    return this.http.get(this.configUrl);
  }
    sendgetdata(data){
      this.checkdata.next(data)
    }
   
}

