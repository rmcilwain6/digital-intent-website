/** True for a `[TK: ...]` placeholder value (SPEC rule 6). */
export function isPlaceholder(value: string): boolean {
  return value.startsWith('[TK');
}
