export const fontFamily = {
  primary: 'Interdisplay, Inter, Arial, sans-serif',
  // Place Interdisplay.woff2 (and variants) in /public/fonts/
}

export const fontSize = {
  hero:      { size: '60px', lineHeight: '1.1em', letterSpacing: '-0.02em' },
  h1:        { size: '60px', lineHeight: '1.1em', letterSpacing: '-0.02em' },
  h2:        { size: '48px', lineHeight: '1.1em', letterSpacing: '-0.02em' },
  display01: { size: '44px', lineHeight: '1em' },
  display02: { size: '46px', lineHeight: '1.1em' },
  display03: { size: '30px', lineHeight: '1.1em' },
  h3:        { size: '30px', lineHeight: '1.1em', letterSpacing: '-0.02em' },
  h4:        { size: '26px', lineHeight: '1.2em' },
  h5:        { size: '20px', lineHeight: '1.3em', letterSpacing: '-0.02em' },
  h6:        { size: '16px', lineHeight: '1.5em' },
  textXXL:   { size: '24px', lineHeight: '1.5em' },
  textXL:    { size: '22px', lineHeight: '1.5em' },
  textL:     { size: '20px', lineHeight: '1.5em' },
  textM:     { size: '18px', lineHeight: '1.5em' },
  textXS:    { size: '16px', lineHeight: '1.5em' },  // default body
  textXXS:   { size: '14px', lineHeight: '1.5em' },
} as const

export const fontWeight = {
  light:     300,
  regular:   400,
  medium:    500,
  semiBold:  600,
  bold:      700,
  extraBold: 800,
} as const

export const lineHeight = {
  xxs: '1em',
  xs:  '1.1em',
  s:   '1.2em',
  m:   '1.3em',
  l:   '1.4em',
  xl:  '1.5em',
} as const

export const letterSpacing = {
  tightest: '-0.02em',
  tighter:  '-0.01em',
  xs: '0.35px',
  s:  '0.5px',
  m:  '0.8px',
  l:  '1.1px',
} as const
