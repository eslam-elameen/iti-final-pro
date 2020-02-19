import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  editData(url, body, headers){
    return this.http.post<any>(url.id, body, headers);
  }
  postData(url, body, headers) {
    return this.http.post<any>(url, body, headers);
  };
  getUserData(){
    return this.http.get('http://localhost:3000/users');
  }
  getProfileData(){
    return this.http.get('http://localhost:3000/profile');
  }

}

