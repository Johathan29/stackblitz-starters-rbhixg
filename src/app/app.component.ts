import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormLogComponent } from './form-log/form-log.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormLogComponent,RegistrarComponent,ProyectosComponent,PortafolioComponent,RouterOutlet,HeaderComponent,FooterComponent,SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio';
  resultadoP:any;
  captaResultado(event:any) { this.resultadoP = event; }

}
