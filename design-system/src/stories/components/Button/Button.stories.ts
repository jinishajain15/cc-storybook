import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../../../app/button/button.component';
import { moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule],
    })
  ],
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
    color: {
      description: 'Theme color palette for the button.',
      options: [null, 'primary', 'accent', 'warn'],
      control: { type: 'select' }
    },
    mode: {
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    }
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Primary',
    mode: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    mode: 'secondary',
  },
};
