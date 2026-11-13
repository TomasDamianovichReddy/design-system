import { cx } from '../../utils/cx'
import { Icon } from '../../atoms/Icon/Icon'
import type { EmptyStateProps } from './EmptyState.types'
import './EmptyState.scss'

export type { EmptyStateProps } from './EmptyState.types'

/**
 * Placeholder for empty lists, searches and tables.
 */
export function EmptyState({
  icon = 'search',
  title,
  description,
  action,
  size = 'md',
  className,
  ...rest
}: EmptyStateProps) {
  return (
    <div {...rest} className={cx('ds-empty', `ds-empty--${size}`, className)}>
      <span className="ds-empty__icon" aria-hidden="true">
        <Icon name={icon} size={size === 'sm' ? 20 : 28} />
      </span>
      <p className="ds-empty__title">{title}</p>
      {description && <p className="ds-empty__desc">{description}</p>}
      {action && <div className="ds-empty__action">{action}</div>}
    </div>
  )
}
