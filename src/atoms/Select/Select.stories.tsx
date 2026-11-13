import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from './Select'

const meta = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] }
  },
  args: {
    placeholder: 'Choose a country',
    children: (
      <>
        <option value="ar">Argentina</option>
        <option value="br">Brazil</option>
        <option value="es">Spain</option>
        <option value="us">United States</option>
      </>
    )
  }
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Invalid: Story = {
  args: { invalid: true }
}
