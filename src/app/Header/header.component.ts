import { Component, } from '@angular/core';
import { NgFor,NgClass,NgIf} from '@angular/common';
import { RouterLink, RouterModule, ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule,NgFor,NgClass,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faCoffee = faAngleDown;
  navegation=[
    {
titulo:'Portada',
url:'/',
children:[
  
],


  },
  {
    titulo:'Portafolio',
    url:'/portafolio',
    children:[{
      childtitle:'Wordpress',
    childurl:'wordpress'
    },
    {
      childtitle:'Angular',
      childurl:'angular'
      }
  ],
    
      },
      {
        titulo:'Registrar',
        url:'/registrar',
        children:[
      
],
}
      
]
}
