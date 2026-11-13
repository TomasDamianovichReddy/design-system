import type { Meta, StoryObj } from '@storybook/react-vite'
import { Divider } from './Divider'

const meta = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
    spacing: { control: 'inline-radio', options: ['sm', 'md', 'lg'] }
  },
  args: { orientation: 'horizontal', spacing: 'md' }
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: (args) => (
    <div style={{ width: '24rem' }}>
      <p style={{ margin: 0 }}>Content above</p>
      <Divider {...args} />
      <p style={{ margin: 0 }}>Content below</p>
    </div>
  )
}

export const Labelled: Story = {
  render: (args) => (
    <div style={{ width: '24rem' }}>
      <Divider {...args} label="or" />
    </div>
  )
}

export const Vertical: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', height: '3rem' }}>
      <span>Edit</span>
      <Divider {...args} orientation="vertical" />
      <span>Duplicate</span>
      <Divider {...args} orientation="vertical" />
      <span>Delete</span>
    </div>
  )
}
