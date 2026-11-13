import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import type { SpinnerProps } from './Spinner.types'
import './Spinner.scss'

export type { SpinnerProps } from './Spinner.types'

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(function Spinner(
  { size = 'md', label = 'Loading', className, ...rest },
  ref
) {
  return (
    <span
      {...rest}
      ref={ref}
      role="status"
      aria-label={label}
      className={cx('ds-spinner', `ds-spinner--${size}`, className)}
    >
      <span className="ds-spinner__circle" aria-hidden="true" />
    </span>
  )
})
