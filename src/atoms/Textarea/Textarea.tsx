import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import type { TextareaProps } from './Textarea.types'
import './Textarea.scss'

export type { TextareaProps } from './Textarea.types'

/**
 * Native multiline text control.
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { invalid = false, className, rows = 4, ...rest },
  ref
) {
  return (
    <textarea
      {...rest}
      ref={ref}
      rows={rows}
      aria-invalid={invalid || undefined}
      className={cx('ds-textarea', invalid && 'ds-textarea--invalid', className)}
    />
  )
})
