import { cx } from '../../utils/cx'
import { Icon } from '../../atoms/Icon/Icon'
import { IconButton } from '../../atoms/IconButton/IconButton'
import type { PaginationProps, PaginationRangeItem } from './Pagination.types'
import './Pagination.scss'

export type { PaginationProps, PaginationRangeItem } from './Pagination.types'

/**
 * Builds the visible page list: always includes first/last and a window around
 * the current page, collapsing the rest into ellipses.
 */
export function getPaginationRange(
  page: number,
  pageCount: number,
  siblingCount = 1
): PaginationRangeItem[] {
  if (pageCount <= 0) return []
  const visibleCount = siblingCount * 2 + 5
  if (pageCount <= visibleCount) {
    return Array.from({ length: pageCount }, (_, index) => index + 1)
  }

  const left = Math.max(page - siblingCount, 1)
  const right = Math.min(page + siblingCount, pageCount)
  const items: PaginationRangeItem[] = [1]

  if (left > 3) {
    items.push('ellipsis')
  } else {
    for (let i = 2; i < left; i += 1) items.push(i)
  }

  for (let i = Math.max(left, 2); i <= Math.min(right, pageCount - 1); i += 1) {
    items.push(i)
  }

  if (right < pageCount - 2) {
    items.push('ellipsis')
  } else {
    for (let i = right + 1; i < pageCount; i += 1) items.push(i)
  }

  items.push(pageCount)
  return items
}

/**
 * Page navigation with previous/next controls and ellipsis collapsing.
 */
export function Pagination({
  page,
  pageCount,
  onPageChange,
  siblingCount = 1,
  ariaLabel = 'Pagination',
  className,
  ...rest
}: PaginationProps) {
  if (pageCount <= 0) return null

  const items = getPaginationRange(page, pageCount, siblingCount)

  return (
    <nav {...rest} aria-label={ariaLabel} className={cx('ds-pagination', className)}>
      <ul className="ds-pagination__list">
        <li>
          <IconButton
            label="Previous page"
            size="sm"
            variant="outline"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
          >
            <Icon name="chevron-left" size={16} />
          </IconButton>
        </li>
        {items.map((item, index) =>
          item === 'ellipsis' ? (
            <li key={`ellipsis-${index}`} aria-hidden="true" className="ds-pagination__ellipsis">
              &hellip;
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                className={cx('ds-pagination__page', item === page && 'ds-pagination__page--active')}
                aria-label={`Page ${item}`}
                aria-current={item === page ? 'page' : undefined}
                onClick={() => onPageChange(item)}
              >
                {item}
              </button>
            </li>
          )
        )}
        <li>
          <IconButton
            label="Next page"
            size="sm"
            variant="outline"
            disabled={page >= pageCount}
            onClick={() => onPageChange(page + 1)}
          >
            <Icon name="chevron-right" size={16} />
          </IconButton>
        </li>
      </ul>
    </nav>
  )
}
