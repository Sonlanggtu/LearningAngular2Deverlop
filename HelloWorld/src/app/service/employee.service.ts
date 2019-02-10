import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class EmployeeService {
    public ApiUrl : string = "http://5c5f55773668970014fd1c33.mockapi.io/api/employee";
    constructor(private _http :  Http){
            
    }
    GetList(): Observable<any[]> {
        return this._http.get(this.ApiUrl).map((response: Response) => response.json());
    }
}