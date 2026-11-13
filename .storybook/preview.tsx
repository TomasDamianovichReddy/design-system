import type { Preview } from '@storybook/react-vite'
import { createElement } from 'react'
import '../src/styles/global.scss'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        order: ['Introduction', 'Foundations', 'Atoms', 'Molecules', 'Organisms']
      }
    }
  },
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' }
        ],
        dynamicTitle: true
      }
    }
  },
  initialGlobals: {
    theme: 'light'
  },
  decorators: [
    (Story, context) =>
      createElement(
        'div',
        {
          'data-theme': context.globals.theme as string,
          style: {
            padding: '2rem',
            minHeight: '12rem',
            background: 'var(--ds-color-bg)',
            color: 'var(--ds-color-text)',
            fontFamily: 'var(--ds-font-sans)'
          }
        },
        createElement(Story)
      )
  ]
}

export default preview
