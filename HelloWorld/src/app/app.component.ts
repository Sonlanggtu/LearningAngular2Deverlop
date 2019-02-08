import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SonLanggtu';
    public Form_InfoEnpolyee(value : any){
      console.log(value);
    }


  }
