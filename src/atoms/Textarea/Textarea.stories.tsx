import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from './Textarea'

const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: { placeholder: 'Tell us a bit about your project…', rows: 4 }
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Invalid: Story = {
  args: { invalid: true, defaultValue: 'Too short' }
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'Disabled textarea' }
}
