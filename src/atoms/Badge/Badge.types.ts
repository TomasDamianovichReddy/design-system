import type { HTMLAttributes } from 'react'

import type { Size, Tone } from '../../utils/types'

export type BadgeVariant = 'soft' | 'solid' | 'outline'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone
  variant?: BadgeVariant
  size?: Exclude<Size, 'lg'>
  dot?: boolean
}
