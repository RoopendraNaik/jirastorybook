import { UiButtonComponent } from "./ui-button.component";
import { storiesOf, moduleMetadata } from '@storybook/angular';
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

storiesOf('Button', module)
    //.addDecorator(withPseudo)
    .addDecorator(
        moduleMetadata({
            declarations: [UiButtonComponent],
            entryComponents: [UiButtonComponent],
        })
    )
    .add('default', () => {
        return {
            template: `<app-ui-button text="Button1" state="default"></app-ui-button>`,
        }
    }
    )
    .add('hover', () => {
        return {
            template: `<app-ui-button text="Button2" state="hover"></app-ui-button>`,
        }    
    })
    .add('focus', () => {
        return {
            template: `<app-ui-button text="Button3" state="focus"></app-ui-button>`,
        }    
    })
    .add('disabled', () => {
        return {
            template: `<app-ui-button text="Button4" state="disabled"></app-ui-button>`,
        }
    })