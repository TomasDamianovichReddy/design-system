import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio } from './Radio'

const meta = {
  title: 'Atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
  args: { label: 'Standard shipping', name: 'shipping' }
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Radio name="plan" label="Starter" description="For individuals" defaultChecked />
      <Radio name="plan" label="Team" description="Up to 10 seats" />
      <Radio name="plan" label="Enterprise" description="Unlimited seats" />
    </div>
  )
}
