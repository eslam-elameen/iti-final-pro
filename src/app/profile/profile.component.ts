import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  fileData: File = null;
  userImg;
  user;

  userEmail;
  userName
  url = "assets/profile-placeholder.png"
  constructor(private api: ApiService) {

    this.user = this.api.getSingleUser(3).subscribe(data => {
      this.user = data
      console.log(this.user);
      this.userEmail = this.user.email;
      this.userName = this.user.name;
      this.userImg = this.user.img;
    });
    console.log(this.user);
    
    console.log(this.user.image);


  }

  ngOnInit() {
    this.user = this.api.getSingleUser(3).subscribe(data => {
      this.user = data
      console.log(this.user);
      this.userImg = this.user.image;
      this.userName = this.user.name;
    });
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
      this.user.image = reader.result;

      this.api.updateUser(3, this.user).subscribe(data => {
        console.log(data);

      })


    }
  }

}
