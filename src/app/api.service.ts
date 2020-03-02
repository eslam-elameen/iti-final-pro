import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private controlForm = new BehaviorSubject({});
  comingForm = this.controlForm.asObservable();
  private checkdata =new BehaviorSubject({});
  checkdatafinal = this.checkdata.asObservable();
  constructor(private http: HttpClient) { }
  configUrl = './assets/db.json';

local;
  editData(url, body, headers){
    return this.http.post<any>(url.id, body, headers);
  }
  //put data from registr to json 
  postData( obj) {
    return this.http.post<any>("http://localhost:3000/users",obj);
  };
  //get all user data from json 
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
//put added to cart selection to json
  postDataFromJson(obj) {
    return this.http.post<any>("http://localhost:3000/shoppingCart", obj);
  };
  
  getConfig() {
    return this.http.get(this.configUrl);
  }
    sendgetdata(data){
      this.checkdata.next(data)
    }

    loginControler(param){
      this.controlForm.next(param)
    }
}
