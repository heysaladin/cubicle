// Cubicle Mobile UI Kit — Flutter Components
// Pixel-perfect match to Primitives.jsx

import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'tokens.dart';

// ============================================================
// BUTTON
// ============================================================
enum BtnVariant { def, secondary, outline, ghost, destructive }
enum BtnSize    { def, lg, sm, full }

class CBtn extends StatelessWidget {
  final BtnVariant variant;
  final BtnSize size;
  final Widget child;
  final VoidCallback? onTap;

  const CBtn({
    super.key,
    this.variant = BtnVariant.def,
    this.size = BtnSize.def,
    required this.child,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    final double h = size == BtnSize.lg ? 52 : size == BtnSize.sm ? 36 : 44;
    final double r = size == BtnSize.lg ? CR.xl : CR.def;
    final double fs = size == BtnSize.lg ? 16 : size == BtnSize.sm ? 13 : 15;
    final double px = size == BtnSize.sm ? CS.sm : 18;

    Color bg, fg;
    Border? border;
    switch (variant) {
      case BtnVariant.secondary:
        bg = t.secondary; fg = t.secondaryFg;
      case BtnVariant.outline:
        bg = t.bg; fg = t.fg;
        border = Border.all(color: t.input);
      case BtnVariant.ghost:
        bg = Colors.transparent; fg = t.fg;
      case BtnVariant.destructive:
        bg = t.destructive; fg = t.destructiveFg;
      default:
        bg = t.primary; fg = t.primaryFg;
    }

    Widget content = DefaultTextStyle(
      style: CTxt.sans(size: fs, weight: FontWeight.w500, color: fg),
      child: IconTheme(
        data: IconThemeData(color: fg, size: 16),
        child: child,
      ),
    );

    if (size == BtnSize.full) {
      return GestureDetector(
        onTap: onTap,
        child: Container(
          width: double.infinity,
          height: h,
          decoration: BoxDecoration(
            color: bg,
            borderRadius: BorderRadius.circular(r),
            border: border,
          ),
          alignment: Alignment.center,
          child: content,
        ),
      );
    }

    return GestureDetector(
      onTap: onTap,
      child: Container(
        height: h,
        padding: EdgeInsets.symmetric(horizontal: px),
        decoration: BoxDecoration(
          color: bg,
          borderRadius: BorderRadius.circular(r),
          border: border,
        ),
        alignment: Alignment.center,
        child: content,
      ),
    );
  }
}

// ============================================================
// INPUT
// ============================================================
class CInput extends StatelessWidget {
  final TextEditingController? controller;
  final String? placeholder;
  final bool obscure;
  final TextInputType? keyboardType;
  final Widget? suffix;
  final int? maxLines;
  final double? minHeight;

  const CInput({
    super.key,
    this.controller,
    this.placeholder,
    this.obscure = false,
    this.keyboardType,
    this.suffix,
    this.maxLines = 1,
    this.minHeight,
  });

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      constraints: BoxConstraints(
        minHeight: minHeight ?? (maxLines == 1 ? 44 : 100),
      ),
      decoration: BoxDecoration(
        color: t.bg,
        borderRadius: BorderRadius.circular(CR.def),
        border: Border.all(color: t.input),
      ),
      child: TextField(
        controller: controller,
        obscureText: obscure,
        keyboardType: keyboardType,
        maxLines: maxLines,
        style: CTxt.sans(size: 15, color: t.fg),
        decoration: InputDecoration(
          hintText: placeholder,
          hintStyle: CTxt.sans(size: 15, color: t.mutedFg),
          border: InputBorder.none,
          contentPadding: EdgeInsets.symmetric(
            horizontal: 14,
            vertical: maxLines == 1 ? 0 : 12,
          ),
          suffixIcon: suffix,
          isCollapsed: maxLines == 1,
          isDense: true,
        ),
      ),
    );
  }
}

// ============================================================
// FIELD
// ============================================================
class CField extends StatelessWidget {
  final String? label;
  final String? hint;
  final String? error;
  final Widget child;

  const CField({super.key, this.label, this.hint, this.error, required this.child});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (label != null) ...[
          Text(label!, style: CTxt.sans(size: 13, weight: FontWeight.w500, color: t.fg)),
          const SizedBox(height: CS.s2xs + 2),
        ],
        child,
        if (error != null) ...[
          const SizedBox(height: CS.s2xs + 2),
          Text(error!, style: CTxt.sans(size: 12, lineHeight: 16.8, color: t.destructive)),
        ] else if (hint != null) ...[
          const SizedBox(height: CS.s2xs + 2),
          Text(hint!, style: CTxt.sans(size: 12, lineHeight: 16.8, color: t.mutedFg)),
        ],
      ],
    );
  }
}

