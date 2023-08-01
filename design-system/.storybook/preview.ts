import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { withThemeByClassName } from '@storybook/addon-styling';

/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import '!style-loader!css-loader!../src/styles.scss';

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
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
