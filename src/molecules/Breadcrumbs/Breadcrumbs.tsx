import { cx } from '../../utils/cx'
import { Icon } from '../../atoms/Icon/Icon'
import type { BreadcrumbsProps } from './Breadcrumbs.types'
import './Breadcrumbs.scss'

export type { BreadcrumbItem, BreadcrumbsProps } from './Breadcrumbs.types'

/**
 * Hierarchical navigation trail. The last item is marked `aria-current="page"`.
 */
export function Breadcrumbs({
  items,
  ariaLabel = 'Breadcrumb',
  separator,
  className,
  ...rest
}: BreadcrumbsProps) {
  return (
    <nav {...rest} aria-label={ariaLabel} className={cx('ds-breadcrumbs', className)}>
      <ol className="ds-breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={index} className="ds-breadcrumbs__item">
              {isLast || !item.href ? (
                <span
                  className="ds-breadcrumbs__current"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <a className="ds-breadcrumbs__link" href={item.href} onClick={item.onClick}>
                  {item.label}
                </a>
              )}
              {!isLast && (
                <span className="ds-breadcrumbs__sep" aria-hidden="true">
                  {separator ?? <Icon name="chevron-right" size={14} />}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
