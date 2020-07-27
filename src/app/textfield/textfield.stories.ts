import { TextfieldComponent } from './textfield.component'
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AttributesStatesDefault, withPseudo } from "@ergosign/storybook-addon-pseudo-states-angular";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
export default {
    title : 'Input field',
    // decorators: [withPseudo],
    decorators: [ withPseudo,
        moduleMetadata({
          declarations: [ TextfieldComponent ],
          imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
        }),
    ],
    parameters: {
        withPseudo: {
            selector: 'input',
            attributes: [...AttributesStatesDefault]
        }
    }
};

export const defaultState = () => ({
    component: TextfieldComponent,
    props: {
        label: 'First Name',
        placeholder: 'e.g Rahul'
    } 
});