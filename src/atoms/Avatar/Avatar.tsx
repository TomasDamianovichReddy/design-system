import { forwardRef, useEffect, useState } from 'react'
import { cx } from '../../utils/cx'
import { Icon } from '../Icon/Icon'
import type { AvatarProps } from './Avatar.types'
import './Avatar.scss'

export type { AvatarProps } from './Avatar.types'

function getInitials(name?: string): string {
  if (!name) return ''
  const parts = name.trim().split(/\s+/).slice(0, 2)
  return parts.map((part) => part.charAt(0).toUpperCase()).join('')
}

/**
 * User image with initials fallback. Broken images fall back to initials too.
 */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  { src, alt, name, size = 'md', shape = 'circle', className, ...rest },
  ref
) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [src])

  const label = alt ?? name ?? 'Avatar'
  const initials = getInitials(name)

  return (
    <span
      {...rest}
      ref={ref}
      className={cx('ds-avatar', `ds-avatar--${size}`, `ds-avatar--${shape}`, className)}
    >
      {src && !failed ? (
        <img className="ds-avatar__img" src={src} alt={label} onError={() => setFailed(true)} />
      ) : initials ? (
        <span className="ds-avatar__initials" role="img" aria-label={label}>
          {initials}
        </span>
      ) : (
        <Icon name="user" className="ds-avatar__fallback" label={label} />
      )}
    </span>
  )
})
