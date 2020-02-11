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
}
// const localUrl = 'assets/data/data.json';

