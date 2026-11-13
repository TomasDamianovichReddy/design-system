import type { HTMLAttributes, ReactNode } from 'react'

import type { Align } from '../../utils/types'

export type SortDirection = 'asc' | 'desc'

export interface DataTableSort {
  key: string
  direction: SortDirection
}

export interface DataTableColumn<T> {
  /** Unique column id, also used as the default row accessor. */
  key: string
  header: ReactNode
  /** Custom cell renderer. Takes precedence over `accessor`. */
  render?: (row: T, index: number) => ReactNode
  /** Extracts the cell value when there is no `render`. */
  accessor?: (row: T) => ReactNode
  /** Comparable value used for sorting. Defaults to the raw row field. */
  sortValue?: (row: T) => string | number | Date | null | undefined
  sortable?: boolean
  align?: Align
  width?: string | number
}

export interface DataTableProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  columns: DataTableColumn<T>[]
  rows: T[]
  rowKey: (row: T, index: number) => string | number
  caption?: ReactNode
  /** Controlled sort. Omit for an uncontrolled table. */
  sort?: DataTableSort | null
  defaultSort?: DataTableSort | null
  onSortChange?: (sort: DataTableSort | null) => void
  emptyState?: ReactNode
  loading?: boolean
  dense?: boolean
  onRowClick?: (row: T, index: number) => void
}
