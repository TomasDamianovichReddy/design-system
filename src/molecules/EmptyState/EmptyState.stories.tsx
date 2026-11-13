import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../../atoms/Button/Button'
import { EmptyState } from './EmptyState'

const meta = {
  title: 'Molecules/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md'] }
  },
  args: {
    title: 'No results found',
    description: 'Try a different search term or clear the filters.',
    action: <Button size="sm">Clear filters</Button>
  }
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: { size: 'sm', description: undefined, action: undefined }
}

export const Inbox: Story = {
  args: {
    icon: 'mail',
    title: 'Your inbox is empty',
    description: 'New messages will show up here.',
    action: undefined
  }
}
