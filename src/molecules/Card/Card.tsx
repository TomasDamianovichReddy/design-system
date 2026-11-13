import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import type { CardProps } from './Card.types'
import './Card.scss'

export type { CardProps } from './Card.types'

/**
 * Surface container with optional media, header and footer slots.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    header,
    footer,
    media,
    padding = 'md',
    variant = 'outline',
    className,
    children,
    ...rest
  },
  ref
) {
  return (
    <div
      {...rest}
      ref={ref}
      className={cx('ds-card', `ds-card--${variant}`, `ds-card--pad-${padding}`, className)}
    >
      {media && <div className="ds-card__media">{media}</div>}
      <div className="ds-card__body">
        {header && <div className="ds-card__header">{header}</div>}
        {children}
      </div>
      {footer && <div className="ds-card__footer">{footer}</div>}
    </div>
  )
})
