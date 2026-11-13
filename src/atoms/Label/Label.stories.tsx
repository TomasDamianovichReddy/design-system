import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './Label'

const meta = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
  args: { children: 'Email address' }
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Required: Story = {
  args: { required: true, htmlFor: 'email' }
}

export const Optional: Story = {
  args: { optional: true }
}
