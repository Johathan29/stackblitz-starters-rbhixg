import { Component, OnInit } from '@angular/core';
import {Portafolio} from '../datos-portafolio';
import { ModalPortafolio } from '../modal-datos-portafolio';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-wordpress',
  standalone: true,
  imports: [NgFor,FontAwesomeModule],
  templateUrl: './wordpress.component.html',
  styleUrl: './wordpress.component.css'
})
export class WordpressComponent implements OnInit {
  portafolio:any=ModalPortafolio; 
  dato:any;
  constructor(private route: ActivatedRoute){}
  getHero(id:any){
    this.portafolio = Portafolio.find(item => item.title === id);
    console.log(this.portafolio);
  }
  id:any
  ngOnInit(){
    
    this.route.paramMap.subscribe((pmap) => this.getHero(pmap.get('title')));
 /* this.route.paramMap
 .subscribe((params: ParamMap) => {
 this.id = +params.get('id');

 });*/
}
}
