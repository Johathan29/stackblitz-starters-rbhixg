import { Component } from '@angular/core';
import { FormSubmittedEvent, FormsModule, NgForm, } from '@angular/forms';
import { NgFor,JsonPipe } from '@angular/common';
@Component({
  selector: 'app-form-log',
  standalone: true,
  imports: [FormsModule, NgFor,JsonPipe],
  templateUrl: './form-log.component.html',
  styleUrl: './form-log.component.css'
})
export class FormLogComponent {
  onSubmit(miForm: NgForm){
    console.log(miForm.value)
  }
}
