import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrl: './forms-example.component.css'
})
export class FormsExampleComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = "pet";
  answer='';

  suggestUserName(){
    const suggestedName = 'Superuser'
  }

  // onSubmit(form: NgForm){
  //   console.log(form)
  // }

  onSubmit(){
    console.log(this.signupForm.value)
    console.log(this.signupForm.valid)
  }
}
