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


}

