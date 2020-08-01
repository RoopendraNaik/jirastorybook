import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { boolean, number, text, withKnobs, button } from '@storybook/addon-knobs';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {
  // @Input() state: string;

  @Input() text: string;
  @Input() bgcolor: string;
  @Input() state= "default";
  // @Input() fun = () => {
  //   console.log("clicked");
  // }
  // @Output() clickFn = new EventEmitter<MouseEvent>();

  disabled = false;
  constructor() { }

  ngOnInit(): void {
    
    switch (this.state) {
      case "default":
        break;

      case "hover":
        document.getElementById('InvsionBtn').classList.add("hover");
        break;

      case "focus":
        document.getElementById('InvsionBtn').classList.add("focus");
        break;

      case "disabled":
        this.disabled = true;
        document.getElementById('InvsionBtn').classList.add("disabled");
        break;

      default:
        break;
    }
  }

  ngOnChanges(){    
    document.getElementById('InvsionBtn').style.backgroundColor = this.bgcolor;
    console.log('---inside ngOnchanges');
    console.log(this.bgcolor);
  }
  // clickHandler(event: MouseEvent) {
  //   console.log("i am in ");
    
  //   if (!this.disabled) {
  //     this.clickFn.emit(event);
  //     this.fun;
  //   }
  // }
}
