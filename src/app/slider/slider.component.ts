import { Component, OnInit, inject } from '@angular/core';

import { PortafolioComponent } from '../portafolio/portafolio.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Post } from '../post';
import { HttpClient } from '@angular/common/http';
import { NotificacionesService } from '../notificaciones.service';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [PortafolioComponent, ProyectosComponent, FontAwesomeModule],
  providers: [NotificacionesService],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit {
  faCoffee = faArrowRight;
  faBell = faBell;
  constructor(private mensaje: NotificacionesService) {}
  ngOnInit() {}
}
