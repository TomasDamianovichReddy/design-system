import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '../../atoms/Badge/Badge'
import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Organisms/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    items: [
      {
        id: 'overview',
        label: 'Overview',
        content: 'A summary of the project, its status and the people involved.'
      },
      {
        id: 'activity',
        label: 'Activity',
        content: 'A chronological feed of changes made by your teammates.'
      },
      {
        id: 'settings',
        label: 'Settings',
        content: 'Rename the project, manage access or archive it.'
      }
    ]
  },
  decorators: [
    (Story) => (
      <div style={{ width: '36rem' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithBadges: Story = {
  args: {
    items: [
      {
        id: 'all',
        label: (
          <>
            All <Badge size="sm">24</Badge>
          </>
        ),
        content: 'All notifications.'
      },
      {
        id: 'unread',
        label: (
          <>
            Unread <Badge size="sm" tone="brand">6</Badge>
          </>
        ),
        content: 'Unread notifications.'
      },
      {
        id: 'archived',
        label: 'Archived',
        content: 'Archived notifications.'
      }
    ]
  }
}

export const WithDisabledTab: Story = {
  args: {
    items: [
      { id: 'one', label: 'Available', content: 'This tab can be selected.' },
      { id: 'two', label: 'Disabled', content: 'Never rendered.', disabled: true }
    ]
  }
}
