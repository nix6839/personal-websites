export default function toAbsoluteUrl(
  relativeUrl: string,
  baseUrl: string,
): string {
  return new URL(relativeUrl, baseUrl).href;
}