// ============================================================
// BADGE
// ============================================================
enum BadgeVariant { def, success, warning, destructive, muted }

class CBadge extends StatelessWidget {
  final BadgeVariant variant;
  final String label;

  const CBadge({super.key, this.variant = BadgeVariant.def, required this.label});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    Color fg, bg;
    Color borderColor;
    switch (variant) {
      case BadgeVariant.success:
        fg = t.green; bg = Colors.transparent;
        borderColor = t.green.withOpacity(0.3);
      case BadgeVariant.warning:
        fg = t.amber; bg = Colors.transparent;
        borderColor = t.amber.withOpacity(0.3);
      case BadgeVariant.destructive:
        fg = t.destructiveFg; bg = t.destructive;
        borderColor = t.destructive;
      case BadgeVariant.muted:
        fg = t.mutedFg; bg = t.muted;
        borderColor = Colors.transparent;
      default:
        fg = t.fg; bg = t.card;
        borderColor = t.border;
    }
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 3),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(CR.full),
        border: Border.all(color: borderColor),
      ),
      child: Text(label, style: CTxt.sans(size: 12, weight: FontWeight.w500, color: fg)),
    );
  }
}

// ============================================================
// AVATAR
// ============================================================
class CAvatar extends StatelessWidget {
  final String initials;
  final bool large;
  final Color? bg;
  final Color? fg;

  const CAvatar({super.key, required this.initials, this.large = false, this.bg, this.fg});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    final double size = large ? 80 : 40;
    final double fs   = large ? 24 : 13;
    return Container(
      width: size, height: size,
      decoration: BoxDecoration(
        color: bg ?? t.muted,
        shape: BoxShape.circle,
        border: Border.all(color: t.border),
      ),
      alignment: Alignment.center,
      child: Text(initials, style: CTxt.sans(size: fs, weight: FontWeight.w500, color: fg ?? t.fg)),
    );
  }
}

// ============================================================
// SWITCH
// ============================================================
class CSwitch extends StatelessWidget {
  final bool value;
  final ValueChanged<bool> onChanged;

  const CSwitch({super.key, required this.value, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return GestureDetector(
      onTap: () => onChanged(!value),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 150),
        width: 44, height: 26,
        padding: const EdgeInsets.all(2),
        decoration: BoxDecoration(
          color: value ? t.primary : t.input,
          borderRadius: BorderRadius.circular(CR.full),
        ),
        alignment: value ? Alignment.centerRight : Alignment.centerLeft,
        child: Container(
          width: 22, height: 22,
          decoration: BoxDecoration(
            color: t.bg,
            shape: BoxShape.circle,
            boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.25), blurRadius: 3, offset: const Offset(0, 1))],
          ),
        ),
      ),
    );
  }
}

// ============================================================
// CHECKBOX
// ============================================================
class CCheckbox extends StatelessWidget {
  final bool value;
  final ValueChanged<bool> onChanged;

  const CCheckbox({super.key, required this.value, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return GestureDetector(
      onTap: () => onChanged(!value),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 120),
        width: 20, height: 20,
        decoration: BoxDecoration(
          color: value ? t.primary : t.bg,
          borderRadius: BorderRadius.circular(CR.sm),
          border: Border.all(color: value ? t.primary : t.mutedFg.withOpacity(0.6), width: 1.5),
        ),
        alignment: Alignment.center,
        child: value
            ? Icon(Icons.check, size: 13, color: t.primaryFg)
            : null,
      ),
    );
  }
}

// ============================================================
// RADIO
// ============================================================
class CRadio extends StatelessWidget {
  final bool value;
  final VoidCallback onTap;

  const CRadio({super.key, required this.value, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return GestureDetector(
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 120),
        width: 22, height: 22,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(
            color: value ? t.primary : t.mutedFg.withOpacity(0.6),
            width: 1.5,
          ),
        ),
        alignment: Alignment.center,
        child: value
            ? Container(
                width: 10, height: 10,
                decoration: BoxDecoration(color: t.primary, shape: BoxShape.circle),
              )
            : null,
      ),
    );
  }
}

// ============================================================
// CHIP
// ============================================================
class CChip extends StatelessWidget {
  final bool active;
  final Widget child;
  final VoidCallback? onTap;

