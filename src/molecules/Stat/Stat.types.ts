import type { HTMLAttributes, ReactNode } from 'react'

export interface StatProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  label: ReactNode
  value: ReactNode
  /** e.g. "+12.5%" */
  delta?: ReactNode
  trend?: 'up' | 'down' | 'neutral'
  /** Marks lower values as good (e.g. churn). Only affects color. */
  invertTrend?: boolean
  hint?: ReactNode
}
