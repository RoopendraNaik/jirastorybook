import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {
  @Input() placeholder= "";
  @Input() label= "Label";
  @Input() type = "text";
  @Input() FormControlName: FormControl;
  @Input() errorMessage= "This field is required";
  @Input() hint: string;
  @Input() floatLabelValue = "never";
  @Input() inputText = "";
  @Input() isDisabled = false;
  public form: FormGroup;

  dummyForm: FormGroup;
  constructor(private fb: FormBuilder) {
    console.log(this.FormControlName);

  }

  ngOnInit(): void {
    console.log('---inisde ngonit');
}}
