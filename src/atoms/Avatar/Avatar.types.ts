import type { HTMLAttributes } from 'react'

import type { Size } from '../../utils/types'

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string
  alt?: string
  /** Used to build initials when there is no image. */
  name?: string
  size?: Size
  shape?: 'circle' | 'rounded'
}
