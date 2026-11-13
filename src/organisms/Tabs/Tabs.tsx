import { useId, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { cx } from '../../utils/cx'
import type { TabsProps } from './Tabs.types'
import './Tabs.scss'

export type { TabItem, TabsProps } from './Tabs.types'

/**
 * Tab list with roving tabindex and Arrow/Home/End keyboard support.
 */
export function Tabs({
  items,
  defaultActiveId,
  activeId,
  onChange,
  ariaLabel = 'Tabs',
  className,
  ...rest
}: TabsProps) {
  const [internalActive, setInternalActive] = useState(defaultActiveId ?? items[0]?.id)
  const active = activeId ?? internalActive
  const baseId = useId()
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const enabledItems = items.filter((item) => !item.disabled)
  const activeItem = items.find((item) => item.id === active) ?? enabledItems[0]

  const select = (id: string) => {
    if (activeId === undefined) setInternalActive(id)
    onChange?.(id)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (enabledItems.length === 0) return
    const currentIndex = enabledItems.findIndex((item) => item.id === activeItem?.id)
    const lastIndex = enabledItems.length - 1
    let nextIndex: number | null = null

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = currentIndex >= lastIndex ? 0 : currentIndex + 1
        break
      case 'ArrowLeft':
        nextIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = lastIndex
        break
      default:
        return
    }

    event.preventDefault()
    const next = enabledItems[nextIndex]
    select(next.id)
    buttonRefs.current[next.id]?.focus()
  }

  if (!activeItem) return null

  return (
    <div {...rest} className={cx('ds-tabs', className)}>
      <div role="tablist" aria-label={ariaLabel} className="ds-tabs__list">
        {items.map((item) => {
          const selected = item.id === activeItem.id
          return (
            <button
              key={item.id}
              ref={(element) => {
                buttonRefs.current[item.id] = element
              }}
              id={`${baseId}-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              disabled={item.disabled}
              className={cx('ds-tabs__tab', selected && 'ds-tabs__tab--active')}
              onClick={() => select(item.id)}
              onKeyDown={handleKeyDown}
            >
              {item.label}
            </button>
          )
        })}
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-panel-${activeItem.id}`}
        aria-labelledby={`${baseId}-tab-${activeItem.id}`}
        tabIndex={0}
        className="ds-tabs__panel"
      >
        {activeItem.content}
      </div>
    </div>
  )
}
