import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselImagenesComponent } from './components/carousel-imagenes/carousel-imagenes.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CarouselImagenesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ], exports: [
    NavbarComponent,
    FooterComponent,
    CarouselImagenesComponent
  ]
})
export class SharedModule { }
