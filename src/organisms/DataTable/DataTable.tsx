import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'
import { Icon } from '../../atoms/Icon/Icon'
import { Spinner } from '../../atoms/Spinner/Spinner'
import { EmptyState } from '../../molecules/EmptyState/EmptyState'
import type { DataTableColumn, DataTableProps, DataTableSort } from './DataTable.types'
import './DataTable.scss'

export type {
  DataTableColumn,
  DataTableProps,
  DataTableSort,
  SortDirection
} from './DataTable.types'

function compareValues(a: unknown, b: unknown): number {
  const normalize = (value: unknown): string | number => {
    if (value instanceof Date) return value.getTime()
    if (typeof value === 'number') return value
    if (value === null || value === undefined) return ''
    return String(value)
  }

  const left = normalize(a)
  const right = normalize(b)

  if (typeof left === 'number' && typeof right === 'number') return left - right
  return String(left).localeCompare(String(right))
}

/**
 * Generic, accessible data table with optional client-side sorting.
 *
 * Sorting is applied to the `rows` you pass in. For server-side sorting, use a
 * controlled `sort` and sort the rows yourself.
 */
export function DataTable<T>({
  columns,
  rows,
  rowKey,
  caption,
  sort,
  defaultSort = null,
  onSortChange,
  emptyState,
  loading = false,
  dense = false,
  onRowClick,
  className,
  ...rest
}: DataTableProps<T>) {
  const [internalSort, setInternalSort] = useState<DataTableSort | null>(defaultSort)
  const activeSort = sort === undefined ? internalSort : sort

  const sortedRows = useMemo(() => {
    if (!activeSort) return rows
    const column = columns.find((item) => item.key === activeSort.key)
    if (!column) return rows

    const read = (row: T): unknown => {
      if (column.sortValue) return column.sortValue(row)
      return (row as Record<string, unknown>)[column.key]
    }

    return [...rows].sort((a, b) => {
      const result = compareValues(read(a), read(b))
      return activeSort.direction === 'asc' ? result : -result
    })
  }, [rows, columns, activeSort])

  const handleSort = (column: DataTableColumn<T>) => {
    if (!column.sortable) return
    const next: DataTableSort =
      activeSort?.key === column.key
        ? { key: column.key, direction: activeSort.direction === 'asc' ? 'desc' : 'asc' }
        : { key: column.key, direction: 'asc' }

    if (sort === undefined) setInternalSort(next)
    onSortChange?.(next)
  }

  const showEmpty = !loading && sortedRows.length === 0

  return (
    <div
      {...rest}
      className={cx('ds-table-wrap', dense && 'ds-table-wrap--dense', className)}
    >
      <table className="ds-table">
        {caption && <caption className="ds-table__caption">{caption}</caption>}
        <thead className="ds-table__head">
          <tr>
            {columns.map((column) => {
              const isSorted = activeSort?.key === column.key
              return (
                <th
                  key={column.key}
                  scope="col"
                  style={{ width: column.width, textAlign: column.align }}
                  aria-sort={
                    isSorted
                      ? activeSort.direction === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : column.sortable
                        ? 'none'
                        : undefined
                  }
                  className={cx('ds-table__th', column.align && `ds-table__cell--${column.align}`)}
                >
                  {column.sortable ? (
                    <button
                      type="button"
                      className={cx('ds-table__sort', isSorted && 'ds-table__sort--active')}
                      onClick={() => handleSort(column)}
                    >
                      {column.header}
                      <Icon
                        name={isSorted && activeSort.direction === 'desc' ? 'arrow-down' : 'arrow-up'}
                        size={14}
                        className={cx(
                          'ds-table__sort-icon',
                          !isSorted && 'ds-table__sort-icon--idle'
                        )}
                      />
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="ds-table__status">
                <Spinner label="Loading table" />
              </td>
            </tr>
          ) : showEmpty ? (
            <tr>
              <td colSpan={columns.length} className="ds-table__status">
                {emptyState ?? <EmptyState size="sm" title="No results" />}
              </td>
            </tr>
          ) : (
            sortedRows.map((row, index) => (
              <tr
                key={rowKey(row, index)}
                className={cx('ds-table__row', onRowClick && 'ds-table__row--clickable')}
                tabIndex={onRowClick ? 0 : undefined}
                onClick={onRowClick ? () => onRowClick(row, index) : undefined}
                onKeyDown={
                  onRowClick
                    ? (event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          onRowClick(row, index)
                        }
                      }
                    : undefined
                }
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    style={{ textAlign: column.align }}
                    className={cx(
                      'ds-table__td',
                      column.align && `ds-table__cell--${column.align}`
                    )}
                  >
                    {column.render
                      ? column.render(row, index)
                      : column.accessor
                        ? column.accessor(row)
                        : ((row as Record<string, ReactNode>)[column.key] ?? null)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
