import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  onSubmit(registrar : NgForm){
    console.log(registrar.value);
  }
}
