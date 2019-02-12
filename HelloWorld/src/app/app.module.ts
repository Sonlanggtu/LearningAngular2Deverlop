import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './header.component';
import { FormsModule } from '@angular/forms'
import {HttpModule} from '@angular/http';
import {PageExport} from './page.component';
import {NotFound404Page} from './error404.component';
import {HomePage} from './home.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppHeader, AppComponent,PageExport,NotFound404Page,HomePage
  ],

  providers: [],
  bootstrap: [PageExport,AppComponent, AppHeader,NotFound404Page]
})
export class AppModule { }