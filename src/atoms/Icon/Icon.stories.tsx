import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon } from './Icon'
import { icons, type IconName } from './icons'

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: { name: 'search', size: 24 }
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {}

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(7rem, 1fr))',
        gap: '1rem'
      }}
    >
      {(Object.keys(icons) as IconName[]).map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem',
            fontSize: '0.75rem',
            color: 'var(--ds-color-text-muted)'
          }}
        >
          <Icon name={name} size={24} />
          <code>{name}</code>
        </div>
      ))}
    </div>
  )
}
