import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] }
  },
  args: { placeholder: 'you@example.com', size: 'md' }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Invalid: Story = {
  args: { invalid: true, defaultValue: 'not-an-email' }
}

export const Disabled: Story = {
  args: { disabled: true, value: 'Read only value', readOnly: true }
}
