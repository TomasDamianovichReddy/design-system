import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from './Switch'

const meta = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] }
  },
  args: { label: 'Enable notifications' }
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const On: Story = {
  args: { defaultChecked: true, label: 'Notifications enabled' }
}

export const Disabled: Story = {
  args: { disabled: true, label: 'Locked by admin' }
}
