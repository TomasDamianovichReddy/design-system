import { cx } from '../../utils/cx'
import type { Tone } from '../../utils/types'
import { Icon } from '../../atoms/Icon/Icon'
import type { StatProps } from './Stat.types'
import './Stat.scss'

export type { StatProps } from './Stat.types'

const toneByTrend: Record<'up' | 'down' | 'neutral', Tone> = {
  up: 'success',
  down: 'danger',
  neutral: 'neutral'
}

/**
 * Single KPI/metric block with an optional trend delta.
 */
export function Stat({
  label,
  value,
  delta,
  trend = 'neutral',
  invertTrend = false,
  hint,
  className,
  ...rest
}: StatProps) {
  const effectiveTrend =
    invertTrend && trend !== 'neutral' ? (trend === 'up' ? 'down' : 'up') : trend
  const tone = toneByTrend[effectiveTrend]

  return (
    <div {...rest} className={cx('ds-stat', className)}>
      <p className="ds-stat__label">{label}</p>
      <p className="ds-stat__value">{value}</p>
      {(delta || hint) && (
        <p className="ds-stat__meta">
          {delta && (
            <span className={cx('ds-stat__delta', `ds-stat__delta--${tone}`)}>
              {trend !== 'neutral' && (
                <Icon
                  name={trend === 'up' ? 'arrow-up' : 'arrow-down'}
                  size={14}
                  className="ds-stat__arrow"
                />
              )}
              {delta}
            </span>
          )}
          {hint && <span className="ds-stat__hint">{hint}</span>}
        </p>
      )}
    </div>
  )
}
