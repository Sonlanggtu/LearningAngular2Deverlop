import {Component} from '@angular/core';

// Property binding : la luong data tu model => view
// Even binding : la luong data tu view => model

@Component({
    selector: 'App-Header',
    template : `
    <h4><button (click)="FunCRandom()">Tạo số ngẫu nhiên</button></h4>
    <h4><button (click)="GetdataInput(Getdata.value)">GetDataInput</button></h4>  
    <input type='text' #Getdata />
    `,
    styles : [`.truefalse{
        color : red;
        
    }`]
    // templateUrl: './header.component.html',
    // styleUrls: ['./header.component.css'],
})

// internal binding
export class AppHeader{
    ClassEPU = "D11QTANM";
    //property value
    public images = 'assets/images/ClassD11QTANM.jpg';
    public testColor1 = true;
    public testColor2 = false;
    public FunCRandom(){
        let random = Math.random();
        console.log(random);
    }
    public GetdataInput(values){
        console.log(values);
    }
    
        
}