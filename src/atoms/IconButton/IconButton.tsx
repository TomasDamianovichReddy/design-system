import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import type { IconButtonProps } from './IconButton.types'
import './IconButton.scss'

export type { IconButtonProps, IconButtonVariant } from './IconButton.types'

/**
 * Square, icon-only button. `label` is mandatory and becomes `aria-label`.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, variant = 'ghost', size = 'md', className, children, type = 'button', ...rest },
  ref
) {
  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      aria-label={label}
      title={label}
      className={cx(
        'ds-icon-btn',
        `ds-icon-btn--${variant}`,
        `ds-icon-btn--${size}`,
        className
      )}
    >
      {children}
    </button>
  )
})
