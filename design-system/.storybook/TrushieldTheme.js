import { create } from '@storybook/theming/create';
import logo from "../src/stories/assets/trushield-logo.png";

export default create({
    base: 'light',
    fontBase: '"freight-sans-pro", sans-serif',
    brandTitle: 'Trushield Coverage Coach',
    brandUrl: 'https://quote-qa.trushieldinsurance.ca',
    brandImage: logo,
    brandTarget: 'blank',

    //
    colorPrimary: '#3A10E5',
    colorSecondary: '#585C6D',

    // UI
    appBg: '#DDE8ED',
    appContentBg: '#ffffff',
    appBorderColor: '#585C6D',
    appBorderRadius: 4,

    // Text colors
    textColor: '#58585A',
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#585C6D',
    barBg: '#ffffff',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#10162F',
    inputTextColor: '#10162F',
    inputBorderRadius: 2,
});