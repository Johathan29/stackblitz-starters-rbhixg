import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { App } from './main';
import { PortafolioComponent } from './app/portafolio/portafolio.component';

const appRoutes: Routes = [
  
  { path: 'Portafolio', component: PortafolioComponent },

  //{ path: '**', component: App }
];
@NgModule({
  declarations: [App],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
