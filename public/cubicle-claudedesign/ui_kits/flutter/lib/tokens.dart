// Cubicle Design System — Flutter Tokens
// Pixel-perfect translation from tokens.css

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

// ============================================================
// RAW COLOR PALETTE
// ============================================================
class CP {
  CP._();
  static const n50  = Color(0xFFFAFAFA);
  static const n100 = Color(0xFFF5F5F5);
  static const n200 = Color(0xFFE5E5E5);
  static const n300 = Color(0xFFD4D4D4);
  static const n400 = Color(0xFFA3A3A3);
  static const n500 = Color(0xFF737373);
  static const n600 = Color(0xFF525252);
  static const n700 = Color(0xFF404040);
  static const n800 = Color(0xFF262626);
  static const n900 = Color(0xFF171717);
  static const n950 = Color(0xFF0A0A0A);
  static const red400   = Color(0xFFFF8787);
  static const red600   = Color(0xFFFA5252);
  static const green600 = Color(0xFF16A34A);
  static const amber600 = Color(0xFFD97706);
  static const white    = Color(0xFFFFFFFF);
  static const black    = Color(0xFF000000);
}

// ============================================================
// SPACING — matches tokens.css exactly (in px = logical pixels)
// ============================================================
class CS {
  CS._();
  static const double s3xs = 2;
  static const double s2xs = 4;
  static const double xs   = 8;
  static const double sm   = 12;
  static const double md   = 16;
  static const double lg   = 20;
  static const double xl   = 24;
  static const double xl2  = 32;
  static const double xl3  = 40;
  static const double xl4  = 48;
  static const double xl5  = 64;
  static const double xl6  = 80;
}

// ============================================================
// BORDER RADII
// ============================================================
class CR {
  CR._();
  static const double none = 0;
  static const double xs   = 2;
  static const double sm   = 4;
  static const double md   = 6;
  static const double lg   = 8;
  static const double def  = 10;
  static const double xl   = 12;
  static const double xl2  = 16;
  static const double xl3  = 24;
  static const double full = 999;
}

// ============================================================
// SEMANTIC THEME TOKENS
// ============================================================
class CT {
  final bool dark;
  const CT(this.dark);

  Color get bg          => dark ? CP.black    : CP.white;
  Color get fg          => dark ? CP.n50      : CP.n950;
  Color get primary     => dark ? CP.n100     : CP.n900;
  Color get primaryFg   => dark ? CP.n950     : CP.n50;
  Color get secondary   => dark ? CP.n800     : CP.n100;
  Color get secondaryFg => dark ? CP.n100     : CP.n900;
  Color get muted       => dark ? CP.n900     : CP.n100;
  Color get mutedFg     => dark ? CP.n400     : CP.n500;
  Color get accent      => dark ? CP.n900     : CP.n100;
  Color get accentFg    => dark ? CP.n100     : CP.n900;
  Color get destructive => dark ? CP.red400   : CP.red600;
  Color get destructiveFg => CP.white;
  Color get border      => dark ? CP.n800     : CP.n200;
  Color get input       => dark ? CP.n800     : CP.n200;
  Color get ring        => dark ? CP.n400     : CP.n950;
  Color get card        => dark ? CP.n950     : CP.white;
  Color get cardFg      => dark ? CP.n50      : CP.n950;
  Color get green       => CP.green600;
  Color get amber       => CP.amber600;
  Color get overlay     => const Color(0x99000000);

  BoxShadow get shadowSm => BoxShadow(
    color: Colors.black.withOpacity(dark ? 0.3 : 0.1),
    blurRadius: 3,
    offset: const Offset(0, 1),
  );
  BoxShadow get shadowMd => BoxShadow(
    color: Colors.black.withOpacity(dark ? 0.3 : 0.1),
    blurRadius: 6,
    offset: const Offset(0, 4),
  );
  BoxShadow get shadowLg => BoxShadow(
    color: Colors.black.withOpacity(dark ? 0.35 : 0.1),
    blurRadius: 15,
    offset: const Offset(0, 10),
  );
}

// ============================================================
// TEXT STYLES — Geist via Google Fonts
// ============================================================
class CTxt {
  CTxt._();

  static TextStyle sans({
    double size = 15,
    FontWeight weight = FontWeight.w400,
    double? lineHeight,
    double? letterSpacing,
    Color? color,
  }) =>
      GoogleFonts.geist(
        fontSize: size,
        fontWeight: weight,
        height: lineHeight != null ? lineHeight / size : null,
        letterSpacing: letterSpacing,
        color: color,
      );

  static TextStyle mono({
    double size = 13,
    FontWeight weight = FontWeight.w400,
    double? lineHeight,
    double? letterSpacing,
    Color? color,
  }) =>
      GoogleFonts.geistMono(
        fontSize: size,
        fontWeight: weight,
        height: lineHeight != null ? lineHeight / size : null,
        letterSpacing: letterSpacing,
        color: color,
      );
}

// ============================================================
// INHERITED THEME WIDGET — pass CT down the tree
// ============================================================
class CubicleTheme extends InheritedWidget {
  final CT t;
  const CubicleTheme({super.key, required this.t, required super.child});

  static CT of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<CubicleTheme>()!.t;
  }

  @override
  bool updateShouldNotify(CubicleTheme old) => old.t.dark != t.dark;
}
