import { Component, OnInit,OnDestroy, inject,Input, Output,EventEmitter, output} from '@angular/core';
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
import { RegistrarComponent } from '../registrar/registrar.component';
import { NotificacionesService } from '../notificaciones.service';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [RegistrarComponent,PortafolioComponent, ProyectosComponent,NgIf,FormLogComponent, FontAwesomeModule, NgFor,FormsModule,JsonPipe],
  providers: [NotificacionesService,],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})

export class SliderComponent implements OnInit {
  
  faArrowRight = faArrowRight;
  resultadoP:any;
  faBell = faBell;
  notifi = 20;
  role:any;
  perfil=localStorage.getItem('perfil');
  perfilvalor:any;
  avatar=localStorage.getItem('avatar');
  nombre=localStorage.getItem('nombre');
  perfilverifica:any;
  valor: any;
  datas = [
    {
      role: 'admin',
      name: 'Data to enrich your online business',
      description:
        ' Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
      url: '/',
    },
    {
      role: 'moderator',
      name: 'Data to enrich your online business',
      description:
        ' Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
      url: '/',
    }
  ]
  ;
  
  constructor(private resultadoPeticion: NotificacionesService) {}
  captaResultado(event:any) { this.resultadoP = event;
  
  
  }
  ngOnInit() {
    
    this.perfilvalor=this.perfil;
    let cambios=JSON.parse(this.perfilvalor);
    this.perfilvalor=cambios;
    this.role=this.perfilvalor.role;
    this.valor = this.datas.find(
      (item) =>
        (item.name = 'Data to enrich your online business' ? item.name : '')
    );
  }
  
ngOnDestroy(){
  this.SignOut();
}
   SignOut=()=>{
localStorage.clear()
location.reload();
  }
}
