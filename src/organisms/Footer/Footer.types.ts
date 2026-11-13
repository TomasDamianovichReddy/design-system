import type { HTMLAttributes, ReactNode } from 'react'

export interface FooterLink {
  label: ReactNode
  href?: string
}

export interface FooterColumn {
  title: ReactNode
  links: FooterLink[]
}

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  brand?: ReactNode
  description?: ReactNode
  columns?: FooterColumn[]
  /** Legal row, e.g. copyright. */
  bottom?: ReactNode
}
