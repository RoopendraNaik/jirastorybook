import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {

  @Input() placeHolder= "e.g placeholder";
  @Input() Label= "label";
  @Input() errorMessage= "This fiels is required"

  constructor() { }

  ngOnInit(): void {
  }

}
