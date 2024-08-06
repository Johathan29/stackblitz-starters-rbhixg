import { Component,OnDestroy } from '@angular/core';
import { PortafolioComponent } from '../portafolio/portafolio.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { RegistrarComponent } from '../registrar/registrar.component';
import { FormLogComponent } from "../form-log/form-log.component";
import { SliderComponent } from "../slider/slider.component";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import{FontAwesomeModule}from '@fortawesome/angular-fontawesome';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PortafolioComponent,
    ProyectosComponent,
    RegistrarComponent,
    FormLogComponent,
    SliderComponent,
    FontAwesomeModule,
    NgIf,
    NgFor
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  faArrowRight=faArrowRight;
  faCircleExclamation=faCircleExclamation
  faBell=faBell
  resultadoP:any;
  datas = [
    {
      role: 'admin',
      name: 'Data to enrich your online business',
      description:
        ' Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
      url: '/',
    },
  ];
  captaResultado(event:any) { this.resultadoP = event; }
  ngOnDestroy(){
   // this.SignOut();
  }
     SignOut=()=>{
      localStorage.clear()
      location.reload();
  
    }
}
