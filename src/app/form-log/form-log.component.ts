import { Component,OnInit,Injectable,Inject,Input, Output,EventEmitter} from '@angular/core';
import { FormSubmittedEvent, FormsModule, NgForm,FormBuilder,Validators,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { NgFor,JsonPipe,NgClass } from '@angular/common';
import { HttpClient,HttpRequest } from '@angular/common/http';
import {APIService} from '../api.service';
import {datauser} from '../Datauser'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-form-log',
  standalone: true,
  imports: [FormsModule, NgFor,NgClass,JsonPipe,NgClass,FontAwesomeModule,],
providers:[Injectable,APIService,Validators],
  templateUrl: './form-log.component.html',
  styleUrl: './form-log.component.css'
})
@Injectable()
export class FormLogComponent implements OnInit { 
  @Output() envRes: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;
  faSmile=faSmile;
  faExclamationCircle=faExclamationCircle;
 path:any; 
 perfil:any;
 notificacion:any;
 hidden="hidden";
 classUserRegistrado=['fixed', ' inset-auto', ' right-2', ' z-40 ', 'flex ', 'pr-2 ', ' mt-2', ' sm:fixed', ' sm:pr-0']
 classError=['hidden', 'items-center','w-full','hidden','z-50','p-4','mb-4', 'absolute', ' text-red-800 ', 'border-t-4 ', 'border-red-300', ' bg-red-50', 'dark:text-red-400 ', 'dark:bg-gray-800', 'dark:border-red-800'];
 classValid=['flex ','absolute','w-full', 'items-center', ' p-4', ' mb-4', 'text-sm ', 'text-green-800 ', 'rounded-lg ', 'bg-green-50', ' dark:bg-gray-800 ', 'dark:text-green-400'] 
 classBtncerrarError=['ms-auto', ' -mx-1.5 ','z-50', '-my-1.5', ' bg-red-50', ' text-red-500', ' rounded-lg', ' focus:ring-2', ' focus:ring-red-400', ' p-1.5', ' hover:bg-red-200', ' inline-flex', ' items-center', ' justify-center', ' h-8', ' w-8', ' dark:bg-gray-800', ' dark:text-red-400', ' dark:hover:bg-gray-700']
 classBtncerrarValid=['ms-auto', ' -mx-1.5 ', 'z-50','-my-1.5', ' bg-green-50', ' text-green-500', ' rounded-lg', ' focus:ring-2', ' focus:ring-red-400', ' p-1.5', ' hover:bg-green-200', ' inline-flex', ' items-center', ' justify-center', ' h-8', ' w-8', ' dark:bg-gray-800', ' dark:text-green-400', ' dark:hover:bg-gray-700']
 emailValidado:any; 
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
  
  constructor(private fctrl:FormBuilder) {
    this.form=fctrl.group({
      Email : ['',Validators.required],
      Password : ''
    });
   }
  
 get= async () => {
    const response = await fetch('https://dummyjson.com/users');
    this.result= await response.json();
    this.result.users
     }
 remember(){

 }
  activo=false;
  ngOnInit() { //this.Get();
    this.get();

    this.envRes.emit(localStorage.getItem("nombre"))
    
 
this.asignaClases(); 
    this.name=localStorage.getItem("nombre");
  }
 
    
  onSubmit(miForm: NgForm){
    const value=this.result.users;
  this.email= value.forEach(function (value:any) {
    value.email;
    
});
console.log(miForm.value.password);
 this.emailValidado=this.result.users.find(function(emai:any) {
  // Check if the current mark is even
return emai.email==miForm.value.email && emai.password==miForm.value.password;
});
console.log( this.emailValidado);
if(this.emailValidado){
  this.activo=true;
  localStorage.setItem('role',this.emailValidado.role);
  localStorage.setItem('nombre',this.emailValidado.firstName)
  localStorage.setItem("perfil",JSON.stringify(this.emailValidado))
  this.classes.push('hidden');
  this.asignaClases();
  this.validar();
  location.reload();
  this.notificacion="Bienvenido";
}else
{
  console.log('no validado email');
  this.validar();

}

  }
  restablecer(){
    return this.classError;
  }
  validar(){
    if(this.name==''){
      this.notificacion="su email y password son incorretas, intenta de nuevo";
      this.classError.shift();
      this.classError.push('flex','z-50', 'p-4','w-full');
      return this.classError;

    }
    else
    {
      this.classValid.shift();
      this.classValid.push('flex','z-50', 'p-4');
      return this.classValid
    }
  }
  
}
