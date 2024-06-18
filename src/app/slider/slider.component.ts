import { Component } from '@angular/core';
import { PortafolioComponent } from '../portafolio/portafolio.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [PortafolioComponent, ProyectosComponent, FontAwesomeModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  faCoffee = faArrowRight;
}
