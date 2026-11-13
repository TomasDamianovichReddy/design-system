import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import { Spinner } from '../Spinner/Spinner'
import type { ButtonProps } from './Button.types'
import './Button.scss'

export type { ButtonProps, ButtonVariant } from './Button.types'

/**
 * Primary action control. Renders a native `<button>` with `type="button"` by default.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    loading = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    className,
    children,
    disabled,
    type = 'button',
    ...rest
  },
  ref
) {
  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cx(
        'ds-btn',
        `ds-btn--${variant}`,
        `ds-btn--${size}`,
        fullWidth && 'ds-btn--block',
        className
      )}
    >
      {loading ? (
        <Spinner size="sm" className="ds-btn__spinner" label="Working" />
      ) : (
        leftIcon && (
          <span className="ds-btn__icon" aria-hidden="true">
            {leftIcon}
          </span>
        )
      )}
      <span className="ds-btn__label">{children}</span>
      {rightIcon && !loading && (
        <span className="ds-btn__icon" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  )
})
