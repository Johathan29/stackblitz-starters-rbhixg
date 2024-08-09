import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-user',
  standalone: true,
  imports: [],
  templateUrl: './perfil-user.component.html',
  styleUrl: './perfil-user.component.css'
})
export class PerfilUserComponent implements OnInit{
perfil=localStorage.getItem('perfil');
perfilvalor:any;
ngOnInit(){
  this.perfilvalor=this.perfil;
  let cambios=JSON.parse(this.perfilvalor);
  this.perfilvalor=cambios;
}
}