  const CChip({super.key, this.active = false, required this.child, this.onTap});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: CS.sm, vertical: CS.xs - 2),
        decoration: BoxDecoration(
          color: active ? t.fg : t.card,
          borderRadius: BorderRadius.circular(CR.full),
          border: Border.all(color: t.border),
        ),
        child: DefaultTextStyle(
          style: CTxt.sans(size: 13, weight: FontWeight.w500, color: active ? t.bg : t.fg),
          child: child,
        ),
      ),
    );
  }
}

// ============================================================
// SEARCH INPUT
// ============================================================
class CSearchInput extends StatelessWidget {
  final TextEditingController? controller;
  final String placeholder;

  const CSearchInput({super.key, this.controller, this.placeholder = 'Search'});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      height: 40,
      padding: const EdgeInsets.symmetric(horizontal: 14),
      decoration: BoxDecoration(
        color: t.muted,
        borderRadius: BorderRadius.circular(CR.def),
      ),
      child: Row(
        children: [
          Icon(Icons.search, size: 16, color: t.mutedFg),
          const SizedBox(width: CS.xs),
          Expanded(
            child: TextField(
              controller: controller,
              style: CTxt.sans(size: 15, color: t.fg),
              decoration: InputDecoration(
                hintText: placeholder,
                hintStyle: CTxt.sans(size: 15, color: t.mutedFg),
                border: InputBorder.none,
                isCollapsed: true,
                isDense: true,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// APP BAR
// ============================================================
class CAppBar extends StatelessWidget {
  final String title;
  final VoidCallback? onBack;
  final Widget? action;

  const CAppBar({super.key, required this.title, this.onBack, this.action});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.bg.withOpacity(0.86),
      padding: EdgeInsets.only(
        top: MediaQuery.of(context).padding.top + 8,
        left: CS.xs,
        right: CS.xs,
        bottom: CS.xs,
      ),
      child: Row(
        children: [
          if (onBack != null)
            _iconBtn(context, Icons.chevron_left, onBack!)
          else
            const SizedBox(width: 36),
          Expanded(
            child: Text(
              title,
              textAlign: TextAlign.center,
              style: CTxt.sans(size: 17, weight: FontWeight.w600, letterSpacing: -0.3, color: t.fg),
            ),
          ),
          action ?? const SizedBox(width: 36),
        ],
      ),
    );
  }

  Widget _iconBtn(BuildContext context, IconData icon, VoidCallback onTap) {
    final t = CubicleTheme.of(context);
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: 36, height: 36,
        decoration: BoxDecoration(color: Colors.transparent, borderRadius: BorderRadius.circular(CR.lg)),
        alignment: Alignment.center,
        child: Icon(icon, size: 22, color: t.fg),
      ),
    );
  }
}

// ============================================================
// LARGE TITLE BAR
// ============================================================
class CLargeTitleBar extends StatelessWidget {
  final String title;
  final String? kicker;
  final Widget? action;

  const CLargeTitleBar({super.key, required this.title, this.kicker, this.action});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      color: t.bg,
      padding: EdgeInsets.only(
        top: MediaQuery.of(context).padding.top + 8,
        left: CS.lg,
        right: CS.lg,
        bottom: CS.sm,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (kicker != null)
            Text(kicker!, style: CTxt.mono(size: 11, letterSpacing: 1, color: t.mutedFg)),
          Row(
            children: [
              Expanded(
                child: Text(
                  title,
                  style: CTxt.sans(size: 32, weight: FontWeight.w600, lineHeight: 36, letterSpacing: -1.2, color: t.fg),
                ),
              ),
              if (action != null) action!,
            ],
          ),
        ],
      ),
    );
  }
}

// ============================================================
// TAB BAR
// ============================================================
const _tabItems = [
  (id: 'home',    label: 'Home',   icon: Icons.home_outlined),
  (id: 'search',  label: 'Search', icon: Icons.search),
  (id: 'create',  label: 'New',    icon: Icons.add),
  (id: 'inbox',   label: 'Inbox',  icon: Icons.all_inbox_outlined),
  (id: 'profile', label: 'Me',     icon: Icons.person_outline),
];

class CTabBar extends StatelessWidget {
  final String active;
  final ValueChanged<String> onNav;

