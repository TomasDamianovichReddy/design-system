import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import { icons } from './icons'
import type { IconProps } from './Icon.types'
import './Icon.scss'

export type { IconName, IconProps } from './Icon.types'

/**
 * Stroke icon rendered with `currentColor`, so it inherits text color.
 */
export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { name, size = 20, label, className, ...rest },
  ref
) {
  return (
    <svg
      {...rest}
      ref={ref}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      className={cx('ds-icon', className)}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {icons[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
})
