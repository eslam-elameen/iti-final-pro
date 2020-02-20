import { FormGroup } from '@angular/forms';
import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from './../api.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile:FormGroup;
  myGroup = new FormGroup({})
  public uploader: FileUploader;
  private hasDragOver = false;

  @Input()
  private editmode = false;

  @Input()
  private url = '';

  @Output()
  private urlChange = new EventEmitter();

  constructor() {
    this.uploader = new FileUploader({
      url: 'http://localhost:3000/profile',
      disableMultipart: false,
      autoUpload: true
    });

    this.uploader.response.subscribe(res => {
      // Upload returns a JSON with the image ID
      this.url = 'http://localhost:3000/get/' + JSON.parse(res).id;
      console.log(res)

      this.urlChange.emit(this.url);
    });
  }

  public fileOver(e: any): void {
    this.hasDragOver = e;
  }

  ngOnInit() {
  }

}

  


