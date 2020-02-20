import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.scss']
})
export class Profile1Component implements OnInit {
  fileData: File = null;
  userImg;
  user;
  id
  constructor(private api: ApiService) {
    this.user = this.api.getSingleUser(1).subscribe(data => {
      this.user = data
    console.log(this.user);
    this.userImg = this.user.image;


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




      this.api.updateUser(3, userObj).subscribe(data => {
        console.log(data);

      })


    }
  }

}
