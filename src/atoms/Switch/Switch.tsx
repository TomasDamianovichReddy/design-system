import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import type { SwitchProps } from './Switch.types'
import './Switch.scss'

export type { SwitchProps } from './Switch.types'

/**
 * On/off switch. Backed by a checkbox with `role="switch"`.
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { label, size = 'md', className, ...rest },
  ref
) {
  return (
    <label className={cx('ds-switch', `ds-switch--${size}`, className)}>
      <input {...rest} ref={ref} type="checkbox" role="switch" className="ds-switch__input" />
      <span className="ds-switch__track" aria-hidden="true">
        <span className="ds-switch__thumb" />
      </span>
      {label && <span className="ds-switch__label">{label}</span>}
    </label>
  )
})
