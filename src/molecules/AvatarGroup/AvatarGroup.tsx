import { cx } from '../../utils/cx'
import { Avatar } from '../../atoms/Avatar/Avatar'
import type { AvatarGroupProps } from './AvatarGroup.types'
import './AvatarGroup.scss'

export type { AvatarGroupItem, AvatarGroupProps } from './AvatarGroup.types'

/**
 * Overlapping stack of avatars with an overflow counter.
 */
export function AvatarGroup({
  avatars,
  max = 4,
  size = 'md',
  className,
  ...rest
}: AvatarGroupProps) {
  const visible = avatars.slice(0, max)
  const overflow = avatars.length - visible.length

  return (
    <div
      {...rest}
      className={cx('ds-avatar-group', `ds-avatar-group--${size}`, className)}
      aria-label={`${avatars.length} people`}
      role="group"
    >
      {visible.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          name={avatar.name}
          alt={avatar.alt}
          size={size}
          className="ds-avatar-group__item"
        />
      ))}
      {overflow > 0 && (
        <span
          className={cx('ds-avatar-group__item', 'ds-avatar-group__more')}
          aria-label={`and ${overflow} more`}
        >
          +{overflow}
        </span>
      )}
    </div>
  )
}
