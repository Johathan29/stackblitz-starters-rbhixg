import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { RegistrarComponent } from './registrar/registrar.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
   { path:'registrar', component:RegistrarComponent},
   { path:'', component:HomeComponent}
];
