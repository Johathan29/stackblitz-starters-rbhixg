import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from '../registrar/registrar.component';
import { SliderComponent } from '../slider/slider.component';

const routes: Routes = [
  { path: '/home', component: SliderComponent },
  { path: '/registrar', component: RegistrarComponent }
];
@NgModule({
  declarations: [

  ],
  imports: [
    
    CommonModule
  ]
})
export class AppRoutingModule { }
