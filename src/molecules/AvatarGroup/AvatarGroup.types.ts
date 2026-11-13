import type { HTMLAttributes } from 'react'

import type { Size } from '../../utils/types'

export interface AvatarGroupItem {
  src?: string
  name?: string
  alt?: string
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  avatars: AvatarGroupItem[]
  /** Maximum avatars to render. The rest collapse into a "+N" counter. */
  max?: number
  size?: Size
}
