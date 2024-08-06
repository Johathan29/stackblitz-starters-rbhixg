import { Component,Injectable, OnInit,OnDestroy, inject,Input, Output,EventEmitter} from '@angular/core';
import { NgFor,JsonPipe,NgIf } from '@angular/common';
import {FormControl,FormsModule, FormGroup, Validators,NgForm} from '@angular/forms'
import { PortafolioComponent } from '../portafolio/portafolio.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { FormLogComponent} from '../form-log/form-log.component';
import { RegistrarComponent } from '../registrar/registrar.component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Post } from '../post';
import { HttpClient } from '@angular/common/http';
import { NotificacionesService } from '../notificaciones.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [FormsModule,RegistrarComponent,PortafolioComponent, ProyectosComponent,NgIf,FormLogComponent, FontAwesomeModule, NgFor,JsonPipe],
 providers:[],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
@Injectable()
export class SliderComponent implements OnInit {
  faCircleExclamation=faCircleExclamation;
  faArrowRight = faArrowRight;
  resultadoP:any;
  faBell = faBell;
  notifi = 20;
  //role=localStorage.getItem('role');
  valor: any;
   required:any;
  datas = [
    {
      role: 'admin',
      name: 'Data to enrich your online business',
      description:
        ' Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
      url: '/',
    },
  ];
  
   control = new FormControl;
  constructor() {
    /*this.miform=this.fctrl.group({
      codigo: ['', Validators.compose([
     Validators.required,
     Validators.minLength(3),
     Validators.maxLength(6)
      ])],
      nombre: ['', Validators.required]
      })*/
    }
  ngOnInit() {
   
   // this.role;
    this.valor = this.datas.find(
      (item) =>
        (item.name = 'Data to enrich your online business' ? item.name : '')
    );
  }
  captaResultado(event:any) { this.resultadoP = event; }
ngOnDestroy(){
  this.SignOut();
}
   SignOut=()=>{
localStorage.clear()
location.reload();
  }
  form = new FormGroup({
    first: new FormControl('Carson', Validators.minLength(2)),
    last: new FormControl('Drew'),
  });

  get first(): any {
    return this.form.get('first');
  }

  onSubmit(form : NgForm): void {
    this.control= new FormControl(form.value.first, Validators.compose([
      Validators.required,
      Validators.email,
       ]) );
   
    if(this.control.errors === null){
     
      console.log(form.value); 
      console.log(this.control.errors);

    }else{
   if(this.control.errors['required']===true){
    this.required="Completar este campo";
   } else
   if(this.control.errors['email']===true){
    this.required="Introducir un correo electronico valido";
   } else{
    this.required='';
   }
     
   console.log(this.control.errors['required']);
       // {first: 'Nancy', last: 'Drew'}
    }
    
   
  }

  setValue() {
    this.form.setValue({first: 'Carson', last: 'Drew'});
  }
}
