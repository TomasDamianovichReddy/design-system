import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import type { InputProps } from './Input.types'
import './Input.scss'

export type { InputProps } from './Input.types'

/**
 * Native text input. Use `id` + `Label`/`FormField` for accessible forms.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = 'md', invalid = false, className, type = 'text', ...rest },
  ref
) {
  return (
    <input
      {...rest}
      ref={ref}
      type={type}
      aria-invalid={invalid || undefined}
      className={cx('ds-input', `ds-input--${size}`, invalid && 'ds-input--invalid', className)}
    />
  )
})
