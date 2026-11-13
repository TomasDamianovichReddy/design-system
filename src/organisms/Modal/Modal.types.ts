import type { HTMLAttributes, ReactNode } from 'react'

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  open: boolean
  onClose: () => void
  title: ReactNode
  children?: ReactNode
  footer?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  hideCloseButton?: boolean
  closeLabel?: string
}
