import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from '../registrar/registrar.component';


const routes: Routes = [
  { path: '/registrar', component: RegistrarComponent }
];
@NgModule({
  declarations: [
    RegistrarComponent
  ],
  imports: [RouterModule.forRoot(routes),
    
    CommonModule
  ]
})
export class AppRoutingModule { }
