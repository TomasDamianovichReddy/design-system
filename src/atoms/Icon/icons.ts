/**
 * Built-in 24x24 stroke icons. Kept as path data so the icon set is tree-shakeable
 * and adds no runtime dependency.
 */
export const icons = {
  search: ['M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14', 'M20 20l-3.5-3.5'],
  x: ['M6 6l12 12', 'M18 6L6 18'],
  check: ['M5 13l4 4L19 7'],
  'chevron-down': ['M6 9l6 6 6-6'],
  'chevron-left': ['M15 6l-6 6 6 6'],
  'chevron-right': ['M9 6l6 6-6 6'],
  'arrow-up': ['M12 19V5', 'M6 11l6-6 6 6'],
  'arrow-down': ['M12 5v14', 'M6 13l6 6 6-6'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  'alert-circle': ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18', 'M12 8v4.5', 'M12 16h.01'],
  info: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18', 'M12 11v5', 'M12 8h.01'],
  'check-circle': [
    'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18',
    'M8 12.5l2.5 2.5L16 9.5'
  ],
  'alert-triangle': ['M12 4l9 16H3L12 4z', 'M12 10v4', 'M12 17h.01'],
  'external-link': [
    'M14 5h5v5',
    'M19 5l-8 8',
    'M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4'
  ],
  plus: ['M12 5v14', 'M5 12h14'],
  mail: ['M4 6h16v12H4z', 'M4 7l8 6 8-6'],
  lock: ['M6 10h12v10H6z', 'M9 10V7a3 3 0 0 1 6 0v3'],
  user: [
    'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
    'M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6'
  ]
} as const

export type IconName = keyof typeof icons
