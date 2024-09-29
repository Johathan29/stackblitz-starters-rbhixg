import { Component } from '@angular/core';
import { RouterModule,provideRouter, Routes, RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

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
import { FormLogComponent } from './app/form-log/form-log.component';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { PerfilUserComponent } from './app/perfil-user/perfil-user.component';
import { RegistrarComponent } from './app/registrar/registrar.component';
import { WordpressComponent } from './app/wordpress/wordpress.component';
const appRoutes: Routes = [
  { path: '/portafolio', component:PortafolioComponent, 
children:[
  
]
},
{ path: 'portafolio/:title', component:WordpressComponent, 

},
  { path: 'registrar', component:RegistrarComponent },

  { path: '', component:SliderComponent },
  {
    path:'/:id', component:PerfilUserComponent
  },
  
  {
    path:'**', component:NotFoundComponent
  }
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
    FormLogComponent
   
  ],
  standalone: true,

  template: `
 
<app-header/>
<router-outlet></router-outlet>

<app-footer/>


  `,
})
export class App {
  name = 'Angular';
  faCoffee = faVirus;
}

bootstrapApplication(App, {
  providers: [provideAnimationsAsync(),provideRouter(appRoutes)],
});
