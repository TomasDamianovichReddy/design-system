import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  args: {
    title: 'Workspace',
    items: [
      { label: 'Overview', icon: 'search', href: '#', active: true },
      { label: 'Projects', icon: 'check-circle', href: '#', badge: 3 },
      { label: 'Team', icon: 'user', href: '#' },
      { label: 'Messages', icon: 'mail', href: '#', badge: 12 },
      { label: 'Settings', icon: 'lock', href: '#' }
    ],
    footer: <Avatar name="Ada Lovelace" size="sm" />
  },
  decorators: [
    (Story) => (
      <div style={{ height: '28rem', display: 'flex' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Collapsed: Story = {
  args: { defaultCollapsed: true }
}
