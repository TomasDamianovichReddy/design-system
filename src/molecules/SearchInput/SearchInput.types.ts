import type { InputHTMLAttributes } from 'react'

import type { Size } from '../../utils/types'

export interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  size?: Size
  /** When provided (together with `value`) a clear button is rendered. */
  onClear?: () => void
  clearLabel?: string
}
