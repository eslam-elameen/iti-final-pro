import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private http: ApiService) { }
  arr=[];
  getFile:File = null
  onFileChange(event) {
   this.getFile = <File>event.target.value;
    
    console.log(event);

  }
  onUpLoad() {
    const headers = { "Content-Type": "application/json" }
// let postingData = new FormData();
// postingData.append('image',this.getFile,this.getFile);
    this.http.postData('http://localhost:3000/profile',this.getFile,headers).subscribe(comingData=>{
      console.log(this.getFile);
      
    })
  } 
  ngOnInit() {
  }

}
