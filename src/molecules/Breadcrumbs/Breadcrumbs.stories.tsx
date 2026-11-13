import type { Meta, StoryObj } from '@storybook/react-vite'
import { Breadcrumbs } from './Breadcrumbs'

const meta = {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Components', href: '#' },
      { label: 'Breadcrumbs' }
    ]
  }
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomSeparator: Story = {
  args: {
    separator: '/',
    items: [
      { label: 'Docs', href: '#' },
      { label: 'Atoms', href: '#' },
      { label: 'Button' }
    ]
  }
}
