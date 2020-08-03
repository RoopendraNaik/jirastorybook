import { UiButtonComponent } from "./ui-button.component";
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { boolean, number, text, withKnobs, button,color  } from '@storybook/addon-knobs';
import { AttributesStatesDefault, withPseudo } from "@ergosign/storybook-addon-pseudo-states-angular";
// export default {
//     title : 'Button',
//     decorators: [withPseudo],
//     parameters: {
//         withPseudo: {
//             selector: 'button',
//             attributes: [...AttributesStatesDefault]
//         }
//     }
// };

// export const defaultState = () => ({
//     component: UiButtonComponent,
//     props: {
//         text: 'Button'
//     } 
// });

//   export const withKnobs = () => ({
//     component: Button,
//     props: {
//       text: text('text', 'Hello Storybook'), // The first param of the knob function has to be exactly the same as the component input.
//     },
//   });
var props;
storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(
        moduleMetadata({
            declarations: [UiButtonComponent],
            entryComponents: [UiButtonComponent],
        })
    )
    // .add('With Knobs', () => {

    //     return {
    //         template: `<app-ui-button [text]="text" [bgcolor]="color" state="default"></app-ui-button>`,
    //         props: {
    //             text: text('Button text', 'Hello Button'),
    //             color : color('Button Background Colour', 'white')
    //           }
           
    //     }
    // }
    // )
    .add('Default', () => {
        return {
            template: `<app-ui-button text="Button" state="disabled"></app-ui-button>`,
        }
    })
    .add('Hover', () => {
        return {
            template: `<app-ui-button text="Button" state="hover"></app-ui-button>`,
        }
    })
    .add('Focus', () => {
        return {
            template: `<app-ui-button text="Button" state="focus"></app-ui-button>`,
        }
    })
    .add('Disabled', () => {
        return {
            template: `<app-ui-button text="Button" state="disabled"></app-ui-button>`,
        }
    })
    .add('Knobs', () => {

        return {
            template: `<app-ui-button [text]="text" [bgcolor]="color" state="default"></app-ui-button>`,
            props: {                
                color : color('Button Background Colour', 'white'),
                text: text('Button text', 'Button Text'),
              }
           
        }
    }
    )
