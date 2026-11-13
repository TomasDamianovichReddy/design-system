export type ClassValue = string | number | false | null | undefined

/**
 * Tiny class name joiner. Avoids pulling a dependency into the bundle.
 */
export function cx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ')
}
