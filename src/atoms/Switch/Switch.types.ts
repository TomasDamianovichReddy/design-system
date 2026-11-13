import type { InputHTMLAttributes, ReactNode } from 'react'

import type { Size } from '../../utils/types'

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: ReactNode
  size?: Size
}
