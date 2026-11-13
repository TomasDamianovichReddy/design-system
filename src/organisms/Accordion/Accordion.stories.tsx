import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Organisms/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['bordered', 'separated'] }
  },
  args: {
    variant: 'bordered',
    defaultOpenIds: ['shipping'],
    items: [
      {
        id: 'shipping',
        title: 'How long does shipping take?',
        content: 'Standard shipping takes 3–5 business days. Express orders arrive next day.'
      },
      {
        id: 'returns',
        title: 'What is your return policy?',
        content: 'You can return any item within 30 days of delivery for a full refund.'
      },
      {
        id: 'support',
        title: 'How do I contact support?',
        content: 'Email support@example.com or use the live chat in the bottom-right corner.'
      }
    ]
  },
  decorators: [
    (Story) => (
      <div style={{ width: '36rem' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Multiple: Story = {
  args: { multiple: true }
}

export const Separated: Story = {
  args: { variant: 'separated' }
}
