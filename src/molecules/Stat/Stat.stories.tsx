import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stat } from './Stat'

const meta = {
  title: 'Molecules/Stat',
  component: Stat,
  tags: ['autodocs'],
  argTypes: {
    trend: { control: 'inline-radio', options: ['up', 'down', 'neutral'] }
  },
  args: {
    label: 'Monthly revenue',
    value: '$48,120',
    delta: '+12.5%',
    trend: 'up',
    hint: 'vs. last month'
  }
} satisfies Meta<typeof Stat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Grid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(10rem, 1fr))', gap: '2rem' }}>
      <Stat label="Active users" value="12,480" delta="+8.2%" trend="up" hint="vs. last week" />
      <Stat label="Churn" value="2.1%" delta="-0.4%" trend="down" invertTrend hint="vs. last week" />
      <Stat label="Open tickets" value="34" delta="0%" trend="neutral" hint="unchanged" />
    </div>
  )
}
