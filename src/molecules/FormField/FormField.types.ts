import type { HTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react'

export interface FormFieldProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
  /** Id shared by the label and the control inside `children`. */
  id: string
  label: ReactNode
  required?: boolean
  hint?: ReactNode
  error?: ReactNode
  children?: ReactNode
  labelProps?: Omit<LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>
}
