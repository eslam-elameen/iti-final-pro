import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  fileData: File = null;
  userImg;
  user;
  
  userEmail;
  userName
  url="assets/profile-placeholder.png"
  constructor(private api: ApiService) { 

    this.user = this.api.getSingleUser(1).subscribe(data => {
      this.user = data
    console.log(this.user);
    this.userImg = this.user.image;


    });
    this.user = this.api.getSingleUser(1).subscribe(data => {
      this.user = data
    console.log(this.user);
    this.userName = this.user.name;


    });
    this.user = this.api.getSingleUser(2).subscribe(data => {
      this.user = data
    console.log(this.user);
    this.userEmail = this.user.email;


    });
  }

  ngOnInit() {
  }
  readUrl(e) {
    this.fileData = <File>e.target.files[0];
    this.previw()
  }
  previw() {
    let mimetype = this.fileData.type;
    if (mimetype.match(/image\/*/) == null)
      return;
    let reader = new FileReader()
    reader.readAsDataURL(this.fileData)
    reader.onload = () => {
      this.userImg = reader.result
      console.log(this.userImg);
      let userObj = {
        "image": this.userImg
      }


      this.api.updateUser(2, userObj).subscribe(data => {
        console.log(data);

      })


    }
  }

}
