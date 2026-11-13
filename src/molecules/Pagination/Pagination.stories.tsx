import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Pagination } from './Pagination'

const meta = {
  title: 'Molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: { page: 1, pageCount: 10, siblingCount: 1, onPageChange: () => undefined }
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(args.page)

    return <Pagination {...args} page={page} onPageChange={setPage} />
  }
}

export const ManyPages: Story = {
  args: { page: 8, pageCount: 24, onPageChange: () => undefined },
  render: (args) => {
    const [page, setPage] = useState(args.page)

    return <Pagination {...args} page={page} onPageChange={setPage} />
  }
}
