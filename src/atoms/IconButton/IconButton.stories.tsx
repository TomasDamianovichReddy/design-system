import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon } from '../Icon/Icon'
import { IconButton } from './IconButton'

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['solid', 'outline', 'ghost'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] }
  },
  args: {
    label: 'Search',
    variant: 'outline',
    size: 'md',
    children: <Icon name="search" />
  }
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem' }}>
      <IconButton label="Search" variant="solid">
        <Icon name="search" />
      </IconButton>
      <IconButton label="Search" variant="outline">
        <Icon name="search" />
      </IconButton>
      <IconButton label="Search" variant="ghost">
        <Icon name="search" />
      </IconButton>
    </div>
  )
}
