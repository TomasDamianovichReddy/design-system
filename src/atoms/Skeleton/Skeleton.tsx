import { forwardRef } from 'react'
import { cx } from '../../utils/cx'
import type { SkeletonProps } from './Skeleton.types'
import './Skeleton.scss'

export type { SkeletonProps } from './Skeleton.types'

/**
 * Loading placeholder. Purely decorative (`aria-hidden`).
 */
export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(function Skeleton(
  { variant = 'text', width, height, className, style, ...rest },
  ref
) {
  return (
    <span
      {...rest}
      ref={ref}
      aria-hidden="true"
      className={cx('ds-skeleton', `ds-skeleton--${variant}`, className)}
      style={{ width, height, ...style }}
    />
  )
})
