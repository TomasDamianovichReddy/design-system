import type { HTMLAttributes, ReactNode } from 'react'

export interface AccordionItemData {
  id: string
  title: ReactNode
  content: ReactNode
  disabled?: boolean
}

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: AccordionItemData[]
  /** Allow several panels open at once. */
  multiple?: boolean
  defaultOpenIds?: string[]
  /** Controlled open ids. Omit for uncontrolled behavior. */
  openIds?: string[]
  onOpenChange?: (ids: string[]) => void
  variant?: 'bordered' | 'separated'
}
