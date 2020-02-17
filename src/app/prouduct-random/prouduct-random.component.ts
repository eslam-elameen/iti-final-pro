import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from './../blog-service.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-prouduct-random',
  templateUrl: './prouduct-random.component.html',
  styleUrls: ['./prouduct-random.component.scss']
})
export class ProuductRandomComponent implements OnInit {
 ranarr=[]
 sets;
  constructor(private http: BlogServiceService, private dataServ: BlogServiceService, private _router: Router) { }
  cards;
  random;
  ngOnInit() {
    this.http.getData().subscribe(res => {
      this.cards = res;

      for(let item of this.cards ){

        this.random = this.cards[Math.floor(Math.random() * this.cards.length)];
          
          if(this.ranarr.length <5 )
          {this.ranarr.push(this.random)
          }
          
          else{
            console.log('a7a')
          }

        
       
          this.sets=[...new Set(this.ranarr)] 

        console.log(this.random);
      }
      
      
      console.log();
  });

  }
  openSlideShow(file: FileModel){
    for(var f of this.files) {
        f.activeSlide = false;
    }
    file.activeSlide = true;
}
 
    
     
  
}
