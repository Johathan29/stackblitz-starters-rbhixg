import { Component,OnInit,Injectable,Inject,Input, Output,EventEmitter} from '@angular/core';
import { FormSubmittedEvent, FormsModule, NgForm,FormBuilder } from '@angular/forms';
import { NgFor,JsonPipe,NgClass } from '@angular/common';
import { HttpClient,HttpRequest } from '@angular/common/http';
import {APIService} from '../api.service';
import {datauser} from '../Datauser'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-form-log',
  standalone: true,
  imports: [FormsModule, NgFor,NgClass,JsonPipe,NgClass,FontAwesomeModule],
providers:[Injectable,APIService],
  templateUrl: './form-log.component.html',
  styleUrl: './form-log.component.css'
})
@Injectable()
export class FormLogComponent implements OnInit { 
  @Output() envRes: EventEmitter<any> = new EventEmitter<any>();

  
  faExclamationCircle=faExclamationCircle;
 path:any; 
 hidden="hidden";
 classUserRegistrado=['fixed', ' inset-auto', ' right-2', ' z-40 ', 'flex ', 'pr-2 ', ' mt-2', ' sm:fixed', ' sm:pr-0']
 classError=['flex', 'items-center', ' z-50 p-4 mb-4 ', 'absolute', ' text-red-800 ', 'border-t-4 ', 'border-red-300', ' bg-red-50', 'dark:text-red-400 ', 'dark:bg-gray-800', 'dark:border-red-800'];
 classValid=['flex ','absolute', 'items-center', ' p-4', ' mb-4', 'text-sm ', 'text-green-800 ', 'rounded-lg ', 'bg-green-50', ' dark:bg-gray-800 ', 'dark:text-green-400'] 
 classBtncerrarError=['ms-auto', ' -mx-1.5 ','z-50', '-my-1.5', ' bg-red-50', ' text-red-500', ' rounded-lg', ' focus:ring-2', ' focus:ring-red-400', ' p-1.5', ' hover:bg-red-200', ' inline-flex', ' items-center', ' justify-center', ' h-8', ' w-8', ' dark:bg-gray-800', ' dark:text-red-400', ' dark:hover:bg-gray-700']
 classBtncerrarValid=['ms-auto', ' -mx-1.5 ', 'z-50','-my-1.5', ' bg-green-50', ' text-green-500', ' rounded-lg', ' focus:ring-2', ' focus:ring-red-400', ' p-1.5', ' hover:bg-green-200', ' inline-flex', ' items-center', ' justify-center', ' h-8', ' w-8', ' dark:bg-gray-800', ' dark:text-green-400', ' dark:hover:bg-gray-700']
  name:any;
  email:any;
   data:any;
   classes=['max-w-sm', 'mx-auto', 'z-50', 'bg-[#19243ccc]', 'rounded-md', 'p-4']; 
   result:any;
   asignaClases()
  {
   
    
    return this.classes;
  }
  resultadoPeticion:any;
  
  constructor() { }
 get= async () => {
    const response = await fetch('https://dummyjson.com/users');
    this.result= await response.json();
    console.log(this.result.users);


  
 }

  activo=false;
  ngOnInit() { //this.Get();
    this.get();
    this.envRes.emit(localStorage.getItem("nombre"))
    
 this.classError;
this.asignaClases(); 
    this.name=localStorage.getItem("nombre");
  }
 
    
  onSubmit(miForm: NgForm){
    const value=this.result.users;
  this.email= value.forEach(function (value:any) {
    value.email;
});

const emailValidado=this.result.users.find(function(emai:any) {
  // Check if the current mark is even
return emai.email==miForm.value.email && emai.password==miForm.value.password;
});
if(emailValidado){
  console.log(emailValidado.firstName)
  this.activo=true;
  this.classes.push('hidden');
  this.asignaClases();
  console.log(localStorage.setItem('nombre',emailValidado.firstName));
  this.classValid;
  location.reload();
}else
{
   this.path="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
  console.log('no validado email')
  this.classError;
}
    if(miForm.value.email===this.email && miForm.value.password==='12345')
    {
      alert('hola Johathan');
      this.activo=true;
      this.classes.push('hidden');
      this.asignaClases();
   localStorage.setItem('nombre','Alexander');
   
    
    } else{
      alert('su email y password son incorretas, intenta de nuevo');
    }
  
  }
  
}
