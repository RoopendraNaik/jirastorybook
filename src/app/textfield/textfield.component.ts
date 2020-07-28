import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {

  @Input() placeholder= "e.g placeholder";
  @Input() label= "label";
  @Input() type = "text";
  @Input() FormControlName: FormControl;
  @Input() errorMessage= "This field is required";
  @Input() hint: string;

  dummyForm: FormGroup;
  constructor(private fb: FormBuilder) {
    console.log("logging passed values");
    console.log(this.FormControlName);
  }

  ngOnInit(): void {
  }

}
