import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'
import { Modal } from './Modal'

const meta = {
  title: 'Organisms/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] }
  },
  args: {
    open: false,
    onClose: () => undefined,
    title: 'Invite a teammate',
    size: 'md'
  },
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Send invite</Button>
            </>
          }
        >
          <p style={{ marginTop: 0 }}>
            They will receive an email with a link to join your workspace.
          </p>
          <Input placeholder="teammate@example.com" aria-label="Email address" />
        </Modal>
      </>
    )
  }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Large: Story = {
  args: { size: 'lg' }
}
