import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../../atoms/Button/Button'
import { Tooltip } from './Tooltip'

const meta = {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'inline-radio', options: ['top', 'bottom', 'left', 'right'] }
  },
  args: {
    content: 'Copy to clipboard',
    placement: 'top',
    children: <Button variant="secondary">Hover me</Button>
  }
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Tooltip content="Top" placement="top">
        <Button variant="secondary" size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Bottom" placement="bottom">
        <Button variant="secondary" size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left" placement="left">
        <Button variant="secondary" size="sm">Left</Button>
      </Tooltip>
      <Tooltip content="Right" placement="right">
        <Button variant="secondary" size="sm">Right</Button>
      </Tooltip>
    </div>
  )
}
