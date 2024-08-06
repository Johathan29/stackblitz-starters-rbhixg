import { Component,OnInit,Inject } from '@angular/core';
import { DatePipe,Location,DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  location:any;
  constructor(@Inject(DOCUMENT) document: any) {
    console.log(document.location.href);
    }
  
  today: number = Date.now();
  ngOnInit() {
    console.log(this.location=document.location.pathname);
  }
}
