import {Component} from '@angular/core';


@Component({
    selector: 'App-Header',
    template : `
    <p *ngIf = 'TestIf'>Đây là thẻ test ngIf</p>

    <div [ngSwitch] = "TestCars">
            <b>Category Cars</b>
    <p *ngSwitchCase = "'S500'">Mecedes S500</p>
    <p *ngSwitchCase = "'Camry'">Camry 2.0E</p>
    <p *ngSwitchCase = "'E250'">Mecedes E250</p>
    <p *ngSwitchCase = "'C200'">Mecedes C200</p>
    <p *ngSwitchCase = "'HondaRecord'">Honda Record</p>
    <div>
    
    For Directives
    <ul>
        <li *ngFor = "let Flower of StringFlower">{{Flower}} </li>
    </ul>
    `,
    styles : [``]
    // templateUrl: './header.component.html',
    // styleUrls: ['./header.component.css'],
})

export class AppHeader{
    ClassEPU = "D11QTANM";
    public TestCars = "S500";
    public TestIf = false;

    public StringFlower : string[] = ['Lan','Cuc','Hue','DongTien','HuongDuong'];
}