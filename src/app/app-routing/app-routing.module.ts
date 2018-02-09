

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarterComponent } from './../starter/starter.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { LoginComponent } from '../login/login.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'starter', component: StarterComponent },
      { path: 'home', component: MainPageComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
