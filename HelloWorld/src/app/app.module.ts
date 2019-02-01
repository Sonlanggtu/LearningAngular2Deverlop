import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppHeader} from './header.component';
import {FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,AppHeader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,AppHeader]
})
export class AppModule { }