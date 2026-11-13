import type { HTMLAttributes, ReactNode } from 'react'

export interface TabItem {
  id: string
  label: ReactNode
  content: ReactNode
  disabled?: boolean
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[]
  defaultActiveId?: string
  /** Controlled active tab id. Omit for uncontrolled behavior. */
  activeId?: string
  onChange?: (id: string) => void
  ariaLabel?: string
}
