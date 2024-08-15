import { Component,OnInit,Injectable } from '@angular/core';
import { NgFor } from '@angular/common';
import {RouterLink} from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import {Portafolio} from '../datos-portafolio';
import { ModalPortafolio } from '../modal-datos-portafolio';
@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [NgFor, FontAwesomeModule,RouterLink],
  providers:[Injectable],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css',
})
@Injectable()
export class PortafolioComponent implements OnInit {
  portafolio:any=ModalPortafolio; 
  dato:any;
  
  ngOnInit() {
    
    this.dato=Portafolio;
      console.log(this.dato);
      return this.portafolio;
  }
}
