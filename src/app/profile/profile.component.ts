import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile:FormGroup;
  myGroup = new FormGroup({})
   
  // getFile: File;
  
  // imageSrc;
  // imagee;
  // constructor(private http: ApiService) { }
  ngOnInit() {}
  //   onFileChange(event) {
  //     this.getFile = <File>event.target.files[0];
  //     console.log(event);
  //     this.check();
  //     console.log(this.getFile);
  //   }
  
  //   check() {
  //     let mimeType = this.getFile.type;
  //     console.log(this.getFile.type);
  
  //     if (mimeType.match(/image\/*/) == null) {
  //       return;
  //     }
  //     let reader = new FileReader();
  //     reader.readAsDataURL(this.getFile);
  //     reader.onload = _event => {
  //       this.imageSrc = reader.result;
  //       this.imagee = reader.result;
  //       this.registrationForm.patchValue({
  //         image: this.imagee
  //       });
  //     }
  //   }
  
}

