import { Component,OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { ProyectosComponent } from '../proyectos/proyectos.component';
@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [NgFor, FontAwesomeModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css',
})
export class PortafolioComponent implements OnInit  {
  lenguajes:any;
  portafolio = [
    {
      title: 'WordPress',
      img: faWordpress,
      description:
        'La mejor forma de usar WordPress: un hosting ultrarrápido, una edición flexible e intuitiva y todo lo que necesitas para hacer crecer tu web y tu audiencia.',
      color: 'Yellow-400',
    },
    {
      title: 'JavaScript',
      img: faJs,
      description:
        'La mejor forma de usar WordPress: un hosting ultrarrápido, una edición flexible e intuitiva y todo lo que necesitas para hacer crecer tu web y tu audiencia.',
    },
  ];
  ngOnInit(){
  this.lenguajes= this.portafolio.map(element =>  element.title);
    console.log(this.lenguajes);
  }
 
}
