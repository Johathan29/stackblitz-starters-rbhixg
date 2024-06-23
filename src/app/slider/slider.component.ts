import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
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
  imports: [PortafolioComponent, ProyectosComponent, FontAwesomeModule, NgFor],
  providers: [NotificacionesService],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit {
  faCoffee = faArrowRight;
  faBell = faBell;
  notifi = 20;
  valor: any;
  datas = [
    {
      name: 'Data to enrich your online business',
      description:
        ' Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
      url: '/',
    },
  ];
  constructor(private resultadoPeticion: NotificacionesService) {}
  ngOnInit() {
    this.valor = this.datas.find(
      (item) =>
        (item.name = 'Data to enrich your online business' ? item.name : '')
    );
  }
}
