import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ProudctsService {

  constructor(private http:HttpClient) { }
  getData() {
    return this.http.get("http://localhost:3000/products" )
  }
}
