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
  getData(){
    return this.http.get('http://localhost:3000/users');
    // return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}

