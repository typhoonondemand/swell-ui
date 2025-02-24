import { LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { until } from 'lit-html/directives/until.js';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';

import {styles} from './icon-styles';

@customElement('tp-icon')
export default class TyphoonIcon extends LitElement {

    @property({type: String})
    public iconName?: string;

    @property({type: String})
    size = this.getAttribute("size");

    protected render() {
        const importedIcon = import(`../../assets/svg/system/${this.iconName}.svg?raw`)
        .then(iconModule => unsafeSVG(iconModule.default));
        return until(importedIcon, nothing);
    }

    static override styles = [styles];
}

declare global {
    interface HTMLElementTagNameMap {
        'tp-icon': TyphoonIcon
    }
}