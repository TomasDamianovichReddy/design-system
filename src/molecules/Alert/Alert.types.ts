import type { HTMLAttributes, ReactNode } from 'react'

import type { IconName } from '../../atoms/Icon/Icon.types'
import type { Tone } from '../../utils/types'

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  tone?: Tone
  title?: ReactNode
  children?: ReactNode
  onDismiss?: () => void
  dismissLabel?: string
  /** Override the default icon, or pass `false` to hide it. */
  icon?: IconName | false
}
