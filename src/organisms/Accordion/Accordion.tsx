import { useId, useState } from 'react'
import { cx } from '../../utils/cx'
import { Icon } from '../../atoms/Icon/Icon'
import type { AccordionProps } from './Accordion.types'
import './Accordion.scss'

export type { AccordionItemData, AccordionProps } from './Accordion.types'

/**
 * Vertically stacked disclosure panels with keyboard-native buttons.
 */
export function Accordion({
  items,
  multiple = false,
  defaultOpenIds = [],
  openIds,
  onOpenChange,
  variant = 'bordered',
  className,
  ...rest
}: AccordionProps) {
  const [internalOpen, setInternalOpen] = useState<string[]>(defaultOpenIds)
  const isOpen = openIds ?? internalOpen
  const baseId = useId()

  const toggle = (id: string) => {
    const currentlyOpen = isOpen.includes(id)
    const next = currentlyOpen
      ? isOpen.filter((value) => value !== id)
      : multiple
        ? [...isOpen, id]
        : [id]

    if (openIds === undefined) setInternalOpen(next)
    onOpenChange?.(next)
  }

  return (
    <div {...rest} className={cx('ds-accordion', `ds-accordion--${variant}`, className)}>
      {items.map((item) => {
        const panelId = `${baseId}-panel-${item.id}`
        const buttonId = `${baseId}-button-${item.id}`
        const expanded = isOpen.includes(item.id)

        return (
          <div key={item.id} className="ds-accordion__item">
            <h3 className="ds-accordion__heading">
              <button
                id={buttonId}
                type="button"
                className="ds-accordion__trigger"
                aria-expanded={expanded}
                aria-controls={panelId}
                disabled={item.disabled}
                onClick={() => toggle(item.id)}
              >
                <span className="ds-accordion__title">{item.title}</span>
                <Icon
                  name="chevron-down"
                  size={18}
                  className={cx('ds-accordion__chevron', expanded && 'ds-accordion__chevron--open')}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!expanded}
              className="ds-accordion__panel"
            >
              {item.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
