import { Component, OnInit, ViewChild, Injectable  } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  public editEnabled = true;
  public picurl: string;

  constructor() {}

  clear() {
    this.picurl = '';
  }

  ngOnInit() {
  }

}