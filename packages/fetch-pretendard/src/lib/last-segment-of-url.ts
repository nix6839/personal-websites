export default function lastSegment(str: string): string {
  const segments = str.split('/');
  return segments.at(-1) ?? '';
}
