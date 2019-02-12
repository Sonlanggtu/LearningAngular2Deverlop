import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppHeader} from './header.component';
import {NotFound404Page} from './error404.component';
import {HomePage} from './home.component';
const routes: Routes = [
  {path:'', component: HomePage },
  {path:'employees', component:AppHeader },
  {path:'**',component:NotFound404Page }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
