import type { LabelHTMLAttributes } from 'react'

import type { Size } from '../../utils/types'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
  optional?: boolean
  size?: Size
}
