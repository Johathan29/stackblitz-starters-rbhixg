import { Component } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { HeaderComponent } from './app/Header/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { SliderComponent } from './app/slider/slider.component';
import { PortafolioComponent } from './app/portafolio/portafolio.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
  ],
  standalone: true,

  template: `
 
<app-header/>
<app-slider/>

<fa-icon [icon]="faCoffee"></fa-icon>
  `,
})
export class App {
  name = 'Angular';
  faCoffee = faVirus;
}

bootstrapApplication(App, {
  providers: [provideAnimationsAsync()]
});
