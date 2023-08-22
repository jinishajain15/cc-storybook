import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { withThemeByClassName } from '@storybook/addon-styling';
import trushield from './TrushieldTheme';

import '!style-loader!css-loader!@fontsource/roboto/300.css';
import '!style-loader!css-loader!@fontsource/roboto/400.css';
import '!style-loader!css-loader!@fontsource/roboto/500.css';
import '!style-loader!css-loader!@fontsource/roboto/700.css';
import '!style-loader!css-loader!@fontsource/material-icons';

import '!style-loader!css-loader!../src/assets/css/tailwind.css';


setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Introduction", "Getting Started", "*"]
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: trushield,
    },
  },

  decorators: [
    // Adds theme switching support.
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;

