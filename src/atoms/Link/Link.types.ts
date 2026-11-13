import type { AnchorHTMLAttributes } from 'react'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Adds `target="_blank"`, safe `rel` values and a screen-reader hint. */
  external?: boolean
  tone?: 'brand' | 'neutral'
  underline?: 'always' | 'hover' | 'none'
}
