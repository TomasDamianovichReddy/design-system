import { cx } from '../../utils/cx'
import type { Tone } from '../../utils/types'
import { Icon, type IconName } from '../../atoms/Icon/Icon'
import { IconButton } from '../../atoms/IconButton/IconButton'
import type { AlertProps } from './Alert.types'
import './Alert.scss'

export type { AlertProps } from './Alert.types'

const iconByTone: Record<Tone, IconName> = {
  neutral: 'info',
  brand: 'info',
  success: 'check-circle',
  warning: 'alert-triangle',
  danger: 'alert-circle',
  info: 'info'
}

/**
 * Inline feedback message. Danger alerts use `role="alert"`, the rest `role="status"`.
 */
export function Alert({
  tone = 'info',
  title,
  children,
  onDismiss,
  dismissLabel = 'Dismiss',
  icon,
  className,
  ...rest
}: AlertProps) {
  const iconName = icon === false ? null : (icon ?? iconByTone[tone])

  return (
    <div
      {...rest}
      role={tone === 'danger' ? 'alert' : 'status'}
      className={cx('ds-alert', `ds-alert--${tone}`, className)}
    >
      {iconName && <Icon name={iconName} size={20} className="ds-alert__icon" />}
      <div className="ds-alert__content">
        {title && <p className="ds-alert__title">{title}</p>}
        {children && <div className="ds-alert__body">{children}</div>}
      </div>
      {onDismiss && (
        <IconButton
          label={dismissLabel}
          size="sm"
          variant="ghost"
          onClick={onDismiss}
          className="ds-alert__dismiss"
        >
          <Icon name="x" size={16} />
        </IconButton>
      )}
    </div>
  )
}
