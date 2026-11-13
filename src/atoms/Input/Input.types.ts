import type { InputHTMLAttributes } from 'react'

import type { Size } from '../../utils/types'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: Size
  invalid?: boolean
}
