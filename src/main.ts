import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppRoutingModule } from './app/app-routing/app-routing.module';
import {  HttpClient } from '@angular/common/http';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { SliderComponent } from './app/slider/slider.component';
import { PortafolioComponent } from './app/portafolio/portafolio.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initFlowbite } from 'flowbite';
import { NotificacionesService } from './app/notificaciones.service';
import { RegistrarComponent } from './app/registrar/registrar.component';
import { appRoutes } from './APP_ROUTES';
import {AppModule} from './NgModule'
@Component({
  selector: 'app-root',
  imports: [
    RegistrarComponent,
    HeaderComponent,
    SliderComponent,
    RouterOutlet,
    PortafolioComponent,
    FontAwesomeModule,
    FooterComponent,
 
   
  ],
  standalone: true,

  template: `
 <section>
  <div>
<app-header/>
</div>

<app-slider/>


<div>
<app-footer/>
</div>
</section>
  `,
})


export class App {
  name = 'Angular';
  faCoffee = faVirus;
  
}

bootstrapApplication(App, {
  providers: [provideAnimationsAsync()],
});