  const CTabBar({super.key, required this.active, required this.onNav});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      decoration: BoxDecoration(
        color: t.bg.withOpacity(0.88),
        border: Border(top: BorderSide(color: t.border)),
      ),
      padding: EdgeInsets.only(
        top: 10, left: CS.xs, right: CS.xs,
        bottom: 28 + MediaQuery.of(context).padding.bottom,
      ),
      child: Row(
        children: _tabItems.map((tab) {
          final isActive = active == tab.id;
          return Expanded(
            child: GestureDetector(
              onTap: () => onNav(tab.id),
              behavior: HitTestBehavior.opaque,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(tab.icon, size: 22, color: isActive ? t.fg : t.mutedFg),
                  const SizedBox(height: CS.s2xs),
                  Text(tab.label, style: CTxt.sans(size: 10, weight: FontWeight.w500, color: isActive ? t.fg : t.mutedFg)),
                ],
              ),
            ),
          );
        }).toList(),
      ),
    );
  }
}

// ============================================================
// LIST ITEM
// ============================================================
class CListItem extends StatelessWidget {
  final Widget? leading;
  final String title;
  final String? subtitle;
  final Widget? trailing;
  final VoidCallback? onTap;
  final bool showDivider;

  const CListItem({
    super.key,
    this.leading,
    required this.title,
    this.subtitle,
    this.trailing,
    this.onTap,
    this.showDivider = true,
  });

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return GestureDetector(
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: CS.md, vertical: CS.sm),
            child: Row(
              children: [
                if (leading != null) ...[
                  Container(
                    width: 36, height: 36,
                    decoration: BoxDecoration(color: t.muted, borderRadius: BorderRadius.circular(CR.lg)),
                    alignment: Alignment.center,
                    child: IconTheme(data: IconThemeData(size: 18, color: t.fg), child: leading!),
                  ),
                  const SizedBox(width: CS.sm),
                ],
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(title, style: CTxt.sans(size: 15, weight: FontWeight.w500, color: t.fg), overflow: TextOverflow.ellipsis),
                      if (subtitle != null)
                        Text(subtitle!, style: CTxt.sans(size: 13, color: t.mutedFg), overflow: TextOverflow.ellipsis),
                    ],
                  ),
                ),
                if (trailing != null) ...[
                  const SizedBox(width: CS.xs),
                  trailing!,
                ],
              ],
            ),
          ),
          if (showDivider)
            Divider(height: 1, thickness: 1, color: t.border, indent: CS.md, endIndent: 0),
        ],
      ),
    );
  }
}

// ============================================================
// KPI CARD
// ============================================================
class CKpi extends StatelessWidget {
  final String label;
  final String value;
  final String? delta;
  final bool? up;

  const CKpi({super.key, required this.label, required this.value, this.delta, this.up});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      padding: const EdgeInsets.all(CS.md),
      decoration: BoxDecoration(
        color: t.card,
        borderRadius: BorderRadius.circular(CR.xl),
        border: Border.all(color: t.border),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label.toUpperCase(), style: CTxt.mono(size: 11, letterSpacing: 1, color: t.mutedFg)),
          const SizedBox(height: CS.xs),
          Text(value, style: CTxt.sans(size: 26, weight: FontWeight.w700, letterSpacing: -0.8, color: t.fg)),
          if (delta != null) ...[
            const SizedBox(height: 2),
            Row(
              children: [
                Icon(
                  up == true ? Icons.keyboard_arrow_up : Icons.keyboard_arrow_down,
                  size: 14,
                  color: up == true ? t.green : t.destructive,
                ),
                Text(delta!, style: CTxt.sans(size: 12, weight: FontWeight.w500, color: up == true ? t.green : t.destructive)),
              ],
            ),
          ],
        ],
      ),
    );
  }
}

// ============================================================
// PROGRESS BAR
// ============================================================
class CProgress extends StatelessWidget {
  final double value; // 0.0 to 1.0

  const CProgress({super.key, required this.value});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return ClipRRect(
      borderRadius: BorderRadius.circular(CR.full),
      child: SizedBox(
        height: 6,
        child: LinearProgressIndicator(
          value: value.clamp(0.0, 1.0),
          backgroundColor: t.muted,
          valueColor: AlwaysStoppedAnimation(t.primary),
        ),
      ),
    );
  }
}

// ============================================================
// SKELETON
// ============================================================
class CSkeleton extends StatefulWidget {
  final double height;
  final double? width;
  final double radius;

  const CSkeleton({super.key, this.height = 12, this.width, this.radius = 6});

  @override
  State<CSkeleton> createState() => _CSkeletonState();
}

