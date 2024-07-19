import { Component, OnInit,OnDestroy, inject,Input, Output,EventEmitter} from '@angular/core';
import { NgFor,JsonPipe,NgIf } from '@angular/common';
import { FormSubmittedEvent, FormsModule } from '@angular/forms';
import { PortafolioComponent } from '../portafolio/portafolio.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { FormLogComponent} from '../form-log/form-log.component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Post } from '../post';
import { HttpClient } from '@angular/common/http';
import { NotificacionesService } from '../notificaciones.service';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [PortafolioComponent, ProyectosComponent,NgIf,FormLogComponent, FontAwesomeModule, NgFor,FormsModule,JsonPipe],
  providers: [NotificacionesService],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})

export class SliderComponent implements OnInit {
  
  faArrowRight = faArrowRight;
  resultadoP:any;
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
  captaResultado(event:any) { this.resultadoP = event; }
ngOnDestroy(){
  this.SignOut();
}
   SignOut=()=>{
localStorage.setItem('nombre','');
location.reload();
  }
}
