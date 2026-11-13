import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import { Icon } from '../../atoms/Icon/Icon'
import { IconButton } from '../../atoms/IconButton/IconButton'
import type { SearchInputProps } from './SearchInput.types'
import './SearchInput.scss'

export type { SearchInputProps } from './SearchInput.types'

/**
 * Search field with icon and optional clear action.
 */
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
  { size = 'md', onClear, clearLabel = 'Clear search', className, value, ...rest },
  ref
) {
  const showClear = Boolean(onClear) && value !== undefined && String(value).length > 0

  return (
    <span className={cx('ds-search', `ds-search--${size}`, className)}>
      <Icon name="search" size={16} className="ds-search__icon" />
      <input
        {...rest}
        ref={ref}
        type="search"
        value={value}
        className="ds-search__input"
      />
      {showClear && (
        <IconButton
          label={clearLabel}
          size="sm"
          variant="ghost"
          className="ds-search__clear"
          onClick={onClear}
        >
          <Icon name="x" size={14} />
        </IconButton>
      )}
    </span>
  )
})
