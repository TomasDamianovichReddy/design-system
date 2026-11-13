import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '../../atoms/Input/Input'
import { FormField, formFieldIds } from './FormField'

const meta = {
  title: 'Molecules/FormField',
  component: FormField,
  tags: ['autodocs'],
  args: { id: 'email', label: 'Email address', required: true }
} satisfies Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '20rem' }}>
      <FormField {...args} hint="We will never share your email.">
        <Input
          id={args.id}
          type="email"
          placeholder="you@example.com"
          aria-describedby={formFieldIds(args.id).hint}
        />
      </FormField>
    </div>
  )
}

export const WithError: Story = {
  args: { id: 'email-error', label: 'Email address', error: 'Enter a valid email address.' },
  render: (args) => (
    <div style={{ width: '20rem' }}>
      <FormField {...args}>
        <Input
          id={args.id}
          type="email"
          invalid
          defaultValue="not-an-email"
          aria-describedby={formFieldIds(args.id).error}
        />
      </FormField>
    </div>
  )
}
