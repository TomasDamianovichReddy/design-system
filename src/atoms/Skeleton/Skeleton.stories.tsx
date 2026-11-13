import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['text', 'rect', 'circle'] }
  },
  args: { variant: 'text' }
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '18rem' }}>
      <Skeleton {...args} />
      <Skeleton {...args} width="80%" />
      <Skeleton {...args} width="60%" />
    </div>
  )
}

export const CardPlaceholder: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', width: '20rem' }}>
      <Skeleton variant="circle" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        <Skeleton />
        <Skeleton width="70%" />
      </div>
    </div>
  )
}

export const Rectangle: Story = {
  render: () => <Skeleton variant="rect" width="20rem" height="8rem" />
}
