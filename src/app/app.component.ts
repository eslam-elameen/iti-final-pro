import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iti-final-pro';
  public editEnabled = true;
public picurl: string;

constructor() {}

public clear() {
  this.picurl = '';
}
ngOnInit() {
}
}

