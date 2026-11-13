import type { SelectHTMLAttributes } from 'react'

import type { Size } from '../../utils/types'

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: Size
  invalid?: boolean
  /** Rendered as a disabled first option when provided. */
  placeholder?: string
  wrapperClassName?: string
}