class _CSkeletonState extends State<CSkeleton> with SingleTickerProviderStateMixin {
  late AnimationController _ctrl;
  late Animation<double> _anim;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 1400))..repeat();
    _anim = Tween<double>(begin: -1, end: 2).animate(CurvedAnimation(parent: _ctrl, curve: Curves.easeInOut));
  }

  @override
  void dispose() { _ctrl.dispose(); super.dispose(); }

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return AnimatedBuilder(
      animation: _anim,
      builder: (_, __) => Container(
        height: widget.height,
        width: widget.width ?? double.infinity,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(widget.radius),
          gradient: LinearGradient(
            begin: Alignment(_anim.value - 1, 0),
            end:   Alignment(_anim.value,     0),
            colors: [t.muted, t.accent, t.muted],
          ),
        ),
      ),
    );
  }
}

// ============================================================
// EMPTY STATE
// ============================================================
class CEmptyState extends StatelessWidget {
  final IconData icon;
  final String title;
  final String desc;
  final Widget? action;

  const CEmptyState({super.key, this.icon = Icons.all_inbox_outlined, required this.title, required this.desc, this.action});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: CS.xl, vertical: CS.xl3),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            width: 56, height: 56,
            decoration: BoxDecoration(color: t.muted, borderRadius: BorderRadius.circular(14)),
            child: Icon(icon, size: 26, color: t.mutedFg),
          ),
          const SizedBox(height: CS.sm + 2),
          Text(title, style: CTxt.sans(size: 17, weight: FontWeight.w600, color: t.fg)),
          const SizedBox(height: CS.xs),
          Text(desc, style: CTxt.sans(size: 14, lineHeight: 21, color: t.mutedFg), textAlign: TextAlign.center),
          if (action != null) ...[const SizedBox(height: CS.md), action!],
        ],
      ),
    );
  }
}

// ============================================================
// TOAST
// ============================================================
class CToast extends StatelessWidget {
  final String message;
  final String type; // 'success' | 'error' | 'default'

  const CToast({super.key, required this.message, this.type = 'default'});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    final IconData icon = type == 'success' ? Icons.check : type == 'error' ? Icons.warning_amber : Icons.notifications_outlined;
    final Color iconBg  = type == 'success' ? t.green.withOpacity(0.15) : type == 'error' ? t.destructive.withOpacity(0.15) : t.muted;
    final Color iconFg  = type == 'success' ? t.green : type == 'error' ? t.destructive : t.fg;

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: CS.sm),
      decoration: BoxDecoration(
        color: t.card,
        borderRadius: BorderRadius.circular(CR.xl),
        border: Border.all(color: t.border),
        boxShadow: [t.shadowMd],
      ),
      child: Row(
        children: [
          Container(
            width: 28, height: 28,
            decoration: BoxDecoration(color: iconBg, borderRadius: BorderRadius.circular(CR.lg)),
            child: Icon(icon, size: 16, color: iconFg),
          ),
          const SizedBox(width: 10),
          Expanded(child: Text(message, style: CTxt.sans(size: 14, weight: FontWeight.w500, color: t.fg))),
        ],
      ),
    );
  }
}

// ============================================================
// ALERT DIALOG
// ============================================================
class CAlertDialog extends StatelessWidget {
  final String title;
  final String? desc;
  final String confirm;
  final String cancel;
  final bool destructive;
  final VoidCallback onConfirm;
  final VoidCallback onCancel;

