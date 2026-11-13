import type { HTMLAttributes, ReactNode } from 'react'

import type { IconName } from '../../atoms/Icon/Icon.types'

export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  icon?: IconName
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
  size?: 'sm' | 'md'
}
