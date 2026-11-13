import type { HTMLAttributes } from 'react'

import type { Align } from '../../utils/types'

export type TextAs =
  | 'p'
  | 'span'
  | 'div'
  | 'small'
  | 'strong'
  | 'em'
  | 'label'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold'
export type TextTone = 'default' | 'muted' | 'subtle' | 'brand' | 'success' | 'danger'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Element to render. Defaults to `p`. */
  as?: TextAs
  size?: TextSize
  weight?: TextWeight
  tone?: TextTone
  align?: Align
  truncate?: boolean
}
