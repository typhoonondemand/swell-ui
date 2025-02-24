import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Typhoon Swell',
  brandUrl: 'https://typhoonondemand.github.io/swell-ui/',
  brandImage: '/src/assets/swell-logo-new.svg',
  brandTarget: '_self',

  //
  colorPrimary: '#3dcab1',
  colorSecondary: '#24796a',

  // UI
  appBg: '#efefef',
  appContentBg: '#FFFFFF',
  appBorderColor: '#24796a',
  appBorderRadius: 4,

  // Text colors
  textColor: '#232323',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#AFB4CF',
  barSelectedColor: '#AFB4CF',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#24796a',
  inputTextColor: '#232323',
  inputBorderRadius: 4,
});
