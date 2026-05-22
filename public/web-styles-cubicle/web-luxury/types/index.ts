export interface StayItem {
  id: string
  slug: string
  name: string
  description: string
  shortDescription: string
  bedrooms: number
  area: string
  images: string[]
  features: string[]
}

export interface PackageItem {
  id: string
  slug: string
  title: string
  eyebrow: string
  description: string
  image: string
  duration?: string
  price?: string
}

export interface DiscoverItem {
  id: string
  slug: string
  title: string
  location: string
  description: string
  image: string
}

export interface NavLink {
  label: string
  href: string
  status?: 'active' | 'inactive'
  children?: NavLink[]
}

export type ThemeNav = 'light' | 'dark'
export type ThemePage = 'light' | 'dark'
export type BgSection = 'light' | 'dark' | 'lightgray' | 'white'
