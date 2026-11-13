import { useId, useState } from 'react'
import { cx } from '../../utils/cx'
import { Icon } from '../../atoms/Icon/Icon'
import { IconButton } from '../../atoms/IconButton/IconButton'
import type { HeaderProps } from './Header.types'
import './Header.scss'

export type { HeaderNavItem, HeaderProps } from './Header.types'

/**
 * Responsive top navigation bar with a collapsible menu on small screens.
 */
export function Header({
  brand,
  navItems = [],
  actions,
  sticky = false,
  navLabel = 'Main navigation',
  className,
  ...rest
}: HeaderProps) {
  const [open, setOpen] = useState(false)
  const navId = useId()

  return (
    <header
      {...rest}
      className={cx('ds-header', sticky && 'ds-header--sticky', open && 'ds-header--open', className)}
    >
      <div className="ds-header__inner">
        <div className="ds-header__brand">{brand}</div>
        {navItems.length > 0 && (
          <nav id={navId} className="ds-header__nav" aria-label={navLabel}>
            <ul className="ds-header__list">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    className={cx('ds-header__link', item.active && 'ds-header__link--active')}
                    href={item.href}
                    onClick={item.onClick}
                    aria-current={item.active ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div className="ds-header__actions">
          {actions}
          {navItems.length > 0 && (
            <IconButton
              label={open ? 'Close menu' : 'Open menu'}
              variant="ghost"
              className="ds-header__toggle"
              aria-expanded={open}
              aria-controls={navId}
              onClick={() => setOpen((value) => !value)}
            >
              <Icon name={open ? 'x' : 'menu'} />
            </IconButton>
          )}
        </div>
      </div>
    </header>
  )
}
