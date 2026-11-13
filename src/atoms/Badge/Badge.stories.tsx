import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: 'inline-radio',
      options: ['neutral', 'brand', 'success', 'warning', 'danger', 'info']
    },
    variant: { control: 'inline-radio', options: ['soft', 'solid', 'outline'] },
    size: { control: 'inline-radio', options: ['sm', 'md'] }
  },
  args: { children: 'Active', tone: 'success', variant: 'soft', dot: true }
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge tone="neutral">Neutral</Badge>
      <Badge tone="brand">Brand</Badge>
      <Badge tone="success">Success</Badge>
      <Badge tone="warning">Warning</Badge>
      <Badge tone="danger">Danger</Badge>
      <Badge tone="info">Info</Badge>
    </div>
  )
}

export const Solid: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge variant="solid" tone="neutral">Neutral</Badge>
      <Badge variant="solid" tone="brand">Brand</Badge>
      <Badge variant="solid" tone="success">Success</Badge>
      <Badge variant="solid" tone="warning">Warning</Badge>
      <Badge variant="solid" tone="danger">Danger</Badge>
      <Badge variant="solid" tone="info">Info</Badge>
    </div>
  )
}
