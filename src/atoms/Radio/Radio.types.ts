import type { InputHTMLAttributes, ReactNode } from 'react'

import type { Size } from '../../utils/types'

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: ReactNode
  description?: ReactNode
  size?: Exclude<Size, 'lg'>
}
