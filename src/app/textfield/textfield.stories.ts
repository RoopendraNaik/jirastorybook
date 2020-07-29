import { TextfieldComponent } from './textfield.component'
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AttributesStatesDefault, withPseudo } from "@ergosign/storybook-addon-pseudo-states-angular";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// export default {
//     title : 'Input field',
//     decorators: [ 
//         moduleMetadata({
//           declarations: [ TextfieldComponent ],
//           imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
//         }),
//     ],
// };

// export const defaultState = () => ({
//     component: TextfieldComponent,
//     props: {
//         label: 'First Name',
//         placeholder: 'e.g Rahul'
//     } 
// });
storiesOf('text-field',module)
    .addDecorator(
        moduleMetadata({
            declarations: [TextfieldComponent],
            entryComponents: [TextfieldComponent],
            imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule]
        })
    )
    .add('Default',()=>{
        return {
            template: `<app-textfield hint="Assistive Text" label="Overline Label"></app-textfield>`
        }
    })
    .add('Focused',()=>{
        return {
            template: `<app-textfield hint="Assistive Text" label="Overline Label" floatLabelValue="always"></app-textfield>`
        }
    })    
    .add('Focused with PlaceHolder Text',()=>{
        return {
            template: `<app-textfield hint="Assistive Text" label="Overline Label" floatLabelValue="always" placeholder="e.g placeholder"></app-textfield>`
        }
    })
    .add('Focused with Input',()=>{
        return {
            template: `<app-textfield inputText="Input Text" hint="Assistive Text" label="Overline Label" floatLabelValue="always"></app-textfield>`
        }
    })
    .add('Default Error',()=>{
        return {
            template: `<app-textfield hasError="true"></app-textfield>`
        }
    })
    .add('Focused Error',()=>{
        return {
            template: `<app-textfield label="OverLine Label" floatLabelValue="always" ></app-textfield>`
        }
    })
    .add('Disabled',()=>{
        return {
            template: `<app-textfield hint="Assistive Text" isDisabled="true"></app-textfield>`
        }
    })
