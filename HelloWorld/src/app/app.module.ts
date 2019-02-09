import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './header.component';
import { FormsModule } from '@angular/forms'
import { EmployeeExport } from './employee.component';
import { EmployeeService } from './service/Employee.service';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppHeader, AppComponent, EmployeeExport
  ],

  providers: [EmployeeService],
  bootstrap: [AppComponent, AppHeader, EmployeeExport]
})
export class AppModule { }