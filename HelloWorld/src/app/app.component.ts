import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SonLanggtu';
  public Form_InfoEnpolyee(value: any) {
    console.log(value);
  }
  public city = [
    {ID:1, Name:'Hà Nội'},
    {ID:2, Name:'TP. HCM'},
    {ID:3, Name:'Hải Phòng'},
    {ID:4, Name:'Đà Nẵng'},
    {ID:5, Name:'Cần Thơ'},
    {ID:6, Name: 'Hưng Yên'},
    {ID:7, Name:'Hải Dương'}
]
}
