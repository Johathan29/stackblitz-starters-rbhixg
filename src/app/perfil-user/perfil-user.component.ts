import { Component,OnInit,Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';
import { FormSubmittedEvent,FormControl, FormsModule, NgForm,FormBuilder,Validators,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-perfil-user',
  standalone: true,
  imports: [DatePipe,FontAwesomeModule],
  providers:[Injectable],
  templateUrl: './perfil-user.component.html',
  styleUrl: './perfil-user.component.css'
})
@Injectable()
export class PerfilUserComponent implements OnInit{
perfil=localStorage.getItem('perfil');
perfilvalor:any;
date='2020-08-07';
faAddressBook=faAddressBook;
faUserAlt=faUserAlt;
result : any;
get= async () => {
  const response = await fetch('https://dummyjson.com/users');
  this.result= await response.json();
  this.result.users;
   }
ngOnInit()
{
  this.get();
  this.perfilvalor=this.perfil;
  let cambios=JSON.parse(this.perfilvalor);
  this.perfilvalor=cambios;
 
}
onSubmit(firstName : string,lastName : string){
  console.log(this.result.users);
const ID=this.perfilvalor;
  this.perfilvalor.firstName=firstName;
  this.perfilvalor.lastName=lastName;
  localStorage.setItem("perfil",JSON.stringify(this.perfilvalor));
  const users=this.result.users.find(function(id:any) {
    // Check if the current mark is even
 if(id.id===ID.id) {
 return id.firstName=ID.firstName,id.lastName=ID.lastName;
 }
  });
  console.log(this.perfilvalor);
  console.log(users);
}

}
