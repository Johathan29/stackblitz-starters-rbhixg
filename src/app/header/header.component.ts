import { Component, } from '@angular/core';
import { NgFor,NgClass,NgIf} from '@angular/common';
import { RouterLink, RouterModule, ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule,NgFor,NgClass,NgIf,RouterLink, RouterModule,   ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faCoffee = faBell;
  navegation=[
    {
titulo:'Portada',
url:'/',
children:[
  {
  childtitle:'',
childurl:''
}
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
    
      }
]
}
