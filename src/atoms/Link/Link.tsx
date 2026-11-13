import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import { Icon } from '../Icon/Icon'
import type { LinkProps } from './Link.types'
import './Link.scss'

export type { LinkProps } from './Link.types'

/**
 * Text link with focus styles. `external` handles the new-tab boilerplate.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    external = false,
    tone = 'brand',
    underline = 'hover',
    target,
    rel,
    className,
    children,
    ...rest
  },
  ref
) {
  return (
    <a
      {...rest}
      ref={ref}
      target={external ? (target ?? '_blank') : target}
      rel={external ? (rel ?? 'noopener noreferrer') : rel}
      className={cx('ds-link', `ds-link--${tone}`, `ds-link--underline-${underline}`, className)}
    >
      {children}
      {external && (
        <>
          <span className="ds-sr-only"> (opens in a new tab)</span>
          <Icon name="external-link" size={14} className="ds-link__icon" />
        </>
      )}
    </a>
  )
})
