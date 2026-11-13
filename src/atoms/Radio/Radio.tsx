import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import type { RadioProps } from './Radio.types'
import './Radio.scss'

export type { RadioProps } from './Radio.types'

/**
 * Radio input. Group several with the same `name`.
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, description, size = 'md', className, ...rest },
  ref
) {
  return (
    <label className={cx('ds-radio', `ds-radio--${size}`, className)}>
      <input {...rest} ref={ref} type="radio" className="ds-radio__input" />
      <span className="ds-radio__box" aria-hidden="true" />
      {(label || description) && (
        <span className="ds-radio__text">
          {label && <span className="ds-radio__label">{label}</span>}
          {description && <span className="ds-radio__desc">{description}</span>}
        </span>
      )}
    </label>
  )
})
