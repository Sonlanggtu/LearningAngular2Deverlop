import {Component} from '@angular/core';

// Property binding : la luong data tu model => view
// Even binding : la luong data tu view => model
// Two way binding là thực hiện 2 thao tác (Property & even binding) khi model phản ánh vào view và ngược lại
@Component({
    selector: 'App-Header',
    template : `
    <label for="FirstName">Firstname</label>
    <input type='text' [(ngModel)] = "FirstName" name="FirstName" />
    <label for="LastName">LastName</label>
    <input type='text' [(ngModel)] = "LastName" name="LastName" />
    <br>
    <h5>Full Name: {{FirstName}} {{LastName}}</h5>
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