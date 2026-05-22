package com.cubicle.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Typography
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp

// ============================================================
// RAW PALETTE — translated from tokens.css
// ============================================================
object CP {
    val n50  = Color(0xFFFAFAFA)
    val n100 = Color(0xFFF5F5F5)
    val n200 = Color(0xFFE5E5E5)
    val n300 = Color(0xFFD4D4D4)
    val n400 = Color(0xFFA3A3A3)
    val n500 = Color(0xFF737373)
    val n600 = Color(0xFF525252)
    val n700 = Color(0xFF404040)
    val n800 = Color(0xFF262626)
    val n900 = Color(0xFF171717)
    val n950 = Color(0xFF0A0A0A)
    val red400   = Color(0xFFFF8787)
    val red600   = Color(0xFFFA5252)
    val green600 = Color(0xFF16A34A)
    val amber600 = Color(0xFFD97706)
    val white    = Color(0xFFFFFFFF)
    val black    = Color(0xFF000000)
}

// ============================================================
// SPACING
// ============================================================
object CS {
    const val s3xs = 2
    const val s2xs = 4
    const val xs   = 8
    const val sm   = 12
    const val md   = 16
    const val lg   = 20
    const val xl   = 24
    const val xl2  = 32
    const val xl3  = 40
    const val xl4  = 48
    const val xl5  = 64
    const val xl6  = 80
}

// ============================================================
// RADII
// ============================================================
object CR {
    const val none = 0
    const val xs   = 2
    const val sm   = 4
    const val md   = 6
    const val lg   = 8
    const val def  = 10
    const val xl   = 12
    const val xl2  = 16
    const val xl3  = 24
    const val full = 999
}

// ============================================================
// COLOR SCHEMES — Light & Dark
// ============================================================
private val LightColors = lightColorScheme(
    background       = CP.white,
    onBackground     = CP.n950,
    surface          = CP.white,
    onSurface        = CP.n950,
    primary          = CP.n900,
    onPrimary        = CP.n50,
    secondary        = CP.n100,
    onSecondary      = CP.n900,
    tertiary         = CP.n100,
    onTertiary       = CP.n900,
    error            = CP.red600,
    onError          = CP.white,
    outline          = CP.n200,
    surfaceVariant   = CP.n100,
    onSurfaceVariant = CP.n500,
)

private val DarkColors = darkColorScheme(
    background       = CP.black,
    onBackground     = CP.n50,
    surface          = CP.n950,
    onSurface        = CP.n50,
    primary          = CP.n100,
    onPrimary        = CP.n950,
    secondary        = CP.n800,
    onSecondary      = CP.n100,
    tertiary         = CP.n900,
    onTertiary       = CP.n100,
    error            = CP.red400,
    onError          = CP.white,
    outline          = CP.n800,
    surfaceVariant   = CP.n900,
    onSurfaceVariant = CP.n400,
)

// ============================================================
// SEMANTIC SHORTCUTS — access commonly used colors
// ============================================================
data class CubicleColors(val dark: Boolean) {
    val bg          get() = if (dark) CP.black    else CP.white
    val fg          get() = if (dark) CP.n50      else CP.n950
    val primary     get() = if (dark) CP.n100     else CP.n900
    val primaryFg   get() = if (dark) CP.n950     else CP.n50
    val muted       get() = if (dark) CP.n900     else CP.n100
    val mutedFg     get() = if (dark) CP.n400     else CP.n500
    val accent      get() = if (dark) CP.n900     else CP.n100
    val border      get() = if (dark) CP.n800     else CP.n200
    val input       get() = if (dark) CP.n800     else CP.n200
    val card        get() = if (dark) CP.n950     else CP.white
    val cardFg      get() = if (dark) CP.n50      else CP.n950
    val destructive get() = if (dark) CP.red400   else CP.red600
    val green       get() = CP.green600
    val amber       get() = CP.amber600
    val overlay     get() = Color(0x99000000)
}

// ============================================================
// TYPOGRAPHY — uses system Roboto, matches proportions
// (Replace FontFamily.Default with a custom Geist font if bundled)
// ============================================================
private val CubicleTypography = Typography(
    displayLarge  = TextStyle(fontFamily = FontFamily.Default, fontWeight = FontWeight.W700, fontSize = 32.sp, lineHeight = 36.sp, letterSpacing = (-1.2).sp),
    headlineLarge = TextStyle(fontFamily = FontFamily.Default, fontWeight = FontWeight.W600, fontSize = 28.sp, lineHeight = 32.sp, letterSpacing = (-1).sp),
    headlineMedium= TextStyle(fontFamily = FontFamily.Default, fontWeight = FontWeight.W600, fontSize = 22.sp, lineHeight = 28.sp, letterSpacing = (-0.5).sp),
    titleLarge    = TextStyle(fontFamily = FontFamily.Default, fontWeight = FontWeight.W600, fontSize = 20.sp, lineHeight = 24.sp),
    titleMedium   = TextStyle(fontFamily = FontFamily.Default, fontWeight = FontWeight.W600, fontSize = 17.sp, lineHeight = 22.sp, letterSpacing = (-0.3).sp),
    titleSmall    = TextStyle(fontFamily = FontFamily.Default, fontWeight = FontWeight.W500, fontSize = 15.sp, lineHeight = 20.sp),
    bodyLarge     = TextStyle(fontFamily = FontFamily.Default, fontWeight = FontWeight.W400, fontSize = 15.sp, lineHeight = 22.sp),
    bodyMedium    = TextStyle(fontFamily = FontFamily.Default, fontWeight = FontWeight.W400, fontSize = 14.sp, lineHeight = 21.sp),
    bodySmall     = TextStyle(fontFamily = FontFamily.Default, fontWeight = FontWeight.W400, fontSize = 13.sp, lineHeight = 18.sp),
    labelLarge    = TextStyle(fontFamily = FontFamily.Default, fontWeight = FontWeight.W500, fontSize = 13.sp, lineHeight = 18.sp),
    labelMedium   = TextStyle(fontFamily = FontFamily.Default, fontWeight = FontWeight.W500, fontSize = 12.sp, lineHeight = 16.sp),
    labelSmall    = TextStyle(fontFamily = FontFamily.Default, fontWeight = FontWeight.W500, fontSize = 11.sp, lineHeight = 14.sp, letterSpacing = 1.sp),
)

// ============================================================
// CUBICLE THEME COMPOSABLE
// ============================================================
@Composable
fun CubicleTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colorScheme = if (darkTheme) DarkColors else LightColors,
        typography  = CubicleTypography,
        content     = content,
    )
}
