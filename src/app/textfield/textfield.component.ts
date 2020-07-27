import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {

  @Input() placeholder= "e.g placeholder";
  @Input() label= "label";

  constructor() { }

  ngOnInit(): void {
  }

}
