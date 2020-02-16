import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemsKindService} from '../../items-kind.service'

@Component({
  selector: 'app-pro-type',
  templateUrl: './pro-type.component.html',
  styleUrls: ['./pro-type.component.scss']
})
export class ProTypeComponent implements OnInit {

  kindData
mykind
  constructor(private ss:ItemsKindService, private rout: ActivatedRoute) {
    this.ss.getKind.subscribe(data =>{ this.kindData=data;
      this.rout.params.subscribe( params => { this.mykind = this.kindData.filter(item => item.kind.includes( params.kind))
         console.log(this.mykind)
        console.log(params.kind)
        console.log(this.kindData)
    })
  })
   }

  ngOnInit() {
   

}
}