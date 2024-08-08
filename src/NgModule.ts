import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { App } from './main';
import { PortafolioComponent } from './app/portafolio/portafolio.component';
import { SliderComponent } from './app/slider/slider.component';

const appRoutes: Routes = [
  
  { path: '/home', component: SliderComponent },

  //{ path: '**', component: SliderComponent }
];
@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),App],
  providers: [],
  bootstrap: [App],
})
export class AppModule {

}
