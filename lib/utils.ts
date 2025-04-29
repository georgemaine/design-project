import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIsTouchDevice() {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export function isValidUrl(urlString: string) {
  // https://stackoverflow.com/questions/74497502/how-to-check-for-a-valid-url-in-javascript
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i",
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
}

export function getGalleryItemPath(companyName: string) {
  return `gallery/${companyName}`;
}

export function computeDashOffset(v: number, enabled: boolean): number {
  return enabled ? 16 * (1 - v) : 16 * (1 + v);
}

export function getFormattedValue(v: number) {
  if (v < 1000) return v.toString();
  if (v >= 1000000) {
    const roundedM = Math.round((v / 1000000) * 10) / 10;
    return `${roundedM % 1 === 0 ? roundedM.toFixed(0) : roundedM}M`;
  }
  const roundedK = Math.round((v / 1000) * 10) / 10;
  return `${roundedK % 1 === 0 ? roundedK.toFixed(0) : roundedK}k`;
}
