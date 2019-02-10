import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/Employee.service';


@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeExport implements OnInit {
    public ListEmployee: any[];

    constructor(private employeeService: EmployeeService) {
    }
    ngOnInit() {
        this.employeeService.GetList().subscribe((response: any) => {
            this.ListEmployee = response;
            console.log(response);
        });

    }
};