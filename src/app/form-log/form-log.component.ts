import { Component,OnInit,Injectable,Inject,Input, Output,EventEmitter} from '@angular/core';
import { FormSubmittedEvent, FormsModule, NgForm,FormBuilder,Validators,FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';
import { NgFor,JsonPipe,NgClass,NgIf } from '@angular/common';
import { HttpClient,HttpRequest } from '@angular/common/http';
import {APIService} from '../api.service';
import {datauser} from '../Datauser'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-form-log',
  standalone: true,
  imports: [FormsModule,RouterModule, NgFor,NgClass,JsonPipe,NgClass,FontAwesomeModule,NgIf],
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
  faCircleExclamation=faCircleExclamation;
 path:any; 
 notificacion:any;
 hidden="hidden";
 classUserRegistrado=['fixed', ' inset-auto', ' right-2', ' z-40 ', 'flex ', 'pr-2 ', ' mt-2', ' sm:fixed', ' sm:pr-0']
 classError=['hidden', 'items-center','w-full','hidden','z-50','p-4','mb-4', 'absolute', ' text-red-800 ', 'border-t-4 ', 'border-red-300', ' bg-red-50', 'dark:text-red-400 ', 'dark:bg-gray-800', 'dark:border-red-800'];
 classValid=['flex ','absolute','w-full', 'items-center', ' p-4', ' mb-4', 'text-sm ', 'text-green-800 ', 'rounded-lg ', 'bg-green-50', ' dark:bg-gray-800 ', 'dark:text-green-400'] 
 classBtncerrarError=['ms-auto', ' -mx-1.5 ','z-50', '-my-1.5', ' bg-red-50', ' text-red-500', ' rounded-lg', ' focus:ring-2', ' focus:ring-red-400', ' p-1.5', ' hover:bg-red-200', ' inline-flex', ' items-center', ' justify-center', ' h-8', ' w-8', ' dark:bg-gray-800', ' dark:text-red-400', ' dark:hover:bg-gray-700']
 classBtncerrarValid=['ms-auto', ' -mx-1.5 ', 'z-50','-my-1.5', ' bg-green-50', ' text-green-500', ' rounded-lg', ' focus:ring-2', ' focus:ring-red-400', ' p-1.5', ' hover:bg-green-200', ' inline-flex', ' items-center', ' justify-center', ' h-8', ' w-8', ' dark:bg-gray-800', ' dark:text-green-400', ' dark:hover:bg-gray-700']
  name:any;
  email:any;
  menssegeEmail:any;
  menssegePassword:any;
   data:any;
   classes=['max-w-60','min-w-60','w-60', 'mx-auto', 'z-50', 'bg-[#19243ccc]', 'rounded-md', 'p-4']; 
   result:any;
   controlEmail:any;
   controlPassword:any;
   asignaClases()
  {
   
    
    return this.classes;
  }
  resultadoPeticion:any;
  
  constructor(private fctrl:FormBuilder) {
    this.form=this.fctrl.group({
      Email : ['',Validators.required],
      Password : ''
    });
   }
  
 get= async () => {
    const response = await fetch('https://dummyjson.com/users');
    this.result= await response.json();
    console.log(this.result.users);


  
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

this.controlEmail= new FormControl(miForm.value.email, Validators.compose([
  Validators.required,
  Validators.email,
   ]), );
   this.controlPassword= new FormControl(miForm.value.password, Validators.compose([
    Validators.required,
    Validators.maxLength(8),
     ]));
if(this.controlEmail.errors === null){
 
  
  console.log(this.controlEmail.errors);

}else{
if(this.controlEmail.errors['required']===true){
this.menssegeEmail="Completar este campo";
} else
if(this.controlEmail.errors['email']===true){
this.menssegeEmail="Introducir un correo electronico valido";
} else{
this.menssegeEmail='';
}
if(this.controlPassword.errors === null ){
 
  
  console.log(this.controlPassword.errors);

}else
if(this.controlPassword.errors['required']===true ){
this.menssegePassword="Completar este campo";
console.log(this.controlPassword.errors['maxLength'])
} else
if(this.controlPassword.errors['maxLength']!==null){
this.menssegePassword="Longitud Maxima de caracteres";
} else{
this.menssegePassword='';
}

   // {first: 'Nancy', last: 'Drew'}
}
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
  //localStorage.setItem('role',emailValidado.role);
  this.validar();
  //location.reload();
  this.notificacion="Bienvenido";
}else
{
  console.log('no validado email');
  this.validar();

}

   /* if(miForm.value.email===this.email && miForm.value.password==='12345')
    {
      alert('hola Johathan');
      this.activo=true;
      this.classes.push('hidden');
      this.asignaClases();
   localStorage.setItem('nombre','Alexander');
   
    
    } else{
      alert('su email y password son incorretas, intenta de nuevo');
      this.validar();
    }
    */
    
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
