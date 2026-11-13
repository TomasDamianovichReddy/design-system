import type { Meta, StoryObj } from '@storybook/react-vite'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: {
    brand: 'Acme Design System',
    description: 'Accessible React components built with TypeScript and Sass.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Components', href: '#' },
          { label: 'Tokens', href: '#' },
          { label: 'Changelog', href: '#' }
        ]
      },
      {
        title: 'Resources',
        links: [
          { label: 'Documentation', href: '#' },
          { label: 'Storybook', href: '#' },
          { label: 'GitHub', href: '#' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '#' },
          { label: 'Terms', href: '#' },
          { label: 'License', href: '#' }
        ]
      }
    ],
    bottom: '© 2026 Acme. All rights reserved.'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '64rem' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
