import { Component,Injectable,OnInit } from '@angular/core';
import { FormSubmittedEvent, FormsModule, NgForm,FormBuilder,Validators,FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormsModule],
  providers:[Injectable],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
@Injectable()
export class RegistrarComponent implements OnInit  {
  constructor(){}
  ngOnInit() {
      
  }
  onSubmitRegistrar(registrar : NgForm){
    console.log(registrar.value);
  }
}
