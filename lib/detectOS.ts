export function getDeviceOS(): "android" | "ios" | "unknown" {
  if (typeof window === "undefined") return "unknown";

  const userAgent = window.navigator.userAgent || window.navigator.vendor || (window as any).opera;

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return "ios";
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return "android";
  }

  // Fallback using platform if userAgent is ambiguous
  const platform = window.navigator.platform || "";
  if (/iPad|iPhone|iPod/.test(platform)) {
      return "ios";
  }
  if (/android/i.test(platform)) {
      return "android";
  }

  return "unknown";
}