  const CAlertDialog({
    super.key,
    required this.title,
    this.desc,
    this.confirm = 'Confirm',
    this.cancel = 'Cancel',
    this.destructive = false,
    required this.onConfirm,
    required this.onCancel,
  });

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return GestureDetector(
      onTap: onCancel,
      child: Container(
        color: t.overlay,
        alignment: Alignment.center,
        padding: const EdgeInsets.all(CS.xl),
        child: GestureDetector(
          onTap: () {},
          child: Container(
            constraints: const BoxConstraints(maxWidth: 320),
            padding: const EdgeInsets.all(CS.lg),
            decoration: BoxDecoration(
              color: t.card,
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: t.border),
              boxShadow: [t.shadowLg],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: CTxt.sans(size: 17, weight: FontWeight.w600, color: t.fg)),
                if (desc != null) ...[
                  const SizedBox(height: CS.s2xs + 2),
                  Text(desc!, style: CTxt.sans(size: 14, lineHeight: 21, color: t.mutedFg)),
                ],
                const SizedBox(height: CS.md),
                Row(
                  children: [
                    Expanded(child: CBtn(variant: BtnVariant.outline, size: BtnSize.full, onTap: onCancel, child: Text(cancel))),
                    const SizedBox(width: CS.xs),
                    Expanded(
                      child: CBtn(
                        variant: destructive ? BtnVariant.destructive : BtnVariant.def,
                        size: BtnSize.full,
                        onTap: onConfirm,
                        child: Text(confirm),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// ============================================================
// BOTTOM SHEET
// ============================================================
class CBottomSheet extends StatelessWidget {
  final String? title;
  final String? desc;
  final Widget? child;
  final VoidCallback onClose;

  const CBottomSheet({super.key, this.title, this.desc, this.child, required this.onClose});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return GestureDetector(
      onTap: onClose,
      child: Container(
        color: t.overlay,
        alignment: Alignment.bottomCenter,
        child: GestureDetector(
          onTap: () {},
          child: Container(
            width: double.infinity,
            constraints: const BoxConstraints(maxHeight: 560),
            padding: const EdgeInsets.fromLTRB(CS.md, CS.xs, CS.md, 32),
            decoration: BoxDecoration(
              color: t.card,
              borderRadius: const BorderRadius.vertical(top: Radius.circular(20)),
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(width: 40, height: 4, decoration: BoxDecoration(color: t.border, borderRadius: BorderRadius.circular(2))),
                if (title != null) ...[
                  const SizedBox(height: CS.sm),
                  Text(title!, style: CTxt.sans(size: 17, weight: FontWeight.w600, color: t.fg)),
                ],
                if (desc != null) ...[
                  const SizedBox(height: CS.s2xs + 2),
                  Text(desc!, style: CTxt.sans(size: 14, lineHeight: 21, color: t.mutedFg)),
                ],
                if (child != null) ...[const SizedBox(height: CS.sm), child!],
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// ============================================================
// LINE CHART (custom paint)
// ============================================================
class CLineChart extends StatelessWidget {
  final List<double> data;
  final double height;
  final Color? color;

  const CLineChart({super.key, required this.data, this.height = 120, this.color});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return SizedBox(
      height: height,
      child: CustomPaint(
        painter: _LineChartPainter(data: data, color: color ?? t.fg, height: height),
        size: Size.infinite,
      ),
    );
  }
}

class _LineChartPainter extends CustomPainter {
  final List<double> data;
  final Color color;
  final double height;

  _LineChartPainter({required this.data, required this.color, required this.height});

  @override
  void paint(Canvas canvas, Size size) {
    if (data.length < 2) return;
    final mn = data.reduce(math.min);
    final mx = data.reduce(math.max);
    final range = (mx - mn).abs() < 0.001 ? 1.0 : mx - mn;

    List<Offset> pts = List.generate(data.length, (i) {
      final x = (i / (data.length - 1)) * size.width;
      final y = height - ((data[i] - mn) / range) * (height - 16) - 8;
      return Offset(x, y);
    });

    // Area fill
    final fillPath = Path()
      ..moveTo(0, size.height)
      ..lineTo(pts.first.dx, pts.first.dy);
    for (final p in pts.skip(1)) {
      fillPath.lineTo(p.dx, p.dy);
    }
    fillPath.lineTo(size.width, size.height);
    fillPath.close();
    canvas.drawPath(fillPath, Paint()..color = color.withOpacity(0.08)..style = PaintingStyle.fill);

    // Line
    final linePath = Path()..moveTo(pts.first.dx, pts.first.dy);
    for (final p in pts.skip(1)) {
      linePath.lineTo(p.dx, p.dy);
    }
    canvas.drawPath(
      linePath,
      Paint()
        ..color = color
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.5
        ..strokeCap = StrokeCap.round
        ..strokeJoin = StrokeJoin.round,
    );
  }

  @override
  bool shouldRepaint(_LineChartPainter old) => old.data != data || old.color != color;
}

// ============================================================
// BAR CHART
// ============================================================
class CBarChart extends StatelessWidget {
  final List<double> data;
  final double height;
  final Color? color;

  const CBarChart({super.key, required this.data, this.height = 120, this.color});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    final c = color ?? t.fg;
    final max = data.reduce((a, b) => a > b ? a : b);
    return SizedBox(
      height: height,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: data.map((v) {
          final pct = max > 0 ? v / max : 0.0;
          return Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 3),
              child: FractionallySizedBox(
                alignment: Alignment.bottomCenter,
                heightFactor: pct.clamp(0.03, 1.0),
                child: Container(
                  decoration: BoxDecoration(
                    color: c.withOpacity(0.9),
                    borderRadius: const BorderRadius.vertical(top: Radius.circular(3)),
                  ),
                ),
              ),
            ),
          );
        }).toList(),
      ),
    );
  }
}

// ============================================================
// ICON BUTTON
// ============================================================
class CIconBtn extends StatelessWidget {
  final IconData icon;
  final VoidCallback? onTap;
  final Color? color;

  const CIconBtn({super.key, required this.icon, this.onTap, this.color});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: 36, height: 36,
        decoration: BoxDecoration(borderRadius: BorderRadius.circular(CR.lg)),
        alignment: Alignment.center,
        child: Icon(icon, size: 20, color: color ?? t.fg),
      ),
    );
  }
}

// ============================================================
// SECTION DIVIDER LABEL
// ============================================================
class CListHeader extends StatelessWidget {
  final String label;

  const CListHeader({super.key, required this.label});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Padding(
      padding: const EdgeInsets.fromLTRB(CS.s2xs, CS.xs, CS.s2xs, CS.s2xs),
      child: Text(
        label.toUpperCase(),
        style: CTxt.mono(size: 11, letterSpacing: 1, color: t.mutedFg),
      ),
    );
  }
}

// ============================================================
// CARD
// ============================================================
class CCard extends StatelessWidget {
  final Widget child;
  final EdgeInsets? padding;

  const CCard({super.key, required this.child, this.padding});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      padding: padding ?? const EdgeInsets.all(CS.md),
      decoration: BoxDecoration(
        color: t.card,
        borderRadius: BorderRadius.circular(CR.xl),
        border: Border.all(color: t.border),
        boxShadow: [t.shadowSm],
      ),
      child: child,
    );
  }
}

// ============================================================
// OTP CELL
// ============================================================
class COTPRow extends StatelessWidget {
  final List<String> code; // 6 chars
  final int focusedIndex;

  const COTPRow({super.key, required this.code, required this.focusedIndex});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: List.generate(6, (i) {
        final focused = i == focusedIndex;
        return Container(
          margin: const EdgeInsets.symmetric(horizontal: 5),
          width: 48, height: 56,
          decoration: BoxDecoration(
            color: t.bg,
            borderRadius: BorderRadius.circular(CR.def),
            border: Border.all(color: focused ? t.ring : t.input, width: focused ? 2 : 1),
          ),
          alignment: Alignment.center,
          child: Text(code[i], style: CTxt.sans(size: 22, weight: FontWeight.w600, color: t.fg)),
        );
      }),
    );
  }
}

