import { createElement } from 'react'
import { cx } from '../../utils/cx'
import type { TextProps } from './Text.types'
import './Text.scss'

export type { TextAs, TextProps, TextSize, TextTone, TextWeight } from './Text.types'

/**
 * Typography primitive. Use `as` to keep semantics correct (`h1`–`h6`, `p`, `span`…).
 */
export function Text({
  as = 'p',
  size = 'md',
  weight = 'regular',
  tone = 'default',
  align = 'left',
  truncate = false,
  className,
  children,
  ...rest
}: TextProps) {
  return createElement(
    as,
    {
      ...rest,
      className: cx(
        'ds-text',
        `ds-text--size-${size}`,
        `ds-text--weight-${weight}`,
        `ds-text--tone-${tone}`,
        `ds-text--align-${align}`,
        truncate && 'ds-text--truncate',
        className
      )
    },
    children
  )
}
