import { Component } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { SliderComponent } from './app/slider/slider.component';
import { PortafolioComponent } from './app/portafolio/portafolio.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initFlowbite } from 'flowbite';
import { NotificacionesService } from './app/notificaciones.service';
const appRoutes: Routes = [
  { path: 'Portafolio', component: PortafolioComponent },

  //{ path: '**', component: App }
];
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    SliderComponent,
    RouterOutlet,
    PortafolioComponent,
    FontAwesomeModule,
    FooterComponent,
  ],
  standalone: true,

  template: `
 
<app-header/>
<app-slider/>
<app-footer/>

<fa-icon [icon]="faCoffee"></fa-icon>
  `,
})
export class App {
  name = 'Angular';
  faCoffee = faVirus;
}

bootstrapApplication(App, {
  providers: [provideAnimationsAsync()],
});
