import { Component,OnInit,Injectable } from '@angular/core';
import { FormSubmittedEvent, FormsModule, NgForm,FormBuilder } from '@angular/forms';
import { NgFor,JsonPipe,NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form-log',
  standalone: true,
  imports: [FormsModule, NgFor,JsonPipe,NgClass],

  templateUrl: './form-log.component.html',
  styleUrl: './form-log.component.css'
})

export class FormLogComponent implements OnInit { 
  resultadoPeticion:any;
   name:any;
   classes=['max-w-sm', 'mx-auto', 'z-50', 'bg-[#19243ccc]', 'rounded-md', 'p-4']; 
  asignaClases()
  {
   
    
    return this.classes;
  }
  constructor( private mibuilder : FormBuilder) { }
  activo=false;
  ngOnInit() { this.get();console.log(this.asignaClases()); this.name= localStorage.getItem("nombre");}
  get() {

  }
    
  onSubmit(miForm: NgForm){
    
    if(miForm.value.email==='rosariojohathan@gmail.com' && miForm.value.password==='12345')
    {
      alert('hola Johathan');
      this.activo=true;
      this.classes.push('hidden');
      console.log(this.asignaClases());
   localStorage.setItem('nombre','Johathan');
   
    console.log(this.name);
    } else{
      alert('su email y password son incorretas, intenta de nuevo');
    }
    console.log(miForm.value)
  }
  
}
