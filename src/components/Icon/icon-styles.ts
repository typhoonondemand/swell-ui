import {css} from 'lit-element';

export const styles = css`

    :host {
        all: unset;
    }

    :host {
        display: flex;
        width: 2em;
        height: 2em;
    }

    :host svg {
        width: 100%;
        height: 100%;
    }

    :host([size='xs']) {
        width: 0.875em;
        height: 0.875em;
    }

    :host([size='sm']) {
        width: 1.5em;
        height: 1.5em;
    }

    :host([size='md']) {
        width: 2em;
        height: 2em;
    }

    :host([size='lg']) {
        width: 3em;
        height: 3em;
    }


`;