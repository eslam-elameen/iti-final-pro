import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postData(url, body, headers) {
    return this.http.post<any>(url, body, headers);
  };
  // getUserData(id,body) {
  //   return this.http.get('http://localhost:3000/users'+id,body);
  // }

  getSingleUser(id){
    return this.http.get('http://localhost:3000/users/'+id);
  }
  // getProfileData() {
  //   return this.http.get('http://localhost:3000/profile');
  // }
  updateUser(id, body) {
    return this.http.put("http://localhost:3000/users/" + id, body);
  }


}

