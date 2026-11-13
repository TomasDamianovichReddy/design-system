import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import type { DividerProps } from './Divider.types'
import './Divider.scss'

export type { DividerProps } from './Divider.types'

/**
 * Visual separator. Use `label` to split content in two halves.
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(function Divider(
  { orientation = 'horizontal', label, spacing = 'md', className, ...rest },
  ref
) {
  const vertical = orientation === 'vertical'
  const labelled = !vertical && Boolean(label)

  return (
    <div
      {...rest}
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={cx(
        'ds-divider',
        `ds-divider--${orientation}`,
        `ds-divider--space-${spacing}`,
        labelled && 'ds-divider--labelled',
        className
      )}
    >
      {labelled ? (
        <span className="ds-divider__label">{label}</span>
      ) : (
        <span className="ds-divider__line" aria-hidden="true" />
      )}
    </div>
  )
})
