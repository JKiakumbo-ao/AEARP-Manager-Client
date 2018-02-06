import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { MainPageComponent } from './main-page.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { GraduateComponent } from './graduate/graduate.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MainPageComponent, 
    AboutComponent, 
    HomeComponent, 
    FooterComponent, 
    ContactComponent, 
    GaleriaComponent, 
    GraduateComponent
  ]
})
export class MainPageModule { }
