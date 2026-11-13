import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import { Icon } from '../Icon/Icon'
import type { CheckboxProps } from './Checkbox.types'
import './Checkbox.scss'

export type { CheckboxProps } from './Checkbox.types'

/**
 * Checkbox built on a native input, so keyboard and form behavior stay native.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, description, size = 'md', className, ...rest },
  ref
) {
  return (
    <label className={cx('ds-check', `ds-check--${size}`, className)}>
      <input {...rest} ref={ref} type="checkbox" className="ds-check__input" />
      <span className="ds-check__box" aria-hidden="true">
        <Icon name="check" size={12} className="ds-check__tick" />
      </span>
      {(label || description) && (
        <span className="ds-check__text">
          {label && <span className="ds-check__label">{label}</span>}
          {description && <span className="ds-check__desc">{description}</span>}
        </span>
      )}
    </label>
  )
})
