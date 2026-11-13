import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cx } from '../../utils/cx'
import { Icon } from '../../atoms/Icon/Icon'
import { IconButton } from '../../atoms/IconButton/IconButton'
import type { ModalProps } from './Modal.types'
import './Modal.scss'

export type { ModalProps } from './Modal.types'

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Accessible dialog rendered in a portal.
 *
 * Handles Escape, backdrop clicks, focus trapping and restoring focus on close.
 */
export function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  hideCloseButton = false,
  closeLabel = 'Close dialog',
  className,
  ...rest
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusable = panel ? Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)) : []
    const first = focusable[0]
    if (first) {
      first.focus()
    } else {
      panel?.focus()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onCloseRef.current()
        return
      }

      if (event.key !== 'Tab' || !panel) return
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (element) => element.offsetParent !== null || element === document.activeElement
      )
      if (items.length === 0) {
        event.preventDefault()
        panel.focus()
        return
      }

      const firstItem = items[0]
      const lastItem = items[items.length - 1]
      const active = document.activeElement

      if (event.shiftKey && (active === firstItem || !panel.contains(active))) {
        event.preventDefault()
        lastItem.focus()
      } else if (!event.shiftKey && active === lastItem) {
        event.preventDefault()
        firstItem.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus?.()
    }
  }, [open])

  if (!open || typeof document === 'undefined') return null

  return createPortal(
    <div
      className="ds-modal"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        {...rest}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={cx('ds-modal__panel', `ds-modal__panel--${size}`, className)}
      >
        <div className="ds-modal__header">
          <h2 id={titleId} className="ds-modal__title">
            {title}
          </h2>
          {!hideCloseButton && (
            <IconButton label={closeLabel} size="sm" variant="ghost" onClick={onClose}>
              <Icon name="x" size={18} />
            </IconButton>
          )}
        </div>
        <div className="ds-modal__body">{children}</div>
        {footer && <div className="ds-modal__footer">{footer}</div>}
      </div>
    </div>,
    document.body
  )
}
