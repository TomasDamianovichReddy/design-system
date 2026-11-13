import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import type { LabelProps } from './Label.types'
import './Label.scss'

export type { LabelProps } from './Label.types'

/**
 * Form label. Pair with `htmlFor` and the control's `id`.
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { required = false, optional = false, size = 'md', className, children, ...rest },
  ref
) {
  return (
    <label
      {...rest}
      ref={ref}
      className={cx('ds-label', `ds-label--${size}`, className)}
    >
      {children}
      {required && (
        <span className="ds-label__required" aria-hidden="true">
          *
        </span>
      )}
      {optional && <span className="ds-label__optional">(optional)</span>}
    </label>
  )
})
