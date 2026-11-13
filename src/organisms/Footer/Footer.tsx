import { cx } from '../../utils/cx'
import type { FooterProps } from './Footer.types'
import './Footer.scss'

export type { FooterColumn, FooterLink, FooterProps } from './Footer.types'

/**
 * Multi-column page footer with a legal bar.
 */
export function Footer({
  brand,
  description,
  columns = [],
  bottom,
  className,
  ...rest
}: FooterProps) {
  return (
    <footer {...rest} className={cx('ds-footer', className)}>
      <div className="ds-footer__inner">
        {(brand || description) && (
          <div className="ds-footer__brand">
            {brand && <div className="ds-footer__wordmark">{brand}</div>}
            {description && <p className="ds-footer__description">{description}</p>}
          </div>
        )}
        {columns.length > 0 && (
          <div className="ds-footer__columns">
            {columns.map((column, index) => (
              <div key={index} className="ds-footer__column">
                <p className="ds-footer__title">{column.title}</p>
                <ul className="ds-footer__links">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a className="ds-footer__link" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      {bottom && <div className="ds-footer__bottom">{bottom}</div>}
    </footer>
  )
}
