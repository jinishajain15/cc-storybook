import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../../../app/button/button.component';
import { moduleMetadata } from '@storybook/angular';
import { MaterialModule } from '../../../shared/material.module';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MaterialModule],
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
      control: 'select'
    },
    variant: {
      options: ['primary', 'secondary', 'icon'],
      control: 'radio'
    },
    showLeftIcon: {
      control: 'boolean'
    },
    showRightIcon: {
      control: 'boolean'
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Button: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
};

export const ButtonWithIcon: Story = {
  name: 'IconButton',
  args: {
    ...Button.args,
    showLeftIcon: true,
  },
};

export const OnlyIcon: Story = {
  args: {
    label: 'Icon',
    variant: 'icon',
  },
};

