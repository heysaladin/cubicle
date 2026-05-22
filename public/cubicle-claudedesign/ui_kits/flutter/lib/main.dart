// Cubicle Mobile UI Kit — Flutter Showcase
// Run: flutter run
// Requires: google_fonts package (see pubspec.yaml)

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'tokens.dart';
import 'components.dart';
import 'screens.dart';

void main() {
  runApp(const CubicleKitApp());
}

// ============================================================
// ROOT APP
// ============================================================
class CubicleKitApp extends StatefulWidget {
  const CubicleKitApp({super.key});

  @override
  State<CubicleKitApp> createState() => _CubicleKitAppState();
}

class _CubicleKitAppState extends State<CubicleKitApp> {
  bool _dark = false;

  @override
  Widget build(BuildContext context) {
    final t = CT(_dark);
    return CubicleTheme(
      t: t,
      child: MaterialApp(
        title: 'Cubicle · Flutter UI Kit',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          colorScheme: ColorScheme(
            brightness: _dark ? Brightness.dark : Brightness.light,
            primary: t.primary, onPrimary: t.primaryFg,
            secondary: t.secondary, onSecondary: t.secondaryFg,
            error: t.destructive, onError: t.destructiveFg,
            background: t.bg, onBackground: t.fg,
            surface: t.card, onSurface: t.fg,
          ),
          textTheme: GoogleFonts.geistTextTheme(),
          scaffoldBackgroundColor: t.bg,
        ),
        home: KitShowcase(dark: _dark, onToggleDark: () => setState(() => _dark = !_dark)),
      ),
    );
  }
}

// ============================================================
// PHONE FRAME WIDGET
// ============================================================
class PhoneFrame extends StatelessWidget {
  final Widget child;
  final bool dark;
  final String? label;

  const PhoneFrame({super.key, required this.child, this.dark = false, this.label});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    const double w = 320;
    const double h = 693;
    return Column(
      children: [
        Container(
          width: w, height: h,
          clipBehavior: Clip.antiAlias,
          decoration: BoxDecoration(
            color: dark ? CP.n950 : CP.white,
            borderRadius: BorderRadius.circular(40),
            border: Border.all(color: dark ? CP.n700 : CP.n200, width: 2),
            boxShadow: [
              BoxShadow(color: Colors.black.withOpacity(0.15), blurRadius: 30, offset: const Offset(0, 10)),
            ],
          ),
          child: Stack(
            children: [
              // Screen content in its own theme
              CubicleTheme(t: CT(dark), child: child),
              // Status bar notch
              Positioned(
                top: 0, left: 0, right: 0,
                child: Container(
                  height: 44,
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Row(
                    children: [
                      Text('9:41', style: CTxt.sans(size: 13, weight: FontWeight.w600, color: dark ? CP.n50 : CP.n950)),
                      const Spacer(),
                      Icon(Icons.signal_cellular_alt, size: 14, color: dark ? CP.n50 : CP.n950),
                      const SizedBox(width: 4),
                      Icon(Icons.wifi, size: 14, color: dark ? CP.n50 : CP.n950),
                      const SizedBox(width: 4),
                      Icon(Icons.battery_5_bar, size: 14, color: dark ? CP.n50 : CP.n950),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
        if (label != null) ...[
          const SizedBox(height: 12),
          Text(
            label!.toUpperCase(),
            style: CTxt.mono(size: 11, letterSpacing: 1.5, color: t.mutedFg),
          ),
        ],
      ],
    );
  }
}

// ============================================================
// SECTION WRAPPER
// ============================================================
class KitSection extends StatelessWidget {
  final String title;
  final List<Widget> phones;

  const KitSection({super.key, required this.title, required this.phones});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Padding(
      padding: const EdgeInsets.fromLTRB(CS.xl2, CS.xl3, CS.xl2, 0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.only(bottom: CS.lg),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title.toUpperCase(), style: CTxt.mono(size: 11, letterSpacing: 1.5, color: t.mutedFg)),
                Container(height: 1, color: t.border, margin: const EdgeInsets.only(top: CS.sm)),
              ],
            ),
          ),
          Wrap(spacing: CS.xl2, runSpacing: CS.xl2, children: phones),
        ],
      ),
    );
  }
}

// ============================================================
// MAIN SHOWCASE
// ============================================================
class KitShowcase extends StatefulWidget {
  final bool dark;
  final VoidCallback onToggleDark;

  const KitShowcase({super.key, required this.dark, required this.onToggleDark});

  @override
  State<KitShowcase> createState() => _KitShowcaseState();
}

class _KitShowcaseState extends State<KitShowcase> {

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    final d = widget.dark;