// ============================================================
// CHIP ROW (horizontal scroll)
// ============================================================
class CChipRow extends StatelessWidget {
  final List<Widget> chips;
  final bool scroll;

  const CChipRow({super.key, required this.chips, this.scroll = false});

  @override
  Widget build(BuildContext context) {
    if (scroll) {
      return SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Row(children: chips.map((c) => Padding(padding: const EdgeInsets.only(right: CS.xs), child: c)).toList()),
      );
    }
    return Wrap(spacing: CS.xs, runSpacing: CS.xs, children: chips);
  }
}

// ============================================================
// ACCORDION
// ============================================================
class CAccordionItem {
  final String title;
  final String content;
  const CAccordionItem({required this.title, required this.content});
}

class CAccordion extends StatefulWidget {
  final List<CAccordionItem> items;
  const CAccordion({super.key, required this.items});

  @override
  State<CAccordion> createState() => _CAccordionState();
}

class _CAccordionState extends State<CAccordion> {
  int? _openIndex;

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return Container(
      decoration: BoxDecoration(
        color: t.card,
        borderRadius: BorderRadius.circular(CR.xl),
        border: Border.all(color: t.border),
      ),
      child: Column(
        children: widget.items.asMap().entries.map((entry) {
          final i = entry.key;
          final item = entry.value;
          final isOpen = _openIndex == i;
          final isLast = i == widget.items.length - 1;
          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTap: () => setState(() => _openIndex = isOpen ? null : i),
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: CS.md, vertical: CS.sm),
                  child: Row(
                    children: [
                      Expanded(
                        child: Text(item.title, style: CTxt.sans(size: 15, weight: FontWeight.w500, color: t.fg)),
                      ),
                      AnimatedRotation(
                        turns: isOpen ? 0.5 : 0,
                        duration: const Duration(milliseconds: 200),
                        child: Icon(Icons.keyboard_arrow_down, size: 18, color: t.mutedFg),
                      ),
                    ],
                  ),
                ),
              ),
              AnimatedCrossFade(
                firstChild: const SizedBox.shrink(),
                secondChild: Padding(
                  padding: const EdgeInsets.only(left: CS.md, right: CS.md, bottom: CS.sm),
                  child: Text(item.content, style: CTxt.sans(size: 14, lineHeight: 21, color: t.mutedFg)),
                ),
                crossFadeState: isOpen ? CrossFadeState.showSecond : CrossFadeState.showFirst,
                duration: const Duration(milliseconds: 200),
              ),
              if (!isLast) Divider(height: 1, thickness: 1, color: t.border),
            ],
          );
        }).toList(),
      ),
    );
  }
}

