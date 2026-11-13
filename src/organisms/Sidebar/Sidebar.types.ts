import type { HTMLAttributes, MouseEvent, ReactNode } from 'react'

import type { IconName } from '../../atoms/Icon/Icon.types'

export interface SidebarItem {
  label: ReactNode
  href?: string
  icon?: IconName
  active?: boolean
  badge?: ReactNode
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export interface SidebarProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  items: SidebarItem[]
  title?: ReactNode
  footer?: ReactNode
  /** Starts collapsed (icon rail). */
  defaultCollapsed?: boolean
  collapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  navLabel?: string
}
