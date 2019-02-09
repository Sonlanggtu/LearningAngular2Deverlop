import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
    GetList(): any[] {
        let ListEmployee: any[] = [
            { ID: 1, Name: 'Nguyễn Thùy Linh' },
            { ID: 2, Name: 'Nguyễn Thị Thảo' },
            { ID: 3, Name: 'Nguyễn Thị Phương Anh' },
            { ID: 4, Name: 'Nguyễn Thị Ánh' },
            { ID: 5, Name: 'Nguyễn Phương Ly' },
            { ID: 6, Name: 'Nguyễn Như Quỳnh' },
            { ID: 7, Name: 'Nguyễn Quỳnh Anh' }
        ]
        return ListEmployee;
    }
};