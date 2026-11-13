import type { HTMLAttributes, MouseEvent, ReactNode } from 'react'

export interface HeaderNavItem {
  label: ReactNode
  href?: string
  active?: boolean
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /** Logo or wordmark. */
  brand: ReactNode
  navItems?: HeaderNavItem[]
  /** Right-aligned slot for buttons, avatars, etc. */
  actions?: ReactNode
  sticky?: boolean
  navLabel?: string
}
