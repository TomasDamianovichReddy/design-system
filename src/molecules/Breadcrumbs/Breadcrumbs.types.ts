import type { HTMLAttributes, MouseEvent, ReactNode } from 'react'

export interface BreadcrumbItem {
  label: ReactNode
  href?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export interface BreadcrumbsProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  items: BreadcrumbItem[]
  ariaLabel?: string
  separator?: ReactNode
}
