import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import { Icon } from '../Icon/Icon'
import type { SelectProps } from './Select.types'
import './Select.scss'

export type { SelectProps } from './Select.types'

/**
 * Native select with a custom chevron. Options are passed as `<option>` children.
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { size = 'md', invalid = false, placeholder, className, wrapperClassName, children, ...rest },
  ref
) {
  return (
    <span
      className={cx(
        'ds-select',
        `ds-select--${size}`,
        invalid && 'ds-select--invalid',
        wrapperClassName
      )}
    >
      <select
        {...rest}
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cx('ds-select__control', className)}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <Icon name="chevron-down" size={16} className="ds-select__chevron" />
    </span>
  )
})
