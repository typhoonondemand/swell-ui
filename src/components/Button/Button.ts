import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './button-styles';

/**
 * Buttons are used to trigger an action, commit changes, or complete a step.
 * 
 * @tag tp-button
 * @since 1.0.0
 * 
 * 
 */

@customElement('tp-button')
export default class TyphoonButton extends LitElement {

    /**
     * Controls main visual rendering features of button. Default is primary.
     */
    @property({ reflect: true })
    variant = this.getAttribute('variant') || 'primary';

    /**
     * Allows component to render using only the icon as a visual element.
     */
    @property({ type: Boolean, reflect:true,attribute: 'icon-only'})
    public iconOnly?: boolean;

    /**
     * Accepts up to two values, named icons as string values, to be rendered before or after default content of button.
     */
    @property({type: String})
    iconNames = this.getAttribute("iconNames") || '';

    /**
     * Indicates icon placement; `start` and `end` are the two options.
     */
    @property({type: String})
    iconPlacement = this.getAttribute("iconPlacement") || 'end';

    /**
     * Text content of button. TODO: do we need this?
     */
    @property({type: String})
    buttonText = this.getAttribute("buttonText") || 'Placeholder Text';

    /**
     * Defines the visual type of the button; some options are `danger`, `success`, `information`.
     */
    @property({type: String})
    visualType = this.getAttribute("visualType") || '';

    /**
     * Defines the size of the button. Some options are `sm`, `lg`. Default is `md`.
     */
    @property({type: String})
    public sizing?: string;

    /**
     * Sets button to a disabled state. 
     */
    @property({type: String})
    disabled = this.getAttribute("disabled") || '';

    
    protected handleClick(event: MouseEvent) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        console.log('hittingme');
    }

    /**
     * Generate the button template.
     */
    protected buttonTemplate() {
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

        return html`<button
            type="button"
            aria-label="button"
            ?variant=${this.variant}
            visualType="${ifDefined(this.visualType ? this.visualType : undefined)}"
            ?sizing=${this.sizing}            
            ?icon-only=${this.iconOnly}
            @click=${this.handleClick}
        >
            ${ altIconMarkup ?? nothing }
            <slot></slot>
            ${ iconMarkup ?? nothing }
        </button>
        `
    }

    protected override render() {
        return this.buttonTemplate();
    }

    static override styles = [styles];

}

declare global {
    interface HTMLElementTagNameMap {
        'tp-button': TyphoonButton
    }
}