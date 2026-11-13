import { useState } from 'react'
import { cx } from '../../utils/cx'
import { Icon } from '../../atoms/Icon/Icon'
import { IconButton } from '../../atoms/IconButton/IconButton'
import type { SidebarProps } from './Sidebar.types'
import './Sidebar.scss'

export type { SidebarItem, SidebarProps } from './Sidebar.types'

/**
 * Vertical navigation with an optional collapsed icon-rail mode.
 */
export function Sidebar({
  items,
  title,
  footer,
  defaultCollapsed = false,
  collapsed,
  onCollapsedChange,
  navLabel = 'Sidebar navigation',
  className,
  ...rest
}: SidebarProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed)
  const isCollapsed = collapsed ?? internalCollapsed

  const toggle = () => {
    const next = !isCollapsed
    if (collapsed === undefined) setInternalCollapsed(next)
    onCollapsedChange?.(next)
  }

  return (
    <aside
      {...rest}
      className={cx('ds-sidebar', isCollapsed && 'ds-sidebar--collapsed', className)}
    >
      <div className="ds-sidebar__header">
        {title && !isCollapsed && <div className="ds-sidebar__title">{title}</div>}
        <IconButton
          label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          size="sm"
          variant="ghost"
          className="ds-sidebar__toggle"
          aria-expanded={!isCollapsed}
          onClick={toggle}
        >
          <Icon name={isCollapsed ? 'chevron-right' : 'chevron-left'} size={16} />
        </IconButton>
      </div>
      <nav aria-label={navLabel} className="ds-sidebar__nav">
        <ul className="ds-sidebar__list">
          {items.map((item, index) => (
            <li key={index}>
              <a
                className={cx('ds-sidebar__link', item.active && 'ds-sidebar__link--active')}
                href={item.href}
                onClick={item.onClick}
                aria-current={item.active ? 'page' : undefined}
                title={isCollapsed && typeof item.label === 'string' ? item.label : undefined}
              >
                {item.icon && <Icon name={item.icon} size={18} className="ds-sidebar__icon" />}
                {!isCollapsed && <span className="ds-sidebar__label">{item.label}</span>}
                {!isCollapsed && item.badge && (
                  <span className="ds-sidebar__badge">{item.badge}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {footer && !isCollapsed && <div className="ds-sidebar__footer">{footer}</div>}
    </aside>
  )
}
