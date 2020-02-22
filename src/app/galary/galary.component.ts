import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.scss']
})
export class GalaryComponent implements OnInit {

  constructor(private wowService: NgwWowService) { }

  ngOnInit() {
    this.wowService.init();
  }

}
