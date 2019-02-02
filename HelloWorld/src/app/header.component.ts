import {Component} from '@angular/core';


@Component({
    selector: 'App-Header',
    template : `
    <p [ngClass] = "{FontRed:TestFontRed,BackgroundBlue:TestbackgroundBlue }"> This is Tag P </p>
    <p [ngStyle] = "{'font-weight':800}">Ap dung ngStyle</p>
    `,
    styles : [`
        .FontRed{
            color : red;
        }
        .BackgroundBlue{
            background-color:blue;
            width:200px;
            height: 100px;
        }

    `]
    // templateUrl: './header.component.html',
    // styleUrls: ['./header.component.css'],
})

export class AppHeader{
    ClassEPU = "D11QTANM";
    TestFontRed = false;
    TestbackgroundBlue = true;
    TestNGStyle = true;
   
}