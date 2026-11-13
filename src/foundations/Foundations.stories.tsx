import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Foundations/Overview',
  tags: ['autodocs']
} satisfies Meta

export default meta
type Story = StoryObj

const colors = [
  ['Brand', '--ds-brand-600', '#4f46e5'],
  ['Brand soft', '--ds-brand-50', '#eef2ff'],
  ['Success', '--ds-success-500', '#10b981'],
  ['Warning', '--ds-warning-500', '#f59e0b'],
  ['Danger', '--ds-danger-500', '#ef4444'],
  ['Info', '--ds-info-500', '#3b82f6'],
  ['Text', '--ds-color-text', '#0f172a'],
  ['Text muted', '--ds-color-text-muted', '#526079'],
  ['Border', '--ds-color-border', '#e2e8f0'],
  ['Background', '--ds-color-bg', '#ffffff'],
  ['Background subtle', '--ds-color-bg-subtle', '#f8fafc']
] as const

const typeScale = [
  ['--ds-text-3xl', '30px'],
  ['--ds-text-2xl', '24px'],
  ['--ds-text-xl', '20px'],
  ['--ds-text-lg', '18px'],
  ['--ds-text-md', '16px'],
  ['--ds-text-sm', '14px'],
  ['--ds-text-xs', '12px']
] as const

const spacing = [
  '--ds-space-1',
  '--ds-space-2',
  '--ds-space-3',
  '--ds-space-4',
  '--ds-space-5',
  '--ds-space-6',
  '--ds-space-8',
  '--ds-space-10',
  '--ds-space-12'
] as const

export const Colors: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(11rem, 1fr))',
        gap: '1rem',
        width: '52rem'
      }}
    >
      {colors.map(([label, token, fallback]) => (
        <div key={token}>
          <div
            style={{
              height: '4rem',
              background: `var(${token}, ${fallback})`,
              border: '1px solid var(--ds-color-border)',
              borderRadius: 'var(--ds-radius-md)'
            }}
          />
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.8125rem', fontWeight: 600 }}>{label}</p>
          <code style={{ fontSize: '0.75rem', color: 'var(--ds-color-text-muted)' }}>{token}</code>
        </div>
      ))}
    </div>
  )
}

export const Typography: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '36rem' }}>
      {typeScale.map(([token, size]) => (
        <div key={token} style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
          <span
            style={{
              fontFamily: 'var(--ds-font-sans)',
              fontSize: `var(${token})`,
              lineHeight: 1.25,
              fontWeight: token === '--ds-text-3xl' ? 700 : 400
            }}
          >
            Design systems scale
          </span>
          <code style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--ds-color-text-muted)' }}>
            {token} · {size}
          </code>
        </div>
      ))}
    </div>
  )
}

export const Spacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '36rem' }}>
      {spacing.map((token) => (
        <div key={token} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              width: `var(${token})`,
              height: '0.75rem',
              background: 'var(--ds-brand-500)',
              borderRadius: 'var(--ds-radius-xs)'
            }}
          />
          <code style={{ fontSize: '0.75rem', color: 'var(--ds-color-text-muted)' }}>
            {token} · {getComputedStyle(document.documentElement).getPropertyValue(token).trim()}
          </code>
        </div>
      ))}
    </div>
  )
}

export const Elevation: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', padding: '1rem', width: '40rem' }}>
      {['--ds-shadow-xs', '--ds-shadow-sm', '--ds-shadow-md', '--ds-shadow-lg'].map((token) => (
        <div key={token} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: '7rem',
              height: '4rem',
              background: 'var(--ds-color-surface)',
              borderRadius: 'var(--ds-radius-md)',
              boxShadow: `var(${token})`
            }}
          />
          <code style={{ fontSize: '0.7rem', color: 'var(--ds-color-text-muted)' }}>{token}</code>
        </div>
      ))}
    </div>
  )
}
