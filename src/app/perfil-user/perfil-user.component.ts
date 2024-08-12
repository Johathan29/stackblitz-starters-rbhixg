import { Component,OnInit,Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';
import { FormSubmittedEvent, FormsModule, NgForm,FormBuilder,Validators,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-perfil-user',
  standalone: true,
  imports: [DatePipe,FontAwesomeModule,],
  templateUrl: './perfil-user.component.html',
  styleUrl: './perfil-user.component.css'
})

export class PerfilUserComponent implements OnInit{
perfil=localStorage.getItem('perfil');
perfilvalor:any;
date='2020-08-07';
faAddressBook=faAddressBook;
faUserAlt=faUserAlt;
ngOnInit()
{
 
  this.perfilvalor=this.perfil;
  let cambios=JSON.parse(this.perfilvalor);
  this.perfilvalor=cambios;
  console.log(this.perfilvalor)
}
onSubmit(miForm: NgForm){
console.log(miForm.value);
}
}
