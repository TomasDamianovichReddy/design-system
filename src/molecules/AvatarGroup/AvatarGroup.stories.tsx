import type { Meta, StoryObj } from '@storybook/react-vite'
import { AvatarGroup } from './AvatarGroup'

const meta = {
  title: 'Molecules/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  args: {
    max: 4,
    avatars: [
      { name: 'Ada Lovelace' },
      { name: 'Grace Hopper' },
      { name: 'Alan Turing' },
      { name: 'Katherine Johnson' },
      { name: 'Linus Torvalds' },
      { name: 'Margaret Hamilton' }
    ]
  }
} satisfies Meta<typeof AvatarGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: { size: 'sm' }
}

export const AllVisible: Story = {
  args: { max: 6 }
}
