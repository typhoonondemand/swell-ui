import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './button-styles';

@customElement('tp-button')
export default class TyphoonButton extends LitElement {

    @property({type: String})
    buttonVariant = this.getAttribute("buttonVariant") || 'primary';

    @property({type: String})
    iconNames = this.getAttribute("iconNames") || '';

    @property({type: String})
    iconPlacement = this.getAttribute("iconPlacement") || 'end';

    @property({type: String})
    buttonText = this.getAttribute("buttonText") || 'Placeholder Text';

    @property({type: String})
    visualType = this.getAttribute("visualType") || '';

    @property({type: String})
    sizing = this.getAttribute("sizing") || '';

    @property({type: String})
    disabled = this.getAttribute("disabled") || '';

    render() {
        let iconArray = [];
        let iconMarkup;
        let altIconMarkup;

        if(this.iconNames.length > 0) {
            if (this.iconNames.includes(',')) {
                iconArray = this.iconNames.split(',');
                iconMarkup = html`<tp-icon iconname=${iconArray[1].trim()} size='sm' />`;
                altIconMarkup = html`<tp-icon iconname=${iconArray[0].trim()} size='sm' />`;
            } else {
                iconArray[0] = this.iconNames;
                if(this.iconPlacement == 'start') {
                    altIconMarkup = html`<tp-icon iconname=${iconArray[0].trim()} size='sm' />`;
                } else {
                    iconMarkup = html`<tp-icon iconname=${iconArray[0].trim()} size='sm' />`;
                }
            }
        }

        return html`
            <button
                type="button"
                aria-label="button"
                variant="${ifDefined(this.buttonVariant ? this.buttonVariant : undefined)}"
                visualType="${ifDefined(this.visualType ? this.visualType : undefined)}"
                sizing="${ifDefined(this.visualType ? this.visualType : undefined)}"
                @click=${this.buttonFunction}>

                ${ altIconMarkup ?? nothing }
                <slot></slot>
                ${ iconMarkup ?? nothing }

            </button>
        `
    }

    buttonFunction() {
        console.log('you are hitting me');
    }

    static override styles = [styles];

}

declare global {
    interface HTMLElementTagNameMap {
        'tp-button': TyphoonButton
    }
}