import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outline', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    disabled: false,
    variant: 'outline',
  },
}
export const Link: Story = {
  args: {
    children: 'Button that looks like a link',
    disabled: false,
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    href: 'https://google.com',
    rel: 'noopener noreferrer',
    target: '_blank',
    variant: 'primary',
  },
}
