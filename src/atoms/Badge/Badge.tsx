import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import type { BadgeProps } from './Badge.types'
import './Badge.scss'

export type { BadgeProps, BadgeVariant } from './Badge.types'

/**
 * Compact status label.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { tone = 'neutral', variant = 'soft', size = 'md', dot = false, className, children, ...rest },
  ref
) {
  return (
    <span
      {...rest}
      ref={ref}
      className={cx(
        'ds-badge',
        `ds-badge--${tone}`,
        `ds-badge--${variant}`,
        `ds-badge--${size}`,
        className
      )}
    >
      {dot && <span className="ds-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  )
})
