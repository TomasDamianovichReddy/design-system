import type { ButtonHTMLAttributes } from 'react'

import type { Size } from '../../utils/types'

export type IconButtonVariant = 'solid' | 'outline' | 'ghost'

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> {
  /** Accessible name. Required because the button only renders an icon. */
  label: string
  variant?: IconButtonVariant
  size?: Size
}
