export const cn = (
  className?: string,
  requiredClassNames?: (string | undefined)[],
  mods?: Record<string, boolean>,
) => {
  const result = [
    className,
    ...(requiredClassNames ?? []).filter(Boolean),
    ...Object.entries(mods ?? {})
      .filter(([, value]) => Boolean(value))
      .map(([name]) => name),
  ];

  return result.join(' ');
};
