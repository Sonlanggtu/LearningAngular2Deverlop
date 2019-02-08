import {Component, Output, EventEmitter} from '@angular/core';
// Input
// Khi chay 

@Component({
    selector: 'App-Header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})

export class AppHeader{
    ClassEPU = "D11QTANM";

    @Output() onvote = new EventEmitter<boolean>();
    
}