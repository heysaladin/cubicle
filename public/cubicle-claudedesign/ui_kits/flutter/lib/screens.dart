// Cubicle Mobile UI Kit — Flutter Screens
// All 21 app screens — pixel-perfect match to Screens.jsx

import 'package:flutter/material.dart';
import 'tokens.dart';
import 'components.dart';

// ============================================================
// 1. SPLASH SCREEN
// ============================================================
class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.bg,
      child: Stack(
        alignment: Alignment.center,
        children: [
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 64, height: 64,
                decoration: BoxDecoration(color: t.fg, borderRadius: BorderRadius.circular(14)),
              ),
              const SizedBox(height: CS.md),
              Text('cubicle', style: CTxt.sans(size: 22, weight: FontWeight.w700, letterSpacing: -0.7, color: t.fg)),
            ],
          ),
          Positioned(
            bottom: 80,
            child: SizedBox(
              width: 20, height: 20,
              child: CircularProgressIndicator(strokeWidth: 2.5, color: t.primary, backgroundColor: t.muted),
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 2. MAINTENANCE SCREEN
// ============================================================
class MaintenanceScreen extends StatelessWidget {
  const MaintenanceScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CLargeTitleBar(title: 'Maintenance'),
          Expanded(
            child: CEmptyState(
              icon: Icons.settings_outlined,
              title: 'Down for maintenance',
              desc: "We're making improvements. This won't take long — we'll be back shortly.",
              action: Column(
                children: [
                  Text('Estimated time', style: CTxt.mono(size: 11, letterSpacing: 1, color: t.mutedFg)),
                  const SizedBox(height: CS.xs),
                  Text('~15 min', style: CTxt.sans(size: 28, weight: FontWeight.w700, letterSpacing: -0.8, color: t.fg)),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 3. OFFLINE SCREEN
// ============================================================
class OfflineScreen extends StatelessWidget {
  const OfflineScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CLargeTitleBar(title: 'Connection lost'),
          Expanded(
            child: CEmptyState(
              icon: Icons.wifi_off,
              title: "You're offline",
              desc: "Check your connection and we'll pick up where you left off.",
              action: CBtn(
                onTap: () {},
                child: Row(mainAxisSize: MainAxisSize.min, children: [
                  const Icon(Icons.wifi, size: 14),
                  const SizedBox(width: CS.xs),
                  const Text('Retry'),
                ]),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 4. ERROR SCREEN
// ============================================================
class ErrorScreen extends StatelessWidget {
  const ErrorScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CLargeTitleBar(title: 'Error'),
          Expanded(
            child: CEmptyState(
              icon: Icons.warning_amber_outlined,
              title: 'Something went wrong',
              desc: "We couldn't load this page. Try again or contact support if the problem persists.",
              action: Wrap(spacing: CS.xs, children: [
                CBtn(onTap: () {}, child: Row(mainAxisSize: MainAxisSize.min, children: [const Icon(Icons.refresh, size: 14), const SizedBox(width: CS.xs), const Text('Try again')])),
                CBtn(variant: BtnVariant.outline, onTap: () {}, child: Row(mainAxisSize: MainAxisSize.min, children: [const Icon(Icons.mail_outline, size: 14), const SizedBox(width: CS.xs), const Text('Support')])),
              ]),
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 5. ONBOARDING SCREEN
// ============================================================
class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({super.key});

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  int _i = 0;
  static const _slides = [
    (title: 'Quiet by design.', desc: 'A focus-first workspace that stays out of your way until you need it.', icon: Icons.bolt),
    (title: 'Your stack, tokenized.', desc: 'Every color, radius and shadow lives as a CSS variable. Brand it in minutes.', icon: Icons.layers_outlined),
    (title: 'Ship considered work.', desc: 'From prototype to production on one system, one voice, one type.', icon: Icons.security_outlined),
  ];

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    final s = _slides[_i];
    return Container(
      color: t.bg,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(CS.xl2, CS.xl6, CS.xl2, CS.xl3),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              children: [
                Container(
                  width: 180, height: 180,
                  decoration: BoxDecoration(color: t.muted, borderRadius: BorderRadius.circular(24), border: Border.all(color: t.border)),
                  child: Icon(s.icon, size: 48, color: t.mutedFg),
                ),
                const SizedBox(height: CS.xl2),
                Text(s.title, style: CTxt.sans(size: 30, weight: FontWeight.w600, lineHeight: 34, letterSpacing: -1.2, color: t.fg), textAlign: TextAlign.center),
                const SizedBox(height: CS.sm),
                Text(s.desc, style: CTxt.sans(size: 16, lineHeight: 24, color: t.mutedFg), textAlign: TextAlign.center),
              ],
            ),
            Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: List.generate(_slides.length, (k) {
                    final active = k == _i;
                    return AnimatedContainer(
                      duration: const Duration(milliseconds: 200),
                      margin: const EdgeInsets.symmetric(horizontal: 3),
                      width: active ? 20 : 6, height: 6,
                      decoration: BoxDecoration(
                        color: active ? t.fg : t.border,
                        borderRadius: BorderRadius.circular(3),
                      ),
                    );
                  }),
                ),
                const SizedBox(height: CS.lg),
                if (_i < _slides.length - 1) ...[
                  CBtn(variant: BtnVariant.def, size: BtnSize.full, onTap: () => setState(() => _i++), child: const Text('Continue')),
                  const SizedBox(height: CS.sm),
                  CBtn(variant: BtnVariant.ghost, size: BtnSize.sm, onTap: () {}, child: const Text('Skip')),
                ] else ...[
                  CBtn(variant: BtnVariant.def, size: BtnSize.full, onTap: () {}, child: const Text('Get started')),
                  const SizedBox(height: CS.sm),
                  CBtn(variant: BtnVariant.ghost, size: BtnSize.sm, onTap: () => setState(() => _i = 0), child: const Text('Back to start')),
                ],
              ],
            ),
          ],
        ),
      ),
    );
  }
}

// ============================================================
// 6. LOGIN SCREEN
// ============================================================
class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _email = TextEditingController(text: 'mira@relay.dev');
  final _pw    = TextEditingController();
  bool _show   = false;

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CAppBar(title: 'Sign in', onBack: () {}),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.all(CS.md),
              children: [
                const SizedBox(height: CS.xs),
                Text('Welcome back.', style: CTxt.sans(size: 26, weight: FontWeight.w600, lineHeight: 30, letterSpacing: -0.8, color: t.fg)),
                const SizedBox(height: CS.s2xs),
                Text('Enter your credentials to continue.', style: CTxt.sans(size: 15, lineHeight: 22, color: t.mutedFg)),
                const SizedBox(height: CS.lg),
                CField(label: 'Email', child: CInput(controller: _email, placeholder: 'you@work.com', keyboardType: TextInputType.emailAddress)),
                const SizedBox(height: CS.md),
                CField(
                  label: 'Password', hint: 'At least 8 characters.',
                  child: Stack(children: [
                    CInput(controller: _pw, placeholder: '••••••••', obscure: !_show),
                    Positioned(
                      right: 4, top: 4,
                      child: CIconBtn(icon: _show ? Icons.visibility_off_outlined : Icons.visibility_outlined, onTap: () => setState(() => _show = !_show), color: t.mutedFg),
                    ),
                  ]),
                ),
                const SizedBox(height: CS.md),
                CBtn(variant: BtnVariant.def, size: BtnSize.full, onTap: () {}, child: const Text('Continue')),
                const SizedBox(height: CS.sm),
                CBtn(variant: BtnVariant.outline, size: BtnSize.full, onTap: () {}, child: Row(mainAxisSize: MainAxisSize.min, children: [const Icon(Icons.fingerprint, size: 18), const SizedBox(width: CS.xs), const Text('Use Face ID')])),
                const SizedBox(height: CS.md),
                Text('Forgot your password?', style: CTxt.sans(size: 14, weight: FontWeight.w500, color: t.mutedFg), textAlign: TextAlign.center),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 7. OTP SCREEN
// ============================================================
class OTPScreen extends StatelessWidget {
  const OTPScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CAppBar(title: 'Verify', onBack: () {}),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.all(CS.md),
              children: [
                const SizedBox(height: CS.xs),
                Text('Check your email', style: CTxt.sans(size: 26, weight: FontWeight.w600, lineHeight: 30, letterSpacing: -0.8, color: t.fg)),
                const SizedBox(height: CS.s2xs),
                Text("We sent a 6-digit code to mira@relay.dev. Enter it below to continue.", style: CTxt.sans(size: 15, lineHeight: 22, color: t.mutedFg)),
                const SizedBox(height: CS.xl),
                COTPRow(code: const ['2', '4', '7', '', '', ''], focusedIndex: 3),
                const SizedBox(height: CS.xl),
                CBtn(variant: BtnVariant.def, size: BtnSize.full, onTap: () {}, child: const Text('Verify and continue')),
                const SizedBox(height: CS.sm),
                Center(child: CBtn(variant: BtnVariant.ghost, size: BtnSize.sm, onTap: () {}, child: const Text('Resend code in 28s'))),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 8. REGISTER SCREEN
// ============================================================
class RegisterScreen extends StatefulWidget {
  const RegisterScreen({super.key});

  @override
  State<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final _name  = TextEditingController();
  final _email = TextEditingController();
  final _pw    = TextEditingController();
  bool _agreed = false;

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CAppBar(title: 'Create account', onBack: () {}),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.all(CS.md),
              children: [
                const SizedBox(height: CS.xs),
                Text('Get started.', style: CTxt.sans(size: 26, weight: FontWeight.w600, letterSpacing: -0.8, color: t.fg)),
                const SizedBox(height: CS.s2xs),
                Text('Create your Cubicle account.', style: CTxt.sans(size: 15, lineHeight: 22, color: t.mutedFg)),
                const SizedBox(height: CS.lg),
                CField(label: 'Full name', child: CInput(controller: _name, placeholder: 'Mira Chen')),
                const SizedBox(height: CS.md),
                CField(label: 'Work email', child: CInput(controller: _email, placeholder: 'you@work.com', keyboardType: TextInputType.emailAddress)),
                const SizedBox(height: CS.md),
                CField(label: 'Password', hint: 'At least 8 characters.', child: CInput(controller: _pw, placeholder: '••••••••', obscure: true)),
                const SizedBox(height: CS.md),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    CCheckbox(value: _agreed, onChanged: (v) => setState(() => _agreed = v)),
                    const SizedBox(width: CS.sm),
                    Expanded(child: Text("I agree to the Terms of Service and Privacy Policy.", style: CTxt.sans(size: 14, lineHeight: 21, color: t.mutedFg))),
                  ],
                ),
                const SizedBox(height: CS.md),
                CBtn(variant: BtnVariant.def, size: BtnSize.full, onTap: () {}, child: const Text('Create account')),
                const SizedBox(height: CS.sm),
                RichText(
                  textAlign: TextAlign.center,
                  text: TextSpan(
                    style: CTxt.sans(size: 14, color: t.mutedFg),
                    children: [
                      const TextSpan(text: 'Already have an account? '),
                      TextSpan(text: 'Sign in', style: CTxt.sans(size: 14, weight: FontWeight.w500, color: t.fg)),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 9. FORGOT PASSWORD SCREEN
// ============================================================
class ForgotPasswordScreen extends StatefulWidget {
  const ForgotPasswordScreen({super.key});

  @override
  State<ForgotPasswordScreen> createState() => _ForgotPasswordScreenState();
}

class _ForgotPasswordScreenState extends State<ForgotPasswordScreen> {
  final _email = TextEditingController(text: 'mira@relay.dev');
  bool _sent = false;

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    if (_sent) {
      return Container(
        color: t.bg,
        child: Column(
          children: [
            CAppBar(title: 'Check your email', onBack: () {}),
            Expanded(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    width: 56, height: 56,
                    decoration: BoxDecoration(color: t.green.withOpacity(0.12), borderRadius: BorderRadius.circular(14)),
                    child: Icon(Icons.check, size: 26, color: t.green),
                  ),
                  const SizedBox(height: CS.sm),
                  Text('Reset link sent', style: CTxt.sans(size: 20, weight: FontWeight.w600, color: t.fg)),
                  const SizedBox(height: CS.xs),
                  Text('We sent a reset link to mira@relay.dev. Check your inbox.', style: CTxt.sans(size: 14, lineHeight: 21, color: t.mutedFg), textAlign: TextAlign.center),
                  const SizedBox(height: CS.xl),
                  Padding(padding: const EdgeInsets.symmetric(horizontal: CS.md), child: CBtn(variant: BtnVariant.def, size: BtnSize.full, onTap: () {}, child: const Text('Back to sign in'))),
                ],
              ),
            ),
          ],
        ),
      );
    }
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CAppBar(title: 'Forgot password', onBack: () {}),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.all(CS.md),
              children: [
                const SizedBox(height: CS.xs),
                Text('Reset password.', style: CTxt.sans(size: 26, weight: FontWeight.w600, letterSpacing: -0.8, color: t.fg)),
                const SizedBox(height: CS.s2xs),
                Text("Enter your email and we'll send a reset link.", style: CTxt.sans(size: 15, lineHeight: 22, color: t.mutedFg)),
                const SizedBox(height: CS.lg),
                CField(label: 'Email', child: CInput(controller: _email, placeholder: 'you@work.com', keyboardType: TextInputType.emailAddress)),
                const SizedBox(height: CS.md),
                CBtn(variant: BtnVariant.def, size: BtnSize.full, onTap: () => setState(() => _sent = true), child: const Text('Send reset link')),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 10. HOME / DASHBOARD SCREEN
// ============================================================
class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String _range = '30d';

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CLargeTitleBar(
            kicker: 'Cubicle',
            title: 'Good morning, Mira.',
            action: CIconBtn(icon: Icons.notifications_outlined),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(CS.md, CS.md, CS.md, 100),
              children: [
                GridView.count(
                  shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
                  crossAxisCount: 2, childAspectRatio: 1.5, mainAxisSpacing: CS.sm, crossAxisSpacing: CS.sm,
                  children: [
                    CKpi(label: 'MRR',    value: r'$48.2k', delta: '+12.4%', up: true),
                    CKpi(label: 'Active', value: '2,148',   delta: '+3.1%',  up: true),
                    CKpi(label: 'Churn',  value: '1.8%',    delta: '-0.4%',  up: false),
                    CKpi(label: 'NPS',    value: '62',       delta: '+5',     up: true),
                  ],
                ),
                const SizedBox(height: CS.md),
                CCard(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                            Text('Revenue', style: CTxt.sans(size: 13, color: t.mutedFg)),
                            Text(r'$48,214', style: CTxt.sans(size: 24, weight: FontWeight.w700, letterSpacing: -0.6, color: t.fg)),
                          ]),
                          const Spacer(),
                          CChipRow(chips: ['7d','30d','90d'].map((r) => CChip(active: _range == r, onTap: () => setState(() => _range = r), child: Text(r))).toList()),
                        ],
                      ),
                      const SizedBox(height: CS.sm),
                      CLineChart(data: const [12,18,14,22,28,24,30,34,31,40,38,48]),
                    ],
                  ),
                ),
                const SizedBox(height: CS.md),
                Text('QUICK ACTIONS', style: CTxt.mono(size: 11, letterSpacing: 1, color: t.mutedFg)),
                const SizedBox(height: CS.xs),
                GridView.count(
                  shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
                  crossAxisCount: 4, childAspectRatio: 0.9, mainAxisSpacing: CS.xs, crossAxisSpacing: CS.xs,
                  children: [
                    for (final pair in [
                      (Icons.add, 'New'), (Icons.credit_card_outlined, 'Pay'),
                      (Icons.share_outlined, 'Share'), (Icons.show_chart, 'Report'),
                    ])
                      GestureDetector(
                        onTap: () {},
                        child: CCard(
                          padding: const EdgeInsets.symmetric(horizontal: CS.xs, vertical: 14),
                          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                            Container(
                              width: 36, height: 36,
                              decoration: BoxDecoration(color: t.muted, borderRadius: BorderRadius.circular(CR.full)),
                              child: Icon(pair.$1, size: 18, color: t.fg),
                            ),
                            const SizedBox(height: CS.s2xs + 2),
                            Text(pair.$2, style: CTxt.sans(size: 12, weight: FontWeight.w500, color: t.fg)),
                          ]),
                        ),
                      ),
                  ],
                ),
                const SizedBox(height: CS.md),
                Row(
                  children: [
                    Text('RECENT ACTIVITY', style: CTxt.mono(size: 11, letterSpacing: 1, color: t.mutedFg)),
                    const Spacer(),
                    Text('See all', style: CTxt.sans(size: 11, color: t.fg)),
                  ],
                ),
                const SizedBox(height: CS.xs),
                Container(
                  decoration: BoxDecoration(color: t.card, borderRadius: BorderRadius.circular(CR.xl), border: Border.all(color: t.border)),
                  child: Column(
                    children: [
                      CListItem(title: 'Payment from Acme Corp', subtitle: r'$2,400 · 2 hours ago', leading: const Icon(Icons.account_balance_wallet_outlined), trailing: const CBadge(label: 'Paid', variant: BadgeVariant.success)),
                      CListItem(title: 'New signup — Lana Reyes', subtitle: 'Starter plan · 4h ago', leading: const Icon(Icons.person_outline), trailing: Icon(Icons.chevron_right, color: CubicleTheme.of(context).mutedFg, size: 14)),
                      CListItem(title: 'Invoice #1842 overdue', subtitle: 'Humm Inc · 1d ago', leading: const Icon(Icons.warning_amber_outlined), trailing: const CBadge(label: 'Late', variant: BadgeVariant.warning)),
                      CListItem(title: 'Report exported', subtitle: 'Weekly KPIs · 2d ago', leading: const Icon(Icons.show_chart), trailing: Icon(Icons.chevron_right, color: CubicleTheme.of(context).mutedFg, size: 14), showDivider: false),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 11. SEARCH SCREEN
// ============================================================
class SearchScreen extends StatefulWidget {
  const SearchScreen({super.key});

  @override
  State<SearchScreen> createState() => _SearchScreenState();
}

class _SearchScreenState extends State<SearchScreen> {
  final _ctrl = TextEditingController();
  String _filter = 'all';
  static const _data = [
    (t: 'Acme Corp',        s: 'Customer · Enterprise', icon: Icons.account_balance_wallet_outlined),
    (t: 'Weekly KPIs',      s: 'Report · Updated today', icon: Icons.show_chart),
    (t: 'Humm Inc',         s: 'Customer · Pro',         icon: Icons.account_balance_wallet_outlined),
    (t: 'Onboarding flow',  s: 'Project · In progress',  icon: Icons.layers_outlined),
    (t: 'Mira Chen',        s: 'Teammate · Design',      icon: Icons.person_outline),
    (t: 'Q1 Roadmap',       s: 'Doc · Edited 2d ago',    icon: Icons.tag),
  ];

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    final q = _ctrl.text.toLowerCase();
    final filtered = _data.where((d) => q.isEmpty || d.t.toLowerCase().contains(q) || d.s.toLowerCase().contains(q)).toList();
    final cats = [('all','All'),('customers','Customers'),('reports','Reports'),('projects','Projects'),('people','People')];
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CLargeTitleBar(title: 'Search'),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(CS.md, CS.md, CS.md, 100),
              children: [
                CSearchInput(controller: _ctrl, placeholder: 'Search everything'),
                const SizedBox(height: CS.sm),
                CChipRow(
                  scroll: true,
                  chips: cats.map((c) => CChip(active: _filter == c.$1, onTap: () => setState(() => _filter = c.$1), child: Text(c.$2))).toList(),
                ),
                const SizedBox(height: CS.sm),
                if (filtered.isEmpty)
                  CEmptyState(icon: Icons.search, title: 'Nothing here yet', desc: 'No results matching "${_ctrl.text}".')
                else
                  Container(
                    decoration: BoxDecoration(color: t.card, borderRadius: BorderRadius.circular(CR.xl), border: Border.all(color: t.border)),
                    child: Column(
                      children: filtered.asMap().entries.map((e) => CListItem(
                        title: e.value.t, subtitle: e.value.s,
                        leading: Icon(e.value.icon),
                        trailing: Icon(Icons.chevron_right, color: t.mutedFg, size: 14),
                        showDivider: e.key < filtered.length - 1,
                      )).toList(),
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 12. CREATE / FORM SCREEN
// ============================================================
class CreateScreen extends StatefulWidget {
  const CreateScreen({super.key});

  @override
  State<CreateScreen> createState() => _CreateScreenState();
}

class _CreateScreenState extends State<CreateScreen> {
  final _name  = TextEditingController();
  String _cat  = 'general';
  String _prio = 'normal';
  bool _notify = true;
  final _notes = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    final err = _name.text.isNotEmpty && _name.text.length < 3 ? 'Name must be at least 3 characters.' : null;
    return Container(
      color: t.bg,
      child: Column(
        children: [
          Container(
            color: t.bg,
            padding: EdgeInsets.only(top: MediaQuery.of(context).padding.top + 8, left: CS.xs, right: CS.xs, bottom: CS.xs),
            child: Row(
              children: [
                CIconBtn(icon: Icons.close, onTap: () {}),
                Expanded(child: Text('New report', textAlign: TextAlign.center, style: CTxt.sans(size: 17, weight: FontWeight.w600, color: t.fg))),
                CBtn(size: BtnSize.sm, onTap: () {}, child: const Text('Save')),
              ],
            ),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.all(CS.md),
              children: [
                CField(label: 'Name', error: err, child: CInput(controller: _name, placeholder: 'Weekly KPIs')),
                const SizedBox(height: CS.md),
                CField(
                  label: 'Category',
                  child: CChipRow(chips: [('general','General'),('revenue','Revenue'),('growth','Growth'),('ops','Ops')].map((c) =>
                    CChip(active: _cat == c.$1, onTap: () => setState(() => _cat = c.$1), child: Text(c.$2))).toList()),
                ),
                const SizedBox(height: CS.md),
                CField(
                  label: 'Priority',
                  child: Column(
                    children: [('low','Low'),('normal','Normal'),('high','High')].map((p) =>
                      Container(
                        padding: const EdgeInsets.symmetric(vertical: 10),
                        decoration: BoxDecoration(border: Border(bottom: BorderSide(color: t.border))),
                        child: Row(children: [
                          CRadio(value: _prio == p.$1, onTap: () => setState(() => _prio = p.$1)),
                          const SizedBox(width: CS.sm),
                          Text(p.$2, style: CTxt.sans(size: 15, color: t.fg)),
                        ]),
                      )
                    ).toList(),
                  ),
                ),
                const SizedBox(height: CS.md),
                Row(
                  children: [
                    Expanded(child: Text('Notify team on publish', style: CTxt.sans(size: 15, weight: FontWeight.w500, color: t.fg))),
                    CSwitch(value: _notify, onChanged: (v) => setState(() => _notify = v)),
                  ],
                ),
                const SizedBox(height: CS.md),
                CField(label: 'Notes', child: CInput(controller: _notes, placeholder: 'Optional context for your team.', maxLines: 4)),
                const SizedBox(height: CS.md),
                CBtn(variant: BtnVariant.destructive, size: BtnSize.full, onTap: () {}, child: Row(mainAxisSize: MainAxisSize.min, children: [const Icon(Icons.delete_outline, size: 14), const SizedBox(width: CS.xs), const Text('Discard draft')])),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 13. INBOX SCREEN
// ============================================================
class InboxScreen extends StatefulWidget {
  const InboxScreen({super.key});

  @override
  State<InboxScreen> createState() => _InboxScreenState();
}

class _InboxScreenState extends State<InboxScreen> {
  String _tab = 'all';
  static final _items = [
    (cat:'alert',   t:'Invoice #1842 overdue',  s:'Humm Inc · Payment 2d late',   time:'Just now', unread:true,  icon:Icons.warning_amber_outlined),
    (cat:'mention', t:'Lana mentioned you',      s:'In "Q1 Roadmap" doc',         time:'1h',       unread:true,  icon:Icons.tag),
    (cat:'alert',   t:'Deploy succeeded',        s:'cubicle@1.4.2 → production',  time:'3h',       unread:false, icon:Icons.check),
    (cat:'mention', t:'Jamal replied',           s:"Let's ship it next week.",    time:'Yesterday', unread:false, icon:Icons.mail_outline),
    (cat:'alert',   t:'Plan upgrade successful', s:'Pro · \$24/mo · annual',      time:'2d',       unread:false, icon:Icons.credit_card_outlined),
  ];

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    final filtered = _tab == 'all' ? _items : _items.where((i) => i.cat == _tab).toList();
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CLargeTitleBar(title: 'Inbox', action: CIconBtn(icon: Icons.check, onTap: () {})),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(CS.md, CS.md, CS.md, 100),
              children: [
                CChipRow(chips: [('all','All'),('alert','Alerts'),('mention','Mentions')].map((c) =>
                  CChip(active: _tab == c.$1, onTap: () => setState(() => _tab = c.$1), child: Text(c.$2))).toList()),
                const SizedBox(height: CS.sm),
                if (filtered.isEmpty)
                  CEmptyState(icon: Icons.all_inbox_outlined, title: 'Inbox zero', desc: "You're all caught up. New notifications will appear here.")
                else
                  Container(
                    decoration: BoxDecoration(color: t.card, borderRadius: BorderRadius.circular(CR.xl), border: Border.all(color: t.border)),
                    child: Column(
                      children: filtered.asMap().entries.map((e) {
                        final item = e.value;
                        return CListItem(
                          title: item.t, subtitle: item.s,
                          leading: Icon(item.icon),
                          trailing: Text(item.time, style: CTxt.mono(size: 12, color: t.mutedFg)),
                          showDivider: e.key < filtered.length - 1,
                          onTap: () {},
                        );
                      }).toList(),
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 14. PROFILE SCREEN
// ============================================================
class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CLargeTitleBar(title: 'Profile', action: CIconBtn(icon: Icons.settings_outlined, onTap: () {})),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(CS.md, CS.md, CS.md, 100),
              children: [
                Column(
                  children: [
                    const CAvatar(initials: 'MC', large: true),
                    const SizedBox(height: CS.xs),
                    Text('Mira Chen', style: CTxt.sans(size: 20, weight: FontWeight.w600, letterSpacing: -0.4, color: t.fg)),
                    Text('Head of Design · Relay', style: CTxt.sans(size: 14, color: t.mutedFg)),
                    const SizedBox(height: CS.xs),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        CBtn(variant: BtnVariant.outline, size: BtnSize.sm, onTap: () {}, child: Row(mainAxisSize: MainAxisSize.min, children: [const Icon(Icons.edit_outlined, size: 14), const SizedBox(width: CS.s2xs), const Text('Edit profile')])),
                        const SizedBox(width: CS.xs),
                        CBtn(variant: BtnVariant.outline, size: BtnSize.sm, onTap: () {}, child: Row(mainAxisSize: MainAxisSize.min, children: [const Icon(Icons.share_outlined, size: 14), const SizedBox(width: CS.s2xs), const Text('Share')])),
                      ],
                    ),
                  ],
                ),
                const SizedBox(height: CS.md),
                GridView.count(
                  shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
                  crossAxisCount: 3, childAspectRatio: 1.5, mainAxisSpacing: CS.sm, crossAxisSpacing: CS.sm,
                  children: [
                    CKpi(label: 'Projects', value: '14'),
                    CKpi(label: 'Reports',  value: '37'),
                    CKpi(label: 'Team',     value: '8'),
                  ],
                ),
                const SizedBox(height: CS.md),
                CListHeader(label: 'Account'),
                Container(
                  decoration: BoxDecoration(color: t.card, borderRadius: BorderRadius.circular(CR.xl), border: Border.all(color: t.border)),
                  child: Column(children: [
                    CListItem(title: 'Account details',  leading: const Icon(Icons.person_outline), trailing: Icon(Icons.chevron_right, size: 14, color: t.mutedFg), onTap: () {}),
                    CListItem(title: 'Billing and plan', leading: const Icon(Icons.credit_card_outlined), trailing: const CBadge(label: 'Pro'), onTap: () {}),
                    CListItem(title: 'Team workspaces',  leading: const Icon(Icons.layers_outlined), trailing: Text('2', style: CTxt.sans(size: 13, color: t.mutedFg)), onTap: () {}),
                    CListItem(title: 'Security and privacy', leading: const Icon(Icons.security_outlined), trailing: Icon(Icons.chevron_right, size: 14, color: t.mutedFg), onTap: () {}, showDivider: false),
                  ]),
                ),
                const SizedBox(height: CS.md),
                CListHeader(label: 'Support'),
                Container(
                  decoration: BoxDecoration(color: t.card, borderRadius: BorderRadius.circular(CR.xl), border: Border.all(color: t.border)),
                  child: Column(children: [
                    CListItem(title: 'Help and FAQs',   leading: const Icon(Icons.help_outline), trailing: Icon(Icons.chevron_right, size: 14, color: t.mutedFg), onTap: () {}),
                    CListItem(title: 'Contact support', leading: const Icon(Icons.mail_outline), trailing: Icon(Icons.chevron_right, size: 14, color: t.mutedFg), onTap: () {}),
                    CListItem(title: "What's new",      leading: const Icon(Icons.card_giftcard_outlined), trailing: Icon(Icons.chevron_right, size: 14, color: t.mutedFg), onTap: () {}, showDivider: false),
                  ]),
                ),
                const SizedBox(height: CS.md),
                CBtn(variant: BtnVariant.destructive, size: BtnSize.full, onTap: () {}, child: const Text('Sign out')),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 15. SETTINGS SCREEN
// ============================================================
class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool _dark = false, _biometric = true, _notif = true, _marketing = false;

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CAppBar(title: 'Settings', onBack: () {}),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(CS.md, CS.md, CS.md, 100),
              children: [
                CListHeader(label: 'General'),
                Container(
                  decoration: BoxDecoration(color: t.card, borderRadius: BorderRadius.circular(CR.xl), border: Border.all(color: t.border)),
                  child: Column(children: [
                    CListItem(title: 'Dark mode', leading: Icon(_dark ? Icons.dark_mode_outlined : Icons.light_mode_outlined), trailing: CSwitch(value: _dark, onChanged: (v) => setState(() => _dark = v))),
                    CListItem(title: 'Language', leading: const Icon(Icons.language), trailing: Text('English', style: CTxt.sans(size: 13, color: t.mutedFg)), showDivider: false),
                  ]),
                ),
                const SizedBox(height: CS.md),
                CListHeader(label: 'Security'),
                Container(
                  decoration: BoxDecoration(color: t.card, borderRadius: BorderRadius.circular(CR.xl), border: Border.all(color: t.border)),
                  child: Column(children: [
                    CListItem(title: 'Biometric unlock', subtitle: 'Use Face ID to unlock the app', leading: const Icon(Icons.fingerprint), trailing: CSwitch(value: _biometric, onChanged: (v) => setState(() => _biometric = v))),
                    CListItem(title: 'Change password', leading: const Icon(Icons.lock_outline), trailing: Icon(Icons.chevron_right, size: 14, color: t.mutedFg), showDivider: false),
                  ]),
                ),
                const SizedBox(height: CS.md),
                CListHeader(label: 'Notifications'),
                Container(
                  decoration: BoxDecoration(color: t.card, borderRadius: BorderRadius.circular(CR.xl), border: Border.all(color: t.border)),
                  child: Column(children: [
                    CListItem(title: 'Push notifications', leading: const Icon(Icons.notifications_outlined), trailing: CSwitch(value: _notif, onChanged: (v) => setState(() => _notif = v))),
                    CListItem(title: 'Product updates', subtitle: 'Weekly product emails', leading: const Icon(Icons.mail_outline), trailing: CSwitch(value: _marketing, onChanged: (v) => setState(() => _marketing = v)), showDivider: false),
                  ]),
                ),
                const SizedBox(height: CS.md),
                Text('Cubicle Mobile · v1.4.2 (build 2026.04)', style: CTxt.mono(size: 12, color: t.mutedFg), textAlign: TextAlign.center),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 16. TRANSACTIONS SCREEN
// ============================================================
final _txData = [
  (id:'t1', kind:'in',  who:'Acme Corp',   amt:2400.0,   date:'Today, 10:14',  cat:'Revenue',       icon:Icons.account_balance_wallet_outlined),
  (id:'t2', kind:'out', who:'AWS',          amt:312.40,   date:'Today, 06:00',  cat:'Infrastructure', icon:Icons.language),
  (id:'t3', kind:'in',  who:'Humm Inc',     amt:1800.0,   date:'Yesterday',     cat:'Revenue',       icon:Icons.account_balance_wallet_outlined),
  (id:'t4', kind:'out', who:'Figma',        amt:48.0,     date:'Yesterday',     cat:'Software',      icon:Icons.layers_outlined),
  (id:'t5', kind:'out', who:'Coffee Run',   amt:14.25,    date:'Apr 12',        cat:'Team',          icon:Icons.local_cafe_outlined),
  (id:'t6', kind:'in',  who:'Upland LLC',   amt:960.0,    date:'Apr 10',        cat:'Revenue',       icon:Icons.account_balance_wallet_outlined),
];

class TransactionsScreen extends StatelessWidget {
  const TransactionsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    final inc = _txData.where((tx) => tx.kind == 'in').fold(0.0, (a, tx) => a + tx.amt);
    final out = _txData.where((tx) => tx.kind == 'out').fold(0.0, (a, tx) => a + tx.amt);
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CLargeTitleBar(title: 'Activity', action: CIconBtn(icon: Icons.sort, onTap: () {})),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(CS.md, CS.md, CS.md, 100),
              children: [
                Row(children: [
                  Expanded(child: CKpi(label: 'Incoming', value: '\$${inc.toStringAsFixed(0)}', delta: '+14.2%', up: true)),
                  const SizedBox(width: CS.sm),
                  Expanded(child: CKpi(label: 'Outgoing', value: '\$${out.toStringAsFixed(2)}', delta: '-2.1%', up: false)),
                ]),
                const SizedBox(height: CS.md),
                CCard(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Row(children: [
                    Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text('Last 12 weeks', style: CTxt.sans(size: 13, color: t.mutedFg)),
                      Text('\$${(inc + out).toStringAsFixed(0)}', style: CTxt.sans(size: 24, weight: FontWeight.w700, letterSpacing: -0.6, color: t.fg)),
                    ]),
                    const Spacer(),
                    const CBadge(label: 'Net positive', variant: BadgeVariant.success),
                  ]),
                  const SizedBox(height: CS.sm),
                  CBarChart(data: const [10,14,11,18,14,22,20,26,23,30,28,34]),
                ])),
                const SizedBox(height: CS.md),
                CListHeader(label: 'Recent'),
                Container(
                  decoration: BoxDecoration(color: t.card, borderRadius: BorderRadius.circular(CR.xl), border: Border.all(color: t.border)),
                  child: Column(
                    children: _txData.asMap().entries.map((e) {
                      final tx = e.value;
                      return CListItem(
                        title: tx.who, subtitle: '${tx.cat} · ${tx.date}',
                        leading: Icon(tx.icon),
                        trailing: Text(
                          '${tx.kind == "in" ? "+" : "-"}\$${tx.amt.toStringAsFixed(2)}',
                          style: CTxt.sans(size: 15, weight: FontWeight.w600, color: tx.kind == 'in' ? t.green : t.fg),
                        ),
                        onTap: () {},
                        showDivider: e.key < _txData.length - 1,
                      );
                    }).toList(),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 17. TRANSACTION DETAIL SCREEN
// ============================================================
class TransactionDetailScreen extends StatefulWidget {
  const TransactionDetailScreen({super.key});

  @override
  State<TransactionDetailScreen> createState() => _TransactionDetailScreenState();
}

class _TransactionDetailScreenState extends State<TransactionDetailScreen> {
  bool _showConfirm = false;
  final _tx = _txData[0];

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.muted,
      child: Stack(
        children: [
          Column(
            children: [
              CAppBar(title: 'Transaction', onBack: () {}),
              Expanded(
                child: ListView(
                  padding: const EdgeInsets.fromLTRB(CS.md, CS.md, CS.md, 100),
                  children: [
                    CCard(
                      child: Column(
                        children: [
                          CAvatar(initials: '', large: true),
                          const SizedBox(height: CS.s2xs),
                          Text(_tx.who, style: CTxt.sans(size: 14, color: t.mutedFg)),
                          const SizedBox(height: CS.s2xs),
                          Text('+\$${_tx.amt.toStringAsFixed(2)}', style: CTxt.sans(size: 36, weight: FontWeight.w700, letterSpacing: -1.2, color: t.fg)),
                          const SizedBox(height: CS.s2xs),
                          const CBadge(label: 'Received', variant: BadgeVariant.success),
                        ],
                      ),
                    ),
                    const SizedBox(height: CS.md),
                    Container(
                      decoration: BoxDecoration(color: t.card, borderRadius: BorderRadius.circular(CR.xl), border: Border.all(color: t.border)),
                      child: Column(children: [
                        CListItem(title: _tx.cat,              subtitle: 'Category', showDivider: true),
                        CListItem(title: _tx.date,             subtitle: 'Date',     showDivider: true),
                        CListItem(title: '${_tx.id.toUpperCase()}-2026', subtitle: 'Reference', showDivider: true),
                        CListItem(title: 'Settled', subtitle: 'Status', trailing: const CBadge(label: 'Complete', variant: BadgeVariant.success), showDivider: false),
                      ]),
                    ),
                    const SizedBox(height: CS.md),
                    Row(children: [
                      Expanded(child: CBtn(variant: BtnVariant.outline, size: BtnSize.full, onTap: () {}, child: Row(mainAxisSize: MainAxisSize.min, children: [const Icon(Icons.share_outlined, size: 14), const SizedBox(width: CS.xs), const Text('Share')]))),
                      const SizedBox(width: CS.xs),
                      Expanded(child: CBtn(variant: BtnVariant.outline, size: BtnSize.full, onTap: () {}, child: Row(mainAxisSize: MainAxisSize.min, children: [const Icon(Icons.edit_outlined, size: 14), const SizedBox(width: CS.xs), const Text('Edit')]))),
                    ]),
                    const SizedBox(height: CS.sm),
                    CBtn(variant: BtnVariant.destructive, size: BtnSize.full, onTap: () => setState(() => _showConfirm = true),
                        child: Row(mainAxisSize: MainAxisSize.min, children: [const Icon(Icons.delete_outline, size: 14), const SizedBox(width: CS.xs), const Text('Delete transaction')])),
                  ],
                ),
              ),
            ],
          ),
          if (_showConfirm)
            Positioned.fill(
              child: CAlertDialog(
                title: 'Delete transaction?',
                desc: 'This cannot be undone. The transaction will be removed from all reports.',
                confirm: 'Delete', destructive: true,
                onConfirm: () => setState(() => _showConfirm = false),
                onCancel:  () => setState(() => _showConfirm = false),
              ),
            ),
        ],
      ),
    );
  }
}

// ============================================================
// 18. LIST FEED SCREEN
// ============================================================
class ListFeedScreen extends StatefulWidget {
  const ListFeedScreen({super.key});

  @override
  State<ListFeedScreen> createState() => _ListFeedScreenState();
}

class _ListFeedScreenState extends State<ListFeedScreen> {
  String _filter = 'all';
  final _ctrl = TextEditingController();
  static const _items = [
    (title:'Q1 Revenue Report',    sub:'Updated 2h ago · Finance',  icon:Icons.show_chart,     badge:'New',   bv:BadgeVariant.success),
    (title:'Onboarding Checklist', sub:'6/8 tasks complete · Design', icon:Icons.check_circle_outline, badge:'',  bv:BadgeVariant.def),
    (title:'Infrastructure Costs', sub:'Review needed · DevOps',    icon:Icons.language,       badge:'Alert', bv:BadgeVariant.warning),
    (title:'Team Retro Notes',     sub:'Yesterday · People',        icon:Icons.tag,            badge:'',     bv:BadgeVariant.def),
    (title:'Marketing Leads',      sub:'3d ago · Growth',           icon:Icons.bolt,           badge:'',     bv:BadgeVariant.def),
    (title:'Security Audit',       sub:'Apr 8 · Compliance',        icon:Icons.security_outlined, badge:'Late', bv:BadgeVariant.destructive),
  ];

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    final q = _ctrl.text.toLowerCase();
    final filtered = _items.where((it) => q.isEmpty || it.title.toLowerCase().contains(q)).toList();
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CLargeTitleBar(title: 'Reports', action: CIconBtn(icon: Icons.add, onTap: () {})),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(CS.md, CS.md, CS.md, 100),
              children: [
                CSearchInput(controller: _ctrl, placeholder: 'Search reports'),
                const SizedBox(height: CS.sm),
                CChipRow(scroll: true, chips: [('all','All'),('finance','Finance'),('design','Design'),('devops','DevOps'),('growth','Growth')].map((c) =>
                  CChip(active: _filter == c.$1, onTap: () => setState(() => _filter = c.$1), child: Text(c.$2))).toList()),
                const SizedBox(height: CS.sm),
                if (filtered.isEmpty)
                  CEmptyState(icon: Icons.search, title: 'No results', desc: 'No reports matching "${_ctrl.text}".')
                else
                  Container(
                    decoration: BoxDecoration(color: t.card, borderRadius: BorderRadius.circular(CR.xl), border: Border.all(color: t.border)),
                    child: Column(
                      children: filtered.asMap().entries.map((e) {
                        final item = e.value;
                        return CListItem(
                          title: item.title, subtitle: item.sub,
                          leading: Icon(item.icon),
                          trailing: item.badge.isNotEmpty ? CBadge(label: item.badge, variant: item.bv) : Icon(Icons.chevron_right, size: 14, color: t.mutedFg),
                          onTap: () {},
                          showDivider: e.key < filtered.length - 1,
                        );
                      }).toList(),
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 19. ITEM DETAIL SCREEN
// ============================================================
class ItemDetailScreen extends StatefulWidget {
  const ItemDetailScreen({super.key});

  @override
  State<ItemDetailScreen> createState() => _ItemDetailScreenState();
}

class _ItemDetailScreenState extends State<ItemDetailScreen> {
  bool _showDelete = false;

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.muted,
      child: Stack(
        children: [
          Column(
            children: [
              CAppBar(
                title: '',
                onBack: () {},
                action: Row(children: [
                  CIconBtn(icon: Icons.share_outlined, onTap: () {}),
                  CIconBtn(icon: Icons.delete_outline, onTap: () => setState(() => _showDelete = true)),
                ]),
              ),
              Expanded(
                child: ListView(
                  padding: const EdgeInsets.fromLTRB(CS.md, CS.md, CS.md, 100),
                  children: [
                    AspectRatio(
                      aspectRatio: 16/9,
                      child: Container(
                        decoration: BoxDecoration(color: t.muted, borderRadius: BorderRadius.circular(CR.xl), border: Border.all(color: t.border)),
                        child: Icon(Icons.show_chart, size: 40, color: t.mutedFg),
                      ),
                    ),
                    const SizedBox(height: CS.md),
                    CCard(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Expanded(child: Text('Q1 Revenue Report', style: CTxt.sans(size: 20, weight: FontWeight.w600, letterSpacing: -0.5, color: t.fg))),
                        const SizedBox(width: CS.xs),
                        const CBadge(label: 'Published', variant: BadgeVariant.success),
                      ]),
                      const SizedBox(height: CS.xs),
                      Text('Summary of revenue streams, growth metrics, and forecasts for Q1 2026. Includes YoY comparisons.', style: CTxt.sans(size: 14, lineHeight: 21, color: t.mutedFg)),
                      const SizedBox(height: CS.xs),
                      CChipRow(chips: ['Finance','Q1 2026','Revenue'].map((tag) => CBadge(label: tag, variant: BadgeVariant.muted)).toList()),
                    ])),
                    const SizedBox(height: CS.md),
                    Container(
                      decoration: BoxDecoration(color: t.card, borderRadius: BorderRadius.circular(CR.xl), border: Border.all(color: t.border)),
                      child: Column(children: [
                        CListItem(title: 'Mira Chen',    subtitle: 'Author',  showDivider: true),
                        CListItem(title: 'Today, 10:22', subtitle: 'Updated', showDivider: true),
                        CListItem(title: 'Finance',      subtitle: 'Category', showDivider: true),
                        CListItem(title: '138',          subtitle: 'Views',   showDivider: false),
                      ]),
                    ),
                    const SizedBox(height: CS.md),
                    Row(children: [
                      Expanded(child: CBtn(variant: BtnVariant.def, size: BtnSize.full, onTap: () {}, child: Row(mainAxisSize: MainAxisSize.min, children: [const Icon(Icons.edit_outlined, size: 14), const SizedBox(width: CS.xs), const Text('Edit')]))),
                      const SizedBox(width: CS.xs),
                      CBtn(variant: BtnVariant.outline, onTap: () {}, child: const Icon(Icons.share_outlined, size: 14)),
                    ]),
                  ],
                ),
              ),
            ],
          ),
          if (_showDelete)
            Positioned.fill(
              child: CAlertDialog(
                title: 'Delete report?', desc: 'This action cannot be undone.', confirm: 'Delete', destructive: true,
                onConfirm: () => setState(() => _showDelete = false),
                onCancel:  () => setState(() => _showDelete = false),
              ),
            ),
        ],
      ),
    );
  }
}

// ============================================================
// 20. HELP SCREEN
// ============================================================
class HelpScreen extends StatefulWidget {
  const HelpScreen({super.key});

  @override
  State<HelpScreen> createState() => _HelpScreenState();
}

class _HelpScreenState extends State<HelpScreen> {
  int _open = 0;
  static const _items = [
    (q:'How do I upgrade my plan?',     a:'Open Profile → Billing and plan. Select Pro or Enterprise and follow the checkout flow.'),
    (q:'Can I export my data?',         a:'Yes. From any report or list, tap More → Export. CSV, JSON, and PDF are supported.'),
    (q:'Is biometric unlock secure?',   a:'Face ID and Touch ID keys are stored in the Secure Enclave and never leave your device.'),
    (q:'How do I invite teammates?',    a:'Profile → Team workspaces → Invite. They will receive an email to join your workspace.'),
  ];

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CAppBar(title: 'Help', onBack: () {}),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(CS.md, CS.md, CS.md, 100),
              children: [
                const CSearchInput(placeholder: 'Search help articles'),
                const SizedBox(height: CS.md),
                CListHeader(label: 'Frequently asked'),
                Container(
                  decoration: BoxDecoration(color: t.card, borderRadius: BorderRadius.circular(CR.xl), border: Border.all(color: t.border)),
                  child: Column(
                    children: _items.asMap().entries.map((e) => Column(
                      children: [
                        GestureDetector(
                          onTap: () => setState(() => _open = _open == e.key ? -1 : e.key),
                          child: Padding(
                            padding: const EdgeInsets.symmetric(horizontal: CS.md, vertical: 14),
                            child: Row(
                              children: [
                                Expanded(child: Text(e.value.q, style: CTxt.sans(size: 15, weight: FontWeight.w500, lineHeight: 20, color: t.fg))),
                                Icon(_open == e.key ? Icons.keyboard_arrow_up : Icons.keyboard_arrow_down, size: 14, color: t.mutedFg),
                              ],
                            ),
                          ),
                        ),
                        if (_open == e.key)
                          Padding(
                            padding: const EdgeInsets.fromLTRB(CS.md, 0, CS.md, 14),
                            child: Text(e.value.a, style: CTxt.sans(size: 14, lineHeight: 21, color: t.mutedFg)),
                          ),
                        if (e.key < _items.length - 1)
                          Divider(height: 1, thickness: 1, color: t.border, indent: CS.md),
                      ],
                    )).toList(),
                  ),
                ),
                const SizedBox(height: CS.md),
                CBtn(variant: BtnVariant.outline, size: BtnSize.full, onTap: () {}, child: Row(mainAxisSize: MainAxisSize.min, children: [const Icon(Icons.mail_outline, size: 14), const SizedBox(width: CS.xs), const Text('Contact support')])),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// 21. NOTIFICATION DETAIL SCREEN
// ============================================================
class NotificationDetailScreen extends StatelessWidget {
  const NotificationDetailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.bg,
      child: Column(
        children: [
          CAppBar(title: 'Notification', onBack: () {}),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.all(CS.md),
              children: [
                CCard(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Row(children: [
                    Container(
                      width: 36, height: 36,
                      decoration: BoxDecoration(color: t.muted, borderRadius: BorderRadius.circular(CR.lg)),
                      child: Icon(Icons.warning_amber_outlined, size: 18, color: t.fg),
                    ),
                    const SizedBox(width: 10),
                    Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text('Invoice #1842 overdue', style: CTxt.sans(size: 15, weight: FontWeight.w600, lineHeight: 18, color: t.fg)),
                      Text('Just now', style: CTxt.sans(size: 13, color: t.mutedFg)),
                    ]),
                  ]),
                  const SizedBox(height: CS.sm),
                  Text('Humm Inc · Payment 2d late. Open the related item to take action. You can also dismiss or snooze this notification for later.', style: CTxt.sans(size: 14, lineHeight: 22, color: t.fg)),
                  const SizedBox(height: CS.sm),
                  Row(children: [
                    CBtn(onTap: () {}, child: const Text('Open')),
                    const SizedBox(width: CS.xs),
                    CBtn(variant: BtnVariant.outline, onTap: () {}, child: const Text('Snooze')),
                    const SizedBox(width: CS.xs),
                    CBtn(variant: BtnVariant.ghost, onTap: () {}, child: const Icon(Icons.delete_outline)),
                  ]),
                ])),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
