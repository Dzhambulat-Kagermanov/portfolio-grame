type TMods = Record<string, boolean | string>

export function classNames(
  cls: string,
  mods: TMods = {},
  additionalCls: string[] = [],
): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls, value]) => cls),
    ...additionalCls.filter(Boolean),
  ].join(' ')
}
