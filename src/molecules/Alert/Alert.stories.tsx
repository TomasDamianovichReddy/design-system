import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'

const meta = {
  title: 'Molecules/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: 'inline-radio',
      options: ['neutral', 'brand', 'success', 'warning', 'danger', 'info']
    }
  },
  args: {
    tone: 'info',
    title: 'Heads up',
    children: 'Your trial ends in 3 days.'
  }
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '28rem' }}>
      <Alert tone="info" title="Info">
        A new version is available.
      </Alert>
      <Alert tone="success" title="Success">
        Your changes were saved.
      </Alert>
      <Alert tone="warning" title="Warning">
        Your storage is almost full.
      </Alert>
      <Alert tone="danger" title="Error">
        We could not process the payment.
      </Alert>
    </div>
  )
}

export const Dismissible: Story = {
  render: (args) => (
    <div style={{ width: '28rem' }}>
      <Alert {...args} onDismiss={() => alert('dismissed')} />
    </div>
  )
}
