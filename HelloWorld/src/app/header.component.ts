import {Component} from '@angular/core';

// TH1 : Ap dung style cho class
// TH2: Hay ap dung khi kiem true gia tri true false tu do doi mau

@Component({
    selector: 'App-Header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})

// internal binding
export class AppHeader{
    ClassEPU = "D11QTANM";
    //property value
    public images = 'assets/images/ClassD11QTANM.jpg';
    
}