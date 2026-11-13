import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from './Text'

const meta = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'small', 'strong', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] },
    weight: { control: 'inline-radio', options: ['regular', 'medium', 'semibold', 'bold'] },
    tone: {
      control: 'select',
      options: ['default', 'muted', 'subtle', 'brand', 'success', 'danger']
    },
    align: { control: 'inline-radio', options: ['left', 'center', 'right'] }
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    as: 'p',
    size: 'md',
    weight: 'regular',
    tone: 'default'
  }
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Paragraph: Story = {}

export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text as="h1" size="3xl" weight="bold">
        Heading one
      </Text>
      <Text as="h2" size="2xl" weight="semibold">
        Heading two
      </Text>
      <Text as="h3" size="xl" weight="semibold">
        Heading three
      </Text>
      <Text tone="muted">Muted supporting copy for the section above.</Text>
    </div>
  )
}

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
      <Text tone="default">Default tone</Text>
      <Text tone="muted">Muted tone</Text>
      <Text tone="subtle">Subtle tone</Text>
      <Text tone="brand">Brand tone</Text>
      <Text tone="success">Success tone</Text>
      <Text tone="danger">Danger tone</Text>
    </div>
  )
}
