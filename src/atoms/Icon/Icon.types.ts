import type { SVGProps } from 'react'

import type { IconName } from './icons'

export type { IconName } from './icons'

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  /** One of the built-in icons. */
  name: IconName
  /** Pixel size for both width and height. Defaults to 20. */
  size?: number | string
  /** Accessible name. Omit for decorative icons; they become aria-hidden. */
  label?: string
}
