import type { Meta, StoryObj } from '@storybook/react-vite'
import { Link } from './Link'

const meta = {
  title: 'Atoms/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'inline-radio', options: ['brand', 'neutral'] },
    underline: { control: 'inline-radio', options: ['always', 'hover', 'none'] }
  },
  args: { children: 'Read the documentation', href: '#', tone: 'brand', underline: 'hover' }
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const External: Story = {
  args: { external: true, children: 'Open npm', href: 'https://www.npmjs.com' }
}

export const Neutral: Story = {
  args: { tone: 'neutral', children: 'Neutral link' }
}
