import { useId } from 'react'
import { cx } from '../../utils/cx'
import type { TooltipProps } from './Tooltip.types'
import './Tooltip.scss'

export type { TooltipPlacement, TooltipProps } from './Tooltip.types'

/**
 * CSS-driven tooltip that appears on hover and keyboard focus.
 * Keep essential information out of tooltips only.
 */
export function Tooltip({
  content,
  placement = 'top',
  children,
  className,
  ...rest
}: TooltipProps) {
  const id = useId()

  return (
    <span {...rest} className={cx('ds-tooltip', `ds-tooltip--${placement}`, className)}>
      <span className="ds-tooltip__trigger" aria-describedby={id}>
        {children}
      </span>
      <span role="tooltip" id={id} className="ds-tooltip__bubble">
        {content}
      </span>
    </span>
  )
}
