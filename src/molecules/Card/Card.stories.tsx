import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '../../atoms/Badge/Badge'
import { Button } from '../../atoms/Button/Button'
import { Text } from '../../atoms/Text/Text'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['elevated', 'outline', 'flat'] },
    padding: { control: 'inline-radio', options: ['none', 'sm', 'md', 'lg'] }
  },
  args: { variant: 'outline', padding: 'md' },
  decorators: [
    (Story) => (
      <div style={{ width: '20rem' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    header: 'Design tokens',
    children: <Text tone="muted">A single source of truth for color, type and spacing.</Text>,
    footer: (
      <>
        <Button size="sm">Open</Button>
        <Button size="sm" variant="ghost">
          Dismiss
        </Button>
      </>
    )
  }
}

export const WithMedia: Story = {
  args: {
    header: 'Release 0.1.0',
    media: (
      <div
        style={{
          height: '8rem',
          background: 'linear-gradient(135deg, var(--ds-brand-400), var(--ds-brand-700))'
        }}
      />
    ),
    children: (
      <>
        <Badge tone="success" dot>
          Published
        </Badge>
        <Text tone="muted">The first public version of the design system.</Text>
      </>
    )
  }
}

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    header: 'Elevated card',
    children: <Text tone="muted">Uses a soft shadow to lift off the page.</Text>
  }
}
