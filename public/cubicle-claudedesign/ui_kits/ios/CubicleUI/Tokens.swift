// Cubicle Design System — iOS/SwiftUI Tokens
// Translated from tokens.css — follows HIG conventions

import SwiftUI

// ============================================================
// RAW PALETTE
// ============================================================
struct CP {
    static let n50   = Color(hex: 0xFAFAFA)
    static let n100  = Color(hex: 0xF5F5F5)
    static let n200  = Color(hex: 0xE5E5E5)
    static let n300  = Color(hex: 0xD4D4D4)
    static let n400  = Color(hex: 0xA3A3A3)
    static let n500  = Color(hex: 0x737373)
    static let n600  = Color(hex: 0x525252)
    static let n700  = Color(hex: 0x404040)
    static let n800  = Color(hex: 0x262626)
    static let n900  = Color(hex: 0x171717)
    static let n950  = Color(hex: 0x0A0A0A)
    static let red400   = Color(hex: 0xFF8787)
    static let red600   = Color(hex: 0xFA5252)
    static let green600 = Color(hex: 0x16A34A)
    static let amber600 = Color(hex: 0xD97706)
    static let white    = Color.white
    static let black    = Color.black
}

// ============================================================
// HEX INITIALIZER
// ============================================================
extension Color {
    init(hex: UInt, alpha: Double = 1) {
        self.init(
            .sRGB,
            red:   Double((hex >> 16) & 0xFF) / 255,
            green: Double((hex >>  8) & 0xFF) / 255,
            blue:  Double( hex        & 0xFF) / 255,
            opacity: alpha
        )
    }
}

// ============================================================
// SPACING
// ============================================================
struct CS {
    static let s3xs: CGFloat = 2
    static let s2xs: CGFloat = 4
    static let xs:   CGFloat = 8
    static let sm:   CGFloat = 12
    static let md:   CGFloat = 16
    static let lg:   CGFloat = 20
    static let xl:   CGFloat = 24
    static let xl2:  CGFloat = 32
    static let xl3:  CGFloat = 40
    static let xl4:  CGFloat = 48
    static let xl5:  CGFloat = 64
    static let xl6:  CGFloat = 80
}

// ============================================================
// RADII
// ============================================================
struct CR {
    static let none: CGFloat = 0
    static let xs:   CGFloat = 2
    static let sm:   CGFloat = 4
    static let md:   CGFloat = 6
    static let lg:   CGFloat = 8
    static let def:  CGFloat = 10
    static let xl:   CGFloat = 12
    static let xl2:  CGFloat = 16
    static let xl3:  CGFloat = 24
    static let full: CGFloat = 999
}

// ============================================================
// SEMANTIC THEME — Light + Dark (matches HIG adaptive colors)
// ============================================================
struct CT {
    let dark: Bool

    var bg:          Color { dark ? CP.black    : CP.white }
    var fg:          Color { dark ? CP.n50      : CP.n950 }
    var primary:     Color { dark ? CP.n100     : CP.n900 }
    var primaryFg:   Color { dark ? CP.n950     : CP.n50 }
    var secondary:   Color { dark ? CP.n800     : CP.n100 }
    var secondaryFg: Color { dark ? CP.n100     : CP.n900 }
    var muted:       Color { dark ? CP.n900     : CP.n100 }
    var mutedFg:     Color { dark ? CP.n400     : CP.n500 }
    var accent:      Color { dark ? CP.n900     : CP.n100 }
    var accentFg:    Color { dark ? CP.n100     : CP.n900 }
    var destructive: Color { dark ? CP.red400   : CP.red600 }
    var destructiveFg: Color { CP.white }
    var border:      Color { dark ? CP.n800     : CP.n200 }
    var input:       Color { dark ? CP.n800     : CP.n200 }
    var ring:        Color { dark ? CP.n400     : CP.n950 }
    var card:        Color { dark ? CP.n950     : CP.white }
    var cardFg:      Color { dark ? CP.n50      : CP.n950 }
    var green:       Color { CP.green600 }
    var amber:       Color { CP.amber600 }
    var overlay:     Color { Color.black.opacity(0.6) }
}

// ============================================================
// ENVIRONMENT KEY — pass CT through view tree
// ============================================================
private struct CubicleThemeKey: EnvironmentKey {
    static let defaultValue = CT(dark: false)
}

extension EnvironmentValues {
    var ct: CT {
        get { self[CubicleThemeKey.self] }
        set { self[CubicleThemeKey.self] = newValue }
    }
}

// ============================================================
// TYPOGRAPHY HELPERS — SF Pro with Cubicle proportions
// Uses system fonts for iOS native feel
// ============================================================
struct CTxt {
    static func sans(
        size: CGFloat = 15,
        weight: Font.Weight = .regular,
        design: Font.Design = .default
    ) -> Font {
        .system(size: size, weight: weight, design: design)
    }

    static func mono(size: CGFloat = 13, weight: Font.Weight = .regular) -> Font {
        .system(size: size, weight: weight, design: .monospaced)
    }

    // Preset styles matching mobile web kit
    static let appBarTitle  = Font.system(size: 17, weight: .semibold)
    static let largeTitle   = Font.system(size: 32, weight: .semibold)
    static let headline     = Font.system(size: 26, weight: .semibold)
    static let body         = Font.system(size: 15, weight: .regular)
    static let bodyMedium   = Font.system(size: 15, weight: .medium)
    static let callout      = Font.system(size: 14, weight: .regular)
    static let footnote     = Font.system(size: 13, weight: .regular)
    static let caption      = Font.system(size: 12, weight: .medium)
    static let captionMono  = Font.system(size: 11, weight: .medium, design: .monospaced)
    static let tabLabel     = Font.system(size: 10, weight: .medium)
    static let kpiValue     = Font.system(size: 26, weight: .bold)
    static let kpiLabel     = Font.system(size: 12, weight: .medium)
    static let bigNumber    = Font.system(size: 36, weight: .bold)
    static let chartBig     = Font.system(size: 24, weight: .bold)
}

// ============================================================
// SHADOW STYLES
// ============================================================
struct CShadow {
    static let sm = Shadow(color: .black.opacity(0.1),  radius: 2, x: 0, y: 1)
    static let md = Shadow(color: .black.opacity(0.1),  radius: 6, x: 0, y: 4)
    static let lg = Shadow(color: .black.opacity(0.12), radius: 15, x: 0, y: 10)
}
