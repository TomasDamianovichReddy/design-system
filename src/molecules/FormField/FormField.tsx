import { cx } from '../../utils/cx'
import { Label } from '../../atoms/Label/Label'
import type { FormFieldProps } from './FormField.types'
import './FormField.scss'

export type { FormFieldProps } from './FormField.types'

/**
 * Returns the ids used by the hint and error messages. Wire them to the control
 * with `aria-describedby` for full screen-reader support.
 */
export function formFieldIds(id: string): { hint: string; error: string } {
  return { hint: `${id}-hint`, error: `${id}-error` }
}

/**
 * Label + control + validation message. Layout only; it does not clone children.
 */
export function FormField({
  id,
  label,
  required = false,
  hint,
  error,
  children,
  labelProps,
  className,
  ...rest
}: FormFieldProps) {
  const ids = formFieldIds(id)

  return (
    <div {...rest} className={cx('ds-field', className)}>
      <Label htmlFor={id} required={required} {...labelProps}>
        {label}
      </Label>
      <div className="ds-field__control">{children}</div>
      {error ? (
        <p id={ids.error} className="ds-field__error" role="alert">
          {error}
        </p>
      ) : hint ? (
        <p id={ids.hint} className="ds-field__hint">
          {hint}
        </p>
      ) : null}
    </div>
  )
}
