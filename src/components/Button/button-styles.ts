import {css} from 'lit-element';

export const styles = css`
  :host {
    all: unset;
  }

  :host {
    --_tp-button-background-color: var(--tp-color-primary-button);
    --_tp-button-color: #fff;

    --_tp-button-background-color-secondary: var(--tp-color-secondary-button);
    --_tp-button-color-secondary: #fff;

    --_tp-outline-color: #2d62b8;

    --padding-block-small: 0.45em;
    --padding-inline-small: 0.95em;

    --padding-block-medium: 0.5em;
    --padding-inline-medium: 1.5em;

    --padding-inline-large: 3em;

    --gap-small: 0.75em;
    --gap-medium: 0.875em;
    --gap-small: 1em;

    --font-default: 1.45em;
    --font-large: 1.5em;

    --line-height-default: 1.15;
    --line-height-large: 1.25;

    --button-gap: var(--gap-medium);
    --button-padding-inline: var(--padding-inline-medium);
    --button-padding-block: var(--padding-block-medium);
    --button-font-size: var(--font-default);
    --button-line-height: var(--line-height-default);

  }

  button {
    all: unset;
  }

  button {
    user-select: none;
    appearance: none;
    display: inline-flex;
    border: 0;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    font-size: var(--button-font-size);
    font-weight: 600;
    line-height: var(--button-line-height);
    gap: var(--button-gap);
    align-items: center;
    border-radius: clamp(6px,.5cqi,14px);
    padding-block: var(--button-padding-block);
    padding-inline: var(--button-padding-inline);
    background-color: var(--_tp-button-background-color);
    cursor: pointer;
    color: var(--_tp-button-color);
    fill: var(--_tp-button-color);
  }

  :host :focus-visible {
    outline: 2px solid var(--_tp-outline-color);
    outline-offset: 2px;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }

  :host([variant='primary']) :hover {
    --_tp-button-background-color: hsl(var(--primary-hue) var(--primary-saturation) calc(var(--primary-lightness) / 1.5));
  }

  :host([variant='secondary']) {
    color: var(--_tp-button-color);
    --_tp-button-background-color: var(--tp-button-background-color, var(--tp-color-secondary-button));
  }

  :host([variant='secondary']) :hover {
    --_tp-button-background-color: hsl(var(--secondary-hue) var(--secondary-saturation)calc(var(--secondary-lightness) / 1.5));
  }

  :host([variant='control']) {
    color: #fff;
    --_tp-button-background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(2px);
    border: 2px solid #fff;
    text-shadow: 0 0 3px rgba(0,0,0,0.75);
    filter: drop-shadow(0 0 4px rgba(0,0,0,.75));
    display: inline-flex;
    border-radius: clamp(6px,.5cqi,14px);
  }

  :host([variant='control']) :hover {
    /* --_tp-button-background-color: var(--tp-button-background-color); */
    --_tp-button-background-color: hsl(var(--primary-hue) var(--primary-saturation) var(--primary-lightness));
  }  

  :host([variant='disabled']) {
    --_tp-button-background-color: #dfdfdf;
    color: #404559;
    cursor: not-allowed;
  }

  :host([variant='disabled']) :hover {
    cursor: not-allowed;
  }

  :host([variant='danger']) {
    --_tp-button-background-color: #DA362B;
  }

  :host([variant='success']) {
    --_tp-button-background-color: #2BBB53;
  }

  :host([visualType='outlined']) button {
    padding-block: calc(var(--button-padding-block) - 2px);
    padding-inline: calc(var(--button-padding-inline) - 2px);
    background-color: #FFFFFF;
    border: 1px solid var(--_tp-button-background-color);
    color: var(--_tp-button-background-color);
    fill: var(--_tp-button-background-color);
  }

  :host([visualType='transparent']) button {
    padding-block: calc(var(--button-padding-block) - 4px);
    padding-inline: 0;
    background-color: transparent;
    color: var(--_tp-button-background-color);
    fill: var(--_tp-button-background-color);
  }
  
  :host([visualType='transparent']) button:hover {
    border-radius: 0;
    padding-block: calc(var(--button-padding-block) - 4px);
    border-block-end: 1px solid var(--_tp-button-background-color);
  }

  :host([sizing='sm']) {
    --button-padding-inline: var(--padding-inline-small);
    --button-padding-block: var(--padding-block-small);
  }

  :host([sizing='lg']) {
    --button-padding-inline: var(--padding-inline-large);
    --button-font-size: var(--font-large);
    --button-line-height: var(--line-height-large);
  }

`;
