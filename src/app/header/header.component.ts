import { Component } from '@angular/core';
import { RouterLink, RouterModule, ActivatedRoute } from '@angular/router';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faCoffee = faBell;
}