// ============================================================
// TOGGLE
// ============================================================
class CToggle extends StatelessWidget {
  final bool pressed;
  final ValueChanged<bool> onChanged;
  final String label;
  final IconData? icon;

  const CToggle({
    super.key,
    required this.pressed,
    required this.onChanged,
    required this.label,
    this.icon,
  });

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    return GestureDetector(
      onTap: () => onChanged(!pressed),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 150),
        padding: const EdgeInsets.symmetric(horizontal: CS.sm, vertical: 8),
        decoration: BoxDecoration(
          color: pressed ? t.primary : Colors.transparent,
          borderRadius: BorderRadius.circular(CR.def),
          border: Border.all(color: pressed ? Colors.transparent : t.input),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (icon != null) ...[
              Icon(icon, size: 15, color: pressed ? t.primaryFg : t.fg),
              const SizedBox(width: CS.xs),
            ],
            Text(
              label,
              style: CTxt.sans(size: 14, weight: FontWeight.w500, color: pressed ? t.primaryFg : t.fg),
            ),
          ],
        ),
      ),
    );
  }
}

// ============================================================
// BREADCRUMB
// ============================================================
class CBreadcrumbItem {
  final String label;
  final VoidCallback? onTap;
  const CBreadcrumbItem({required this.label, this.onTap});
}

class CBreadcrumb extends StatelessWidget {
  final List<CBreadcrumbItem> items;
  const CBreadcrumb({super.key, required this.items});

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);
    final List<Widget> children = [];
    for (int i = 0; i < items.length; i++) {
      if (i > 0) {
        children.add(Padding(
          padding: const EdgeInsets.symmetric(horizontal: CS.s2xs),
          child: Icon(Icons.chevron_right, size: 14, color: t.mutedFg),
        ));
      }
      final isLast = i == items.length - 1;
      children.add(GestureDetector(
        onTap: isLast ? null : items[i].onTap,
        child: Text(
          items[i].label,
          style: CTxt.sans(size: 13, color: isLast ? t.fg : t.mutedFg),
        ),
      ));
    }
    return Row(mainAxisSize: MainAxisSize.min, children: children);
  }
}

// ============================================================
// PAGINATION
// ============================================================
class CPagination extends StatelessWidget {
  final int currentPage;
  final int totalPages;
  final ValueChanged<int> onPageChange;

  const CPagination({
    super.key,
    required this.currentPage,
    required this.totalPages,
    required this.onPageChange,
  });

  @override
  Widget build(BuildContext context) {
    final t = CubicleTheme.of(context);

    Widget pageBtn({required Widget child, required VoidCallback? onTap, bool active = false}) {
      return GestureDetector(
        onTap: onTap,
        child: Container(
          width: 36, height: 36,
          decoration: BoxDecoration(
            color: active ? t.primary : t.card,
            borderRadius: BorderRadius.circular(CR.def),
            border: Border.all(color: active ? Colors.transparent : t.border),
          ),
          alignment: Alignment.center,
          child: child,
        ),
      );
    }

    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        pageBtn(
          child: Icon(Icons.chevron_left, size: 16, color: currentPage <= 1 ? t.mutedFg.withOpacity(0.4) : t.fg),
          onTap: currentPage > 1 ? () => onPageChange(currentPage - 1) : null,
        ),
        ...List.generate(totalPages, (i) {
          final page = i + 1;
          final isActive = page == currentPage;
          return Padding(
            padding: const EdgeInsets.only(left: CS.xs),
            child: pageBtn(
              child: Text('$page', style: CTxt.sans(size: 14, weight: FontWeight.w500, color: isActive ? t.primaryFg : t.fg)),
              onTap: () => onPageChange(page),
              active: isActive,
            ),
          );
        }),
        Padding(
          padding: const EdgeInsets.only(left: CS.xs),
          child: pageBtn(
            child: Icon(Icons.chevron_right, size: 16, color: currentPage >= totalPages ? t.mutedFg.withOpacity(0.4) : t.fg),
            onTap: currentPage < totalPages ? () => onPageChange(currentPage + 1) : null,
          ),
        ),
      ],
    );
  }
}
