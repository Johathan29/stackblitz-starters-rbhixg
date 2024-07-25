import { Component,OnInit,Injectable } from '@angular/core';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import {Portafolio} from '../datos-portafolio';
@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [NgFor, FontAwesomeModule],
  providers:[Portafolio],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css',
})
@Injectable()
export class PortafolioComponent implements OnInit  {
 
  
  lenguajes :any;
  constructor(datos : Portafolio){
    this.lenguajes=datos.portafolio;
    console.log(datos.portafolio.map(item=> item.title))
  }
  ngOnInit(){
 
  console.log(this.lenguajes);
  }
 
}
