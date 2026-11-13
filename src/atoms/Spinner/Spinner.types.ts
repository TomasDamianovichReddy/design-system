import type { HTMLAttributes } from 'react'

import type { Size } from '../../utils/types'

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: Size
  /** Screen-reader label. Defaults to "Loading". */
  label?: string
}
