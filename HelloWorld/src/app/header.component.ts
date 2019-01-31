import {Component} from '@angular/core';

// TH1 : Ap dung style cho class
// TH2: Hay ap dung khi kiem true gia tri true false tu do doi mau

@Component({
    selector: 'App-Header',
    template : `Neu dung doan Apply se mau xanh , sai se mau do
    <h4 [class.truefalse] = 'testColor1'> Applyyyyyyy </h4>
    <h4 [style.color] = "testColor2 ? 'green' : 'blue'"> Apply </h4>
    <h4 [style.color] = "false ? 'green' : 'red'"> Apply </h4>
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
}