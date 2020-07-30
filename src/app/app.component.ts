import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jirastorybook';
  exampleForm: FormGroup
  constructor(private Fb: FormBuilder){
    this.exampleForm = this.Fb.group({
      email: ['', Validators.required],
      password: ['']
    }) 
  }
  somefun = ()=> {
    console.log("logged");
  }
}
