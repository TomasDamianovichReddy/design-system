import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    label: 'Email me about product updates',
    description: 'No more than one email per month.'
  }
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: { defaultChecked: true, label: 'Subscribed' }
}

export const Disabled: Story = {
  args: { disabled: true, label: 'Unavailable option' }
}
