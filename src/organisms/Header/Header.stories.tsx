import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { Button } from '../../atoms/Button/Button'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    brand: 'Acme',
    navItems: [
      { label: 'Dashboard', href: '#', active: true },
      { label: 'Projects', href: '#' },
      { label: 'Reports', href: '#' },
      { label: 'Settings', href: '#' }
    ],
    actions: (
      <>
        <Button size="sm" variant="ghost">
          Sign in
        </Button>
        <Avatar name="Ada Lovelace" size="sm" />
      </>
    )
  },
  decorators: [
    (Story) => (
      <div style={{ width: '64rem' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sticky: Story = {
  args: { sticky: true }
}
