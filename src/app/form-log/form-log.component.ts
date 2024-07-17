import { Component,OnInit,Injectable,Inject } from '@angular/core';
import { FormSubmittedEvent, FormsModule, NgForm,FormBuilder } from '@angular/forms';
import { NgFor,JsonPipe,NgClass } from '@angular/common';
import { HttpClient,HttpRequest } from '@angular/common/http';
import {APIService} from '../api.service';
import {datauser} from '../Datauser'
@Component({
  selector: 'app-form-log',
  standalone: true,
  imports: [FormsModule, NgFor,JsonPipe,NgClass],
providers:[Injectable,APIService],
  templateUrl: './form-log.component.html',
  styleUrl: './form-log.component.css'
})
@Injectable()
export class FormLogComponent implements OnInit { 

  name:any;
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

this.asignaClases(); 
    this.name= localStorage.getItem("nombre");
  }
 
    
  onSubmit(miForm: NgForm){
    
    if(miForm.value.email==='rosariojohathan@gmail.com' && miForm.value.password==='12345')
    {
      alert('hola Johathan');
      this.activo=true;
      this.classes.push('hidden');
      console.log(this.asignaClases());
   localStorage.setItem('nombre','Alexander');
   
    console.log(this.result.users);
    } else{
      alert('su email y password son incorretas, intenta de nuevo');
    }
  
  }
  
}
