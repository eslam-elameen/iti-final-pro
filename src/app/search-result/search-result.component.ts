import { Component, OnInit } from '@angular/core';
import { ProudctsService } from '../proudcts.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  searchData;
  constructor(private resultServer:ProudctsService) { }

  ngOnInit() {
    this.resultServer.getSearch.subscribe((data) => {
      this.searchData = data; // And he have data here too!
      console.log(data)
      // console.log(this.dog)
    });
  }

}