    return Scaffold(
      backgroundColor: t.bg,
      body: CustomScrollView(
        slivers: [
          // ── Header ──
          SliverToBoxAdapter(
            child: Container(
              color: t.bg.withOpacity(0.9),
              padding: EdgeInsets.only(
                top: MediaQuery.of(context).padding.top + CS.md,
                left: CS.xl2, right: CS.xl2, bottom: CS.md,
              ),
              child: Row(
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Cubicle · Flutter', style: CTxt.sans(size: 15, weight: FontWeight.w700, letterSpacing: -0.4, color: t.fg)),
                      Text('UI Kit · v1.4', style: CTxt.mono(size: 13, color: t.mutedFg)),
                    ],
                  ),
                  const Spacer(),
                  GestureDetector(
                    onTap: widget.onToggleDark,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: CS.sm, vertical: CS.s2xs + 2),
                      decoration: BoxDecoration(
                        border: Border.all(color: t.input),
                        borderRadius: BorderRadius.circular(CR.lg),
                      ),
                      child: Row(
                        children: [
                          Icon(d ? Icons.light_mode_outlined : Icons.dark_mode_outlined, size: 14, color: t.fg),
                          const SizedBox(width: CS.s2xs + 2),
                          Text(d ? 'Light' : 'Dark', style: CTxt.sans(size: 13, color: t.fg)),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),

          // ── 1. System Screens ──
          SliverToBoxAdapter(
            child: KitSection(
              title: 'System Screens',
              phones: [
                PhoneFrame(dark: d, label: 'Splash',      child: const SplashScreen()),
                PhoneFrame(dark: d, label: 'Maintenance', child: const MaintenanceScreen()),
                PhoneFrame(dark: d, label: 'Offline',     child: const OfflineScreen()),
                PhoneFrame(dark: d, label: 'Error',       child: const ErrorScreen()),
              ],
            ),
          ),

          // ── 2. Onboarding ──
          SliverToBoxAdapter(
            child: KitSection(
              title: 'Onboarding',
              phones: [
                PhoneFrame(dark: d, label: 'Intro slides', child: const OnboardingScreen()),
              ],
            ),
          ),

          // ── 3. Authentication ──
          SliverToBoxAdapter(
            child: KitSection(
              title: 'Authentication',
              phones: [
                PhoneFrame(dark: d, label: 'Sign in',        child: const LoginScreen()),
                PhoneFrame(dark: d, label: 'Register',       child: const RegisterScreen()),
                PhoneFrame(dark: d, label: 'Forgot password',child: const ForgotPasswordScreen()),
                PhoneFrame(dark: d, label: 'OTP verify',     child: const OTPScreen()),
              ],
            ),
          ),

          // ── 4. Home ──
          SliverToBoxAdapter(
            child: KitSection(
              title: 'Home — Dashboard',
              phones: [
                PhoneFrame(dark: d, label: 'Dashboard', child: const HomeScreen()),
              ],
            ),
          ),

          // ── 5. Navigation ──
          SliverToBoxAdapter(
            child: KitSection(
              title: 'Main Navigation — Tabs',
              phones: [
                PhoneFrame(dark: d, label: 'Search',  child: const SearchScreen()),
                PhoneFrame(dark: d, label: 'Create',  child: const CreateScreen()),
                PhoneFrame(dark: d, label: 'Inbox',   child: const InboxScreen()),
                PhoneFrame(dark: d, label: 'Profile', child: const ProfileScreen()),
              ],
            ),
          ),

          // ── 6. Content ──
          SliverToBoxAdapter(
            child: KitSection(
              title: 'Content — List / Feed / Detail',
              phones: [
                PhoneFrame(dark: d, label: 'List / Feed',   child: const ListFeedScreen()),
                PhoneFrame(dark: d, label: 'Item detail',   child: const ItemDetailScreen()),
                PhoneFrame(dark: d, label: 'Transactions',  child: const TransactionsScreen()),
              ],
            ),
          ),

          // ── 7. Detail & Forms ──
          SliverToBoxAdapter(
            child: KitSection(
              title: 'Detail & Create / Edit',
              phones: [
                PhoneFrame(dark: d, label: 'Transaction detail', child: const TransactionDetailScreen()),
                PhoneFrame(dark: d, label: 'Notification detail', child: const NotificationDetailScreen()),
              ],
            ),
          ),

          // ── 8. Settings & Support ──
          SliverToBoxAdapter(
            child: KitSection(
              title: 'Settings & Support',
              phones: [
                PhoneFrame(dark: d, label: 'Settings', child: const SettingsScreen()),
                PhoneFrame(dark: d, label: 'Help & FAQ', child: const HelpScreen()),
              ],
            ),
          ),

          // ── Footer ──
          SliverToBoxAdapter(
            child: Container(
              margin: const EdgeInsets.only(top: CS.xl3),
              padding: const EdgeInsets.symmetric(horizontal: CS.xl2, vertical: CS.xl3),
              decoration: BoxDecoration(border: Border(top: BorderSide(color: t.border))),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text('Cubicle Design System · Flutter UI Kit', style: CTxt.mono(size: 13, color: t.mutedFg)),
                  Text('2026', style: CTxt.mono(size: 13, color: t.mutedFg)),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
