import type { HTMLAttributes } from 'react'

export type PaginationRangeItem = number | 'ellipsis'

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Current page, 1-based. */
  page: number
  pageCount: number
  onPageChange: (page: number) => void
  siblingCount?: number
  ariaLabel?: string
}
