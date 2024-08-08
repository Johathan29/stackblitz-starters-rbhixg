import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from '../registrar/registrar.component';
import { SliderComponent } from '../slider/slider.component';
import { HeaderComponent } from '../header/header.component';

const routes: Routes = [
  { path: '/home', component: SliderComponent },
  { path: '/registrar', component: RegistrarComponent }
];
@NgModule({
  
  declarations: [

  ],
  imports: [

    RouterModule.forRoot(routes),
    CommonModule
  ],
  providers:[RouterModule]
})
export class AppRoutingModule { }
