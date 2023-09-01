export default function isUrl(str: string): boolean {
  try {
    new URL(str);
  } catch {
    return false;
  }

  return true;
}
