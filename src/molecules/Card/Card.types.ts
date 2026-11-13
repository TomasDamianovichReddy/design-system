import type { HTMLAttributes, ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode
  footer?: ReactNode
  media?: ReactNode
  padding?: 'none' | 'sm' | 'md' | 'lg'
  variant?: 'elevated' | 'outline' | 'flat'
}
