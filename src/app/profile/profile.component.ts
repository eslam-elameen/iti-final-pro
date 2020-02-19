import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: FormGroup;
  postPic: File;
  imageSrc;
  imagee;
  comingData;
  constructor(private http: ApiService, private profileGrorup: FormBuilder) { }
  ngOnInit() {
    this.profile = this.profileGrorup.group({
      image: ''
    })
    this.http.getProfileData().subscribe(data => {
      this.comingData = data
    })
  }
  onFileChange(event) {
    this.postPic = <File>event.target.files[0];
    console.log(event);
    this.check();
    console.log(this.postPic);

  }
  check() {
    let mimeType = this.postPic.type;
    // console.log(this.postPic.type);
    if (mimeType.match(/image\/*/) == undefined) {
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(this.postPic);
    reader.onload = _event => {
      this.imageSrc = reader.result;
      this.imagee = reader.result;
      this.profile.patchValue({
        image: this.imagee

      });
      // let elbob = this.profile.controls.image.value

      // const headers = { "Content-Type": "application/json" }
      // this.http.editData("http://localhost:3000/users/" + this.comingData.id, this.comingData[elbob], headers).subscribe(shit => {
      // })
    }
  }

}

