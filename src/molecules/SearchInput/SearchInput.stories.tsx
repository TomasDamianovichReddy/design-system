import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchInput } from './SearchInput'

const meta = {
  title: 'Molecules/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] }
  },
  args: { placeholder: 'Search components…', size: 'md' }
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '20rem' }}>
      <SearchInput {...args} />
    </div>
  )
}

export const WithClear: Story = {
  render: (args) => {
    const [value, setValue] = useState('button')

    return (
      <div style={{ width: '20rem' }}>
        <SearchInput
          {...args}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onClear={() => setValue('')}
        />
      </div>
    )
  }
}
