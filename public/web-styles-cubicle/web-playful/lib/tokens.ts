export const colors = {
  red: "#ff0001",
  black: "#000000",
  cream: "#ede4dd",
  white: "#ede4dd",
} as const;

export const fonts = {
  sans: "NeueHaasGroteskTextPro, system-ui, sans-serif",
} as const;

export const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

export const animation = {
  duration: "680ms",
  easing: "cubic-bezier(0.87, 0, 0.13, 1)",
  preloaderStagger: 90,
  preloaderAngles: [7.14872, 15.5864, -9.1843, 16.2898, 4.6767, -3.96615],
} as const;

export const borderRadius = {
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  full: "9999px",
} as const;
