import type { HTMLAttributes, ReactNode } from 'react'

import type { Orientation } from '../../utils/types'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation
  label?: ReactNode
  spacing?: 'sm' | 'md' | 'lg'
}
