// Cubicle Mobile UI Kit — SwiftUI Components
// Follows iOS HIG conventions + Cubicle design tokens

import SwiftUI

// ============================================================
// BUTTON
// ============================================================
enum BtnVariant { case def, secondary, outline, ghost, destructive }
enum BtnSize    { case def, large, small, full }

struct CBtn: View {
    let label: String
    let action: () -> Void
    var variant: BtnVariant = .def
    var size: BtnSize = .def
    var icon: String? = nil // SF Symbol name

    @Environment(\.ct) private var t

    var body: some View {
        Button(action: action) {
            HStack(spacing: CS.xs) {
                if let icon { Image(systemName: icon).font(.system(size: 16)) }
                Text(label)
                    .font(.system(size: fontSize, weight: .medium))
            }
            .foregroundColor(fgColor)
            .frame(maxWidth: size == .full ? .infinity : nil)
            .frame(height: height)
            .padding(.horizontal, hPad)
            .background(bgColor)
            .cornerRadius(radius)
            .overlay(
                RoundedRectangle(cornerRadius: radius)
                    .stroke(borderColor, lineWidth: 1)
            )
        }
        .buttonStyle(.plain)
    }

    private var height: CGFloat  { size == .large ? 52 : size == .small ? 36 : 44 }
    private var radius: CGFloat  { size == .large ? CR.xl : CR.def }
    private var fontSize: CGFloat { size == .large ? 16 : size == .small ? 13 : 15 }
    private var hPad: CGFloat    { size == .small ? CS.sm : 18 }

    private var bgColor: Color {
        switch variant {
        case .secondary:    return t.secondary
        case .outline, .ghost: return .clear
        case .destructive:  return t.destructive
        default:            return t.primary
        }
    }
    private var fgColor: Color {
        switch variant {
        case .secondary:    return t.secondaryFg
        case .outline, .ghost: return t.fg
        case .destructive:  return t.destructiveFg
        default:            return t.primaryFg
        }
    }
    private var borderColor: Color {
        switch variant {
        case .outline: return t.input
        default:       return .clear
        }
    }
}

// ============================================================
// INPUT
// ============================================================
struct CInput: View {
    @Binding var text: String
    var placeholder: String = ""
    var isSecure: Bool = false
    var keyboardType: UIKeyboardType = .default
    var trailingIcon: AnyView? = nil

    @Environment(\.ct) private var t
    @FocusState private var focused: Bool

    var body: some View {
        HStack {
            if isSecure {
                SecureField(placeholder, text: $text)
                    .focused($focused)
            } else {
                TextField(placeholder, text: $text)
                    .keyboardType(keyboardType)
                    .focused($focused)
            }
            if let icon = trailingIcon { icon }
        }
        .font(CTxt.body)
        .foregroundColor(t.fg)
        .frame(height: 44)
        .padding(.horizontal, 14)
        .background(t.bg)
        .cornerRadius(CR.def)
        .overlay(
            RoundedRectangle(cornerRadius: CR.def)
                .stroke(focused ? t.ring : t.input, lineWidth: focused ? 2 : 1)
        )
    }
}

// ============================================================
// TEXTAREA
// ============================================================
struct CTextarea: View {
    @Binding var text: String
    var placeholder: String = ""

    @Environment(\.ct) private var t

    var body: some View {
        ZStack(alignment: .topLeading) {
            if text.isEmpty {
                Text(placeholder)
                    .font(CTxt.body)
                    .foregroundColor(t.mutedFg)
                    .padding(EdgeInsets(top: 14, leading: 14, bottom: 0, trailing: 14))
            }
            TextEditor(text: $text)
                .font(CTxt.body)
                .foregroundColor(t.fg)
                .padding(EdgeInsets(top: 6, leading: 10, bottom: 6, trailing: 10))
                .scrollContentBackground(.hidden)
                .background(Color.clear)
        }
        .frame(minHeight: 100)
        .background(t.bg)
        .cornerRadius(CR.def)
        .overlay(RoundedRectangle(cornerRadius: CR.def).stroke(t.input, lineWidth: 1))
    }
}

// ============================================================
// FIELD
// ============================================================
struct CField<Content: View>: View {
    var label: String? = nil
    var hint: String? = nil
    var error: String? = nil
    let content: () -> Content

    @Environment(\.ct) private var t

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            if let label {
                Text(label)
                    .font(.system(size: 13, weight: .medium))
                    .foregroundColor(t.fg)
            }
            content()
            if let error {
                Text(error).font(CTxt.footnote).foregroundColor(t.destructive)
            } else if let hint {
                Text(hint).font(CTxt.footnote).foregroundColor(t.mutedFg)
            }
        }
    }
}

// ============================================================
// BADGE
// ============================================================
enum BadgeVariant { case def, success, warning, destructive, muted }

struct CBadge: View {
    let label: String
    var variant: BadgeVariant = .def

    @Environment(\.ct) private var t

    var body: some View {
        Text(label)
            .font(CTxt.caption)
            .foregroundColor(fgColor)
            .padding(.horizontal, 10)
            .padding(.vertical, 3)
            .background(bgColor)
            .overlay(
                Capsule().stroke(borderColor, lineWidth: 1)
            )
            .clipShape(Capsule())
    }

    private var fgColor: Color {
        switch variant {
        case .success:     return t.green
        case .warning:     return t.amber
        case .destructive: return t.destructiveFg
        case .muted:       return t.mutedFg
        default:           return t.fg
        }
    }
    private var bgColor: Color {
        switch variant {
        case .destructive: return t.destructive
        case .muted:       return t.muted
        default:           return t.card
        }
    }
    private var borderColor: Color {
        switch variant {
        case .success:     return t.green.opacity(0.3)
        case .warning:     return t.amber.opacity(0.3)
        case .destructive: return t.destructive
        case .muted:       return .clear
        default:           return t.border
        }
    }
}

// ============================================================
// AVATAR
// ============================================================
struct CAvatar: View {
    let initials: String
    var large: Bool = false
    var bgColor: Color? = nil
    var fgColor: Color? = nil

    @Environment(\.ct) private var t

    var body: some View {
        Text(initials)
            .font(.system(size: large ? 24 : 13, weight: .medium))
            .foregroundColor(fgColor ?? t.fg)
            .frame(width: large ? 80 : 40, height: large ? 80 : 40)
            .background(bgColor ?? t.muted)
            .clipShape(Circle())
            .overlay(Circle().stroke(t.border, lineWidth: 1))
    }
}

// ============================================================
// SWITCH
// ============================================================
struct CSwitch: View {
    @Binding var isOn: Bool
    @Environment(\.ct) private var t

    var body: some View {
        Toggle("", isOn: $isOn)
            .toggleStyle(SwitchToggleStyle(tint: t.primary))
            .labelsHidden()
    }
}

// ============================================================
// CHECKBOX
// ============================================================
struct CCheckbox: View {
    @Binding var isChecked: Bool
    @Environment(\.ct) private var t

    var body: some View {
        Button(action: { isChecked.toggle() }) {
            ZStack {
                RoundedRectangle(cornerRadius: CR.sm)
                    .fill(isChecked ? t.primary : t.bg)
                    .frame(width: 20, height: 20)
                    .overlay(
                        RoundedRectangle(cornerRadius: CR.sm)
                            .stroke(isChecked ? t.primary : t.mutedFg.opacity(0.6), lineWidth: 1.5)
                    )
                if isChecked {
                    Image(systemName: "checkmark")
                        .font(.system(size: 11, weight: .bold))
                        .foregroundColor(t.primaryFg)
                }
            }
        }
        .buttonStyle(.plain)
    }
}

// ============================================================
// RADIO
// ============================================================
struct CRadio: View {
    @Binding var isSelected: Bool
    @Environment(\.ct) private var t

    var body: some View {
        Button(action: { isSelected = true }) {
            ZStack {
                Circle()
                    .stroke(isSelected ? t.primary : t.mutedFg.opacity(0.6), lineWidth: 1.5)
                    .frame(width: 22, height: 22)
                if isSelected {
                    Circle()
                        .fill(t.primary)
                        .frame(width: 10, height: 10)
                }
            }
        }
        .buttonStyle(.plain)
    }
}

// ============================================================
// CHIP
// ============================================================
struct CChip: View {
    let label: String
    var active: Bool = false
    let action: () -> Void
    var icon: String? = nil

    @Environment(\.ct) private var t

    var body: some View {
        Button(action: action) {
            HStack(spacing: CS.s2xs) {
                if let icon { Image(systemName: icon).font(.system(size: 13)) }
                Text(label).font(.system(size: 13, weight: .medium))
            }
            .foregroundColor(active ? t.bg : t.fg)
            .padding(.horizontal, CS.sm)
            .padding(.vertical, 6)
            .background(active ? t.fg : t.card)
            .clipShape(Capsule())
            .overlay(Capsule().stroke(t.border, lineWidth: 1))
        }
        .buttonStyle(.plain)
    }
}

// ============================================================
// SEARCH INPUT
// ============================================================
struct CSearchInput: View {
    @Binding var text: String
    var placeholder: String = "Search"
    @Environment(\.ct) private var t

    var body: some View {
        HStack(spacing: CS.xs) {
            Image(systemName: "magnifyingglass")
                .font(.system(size: 14))
                .foregroundColor(t.mutedFg)
            TextField(placeholder, text: $text)
                .font(CTxt.body)
                .foregroundColor(t.fg)
        }
        .frame(height: 40)
        .padding(.horizontal, 14)
        .background(t.muted)
        .cornerRadius(CR.def)
    }
}

// ============================================================
// APP BAR
// ============================================================
struct CAppBar: View {
    let title: String
    var onBack: (() -> Void)? = nil
    var action: AnyView? = nil

    @Environment(\.ct) private var t

    var body: some View {
        HStack(spacing: CS.xs) {
            if let onBack {
                Button(action: onBack) {
                    Image(systemName: "chevron.left")
                        .font(.system(size: 18, weight: .medium))
                        .foregroundColor(t.fg)
                        .frame(width: 36, height: 36)
                }
                .buttonStyle(.plain)
            } else {
                Spacer().frame(width: 36)
            }
            Spacer()
            Text(title)
                .font(CTxt.appBarTitle)
                .foregroundColor(t.fg)
            Spacer()
            if let action {
                action.frame(width: 36, height: 36)
            } else {
                Spacer().frame(width: 36)
            }
        }
        .padding(.horizontal, CS.xs)
        .padding(.vertical, CS.xs)
        .background(t.bg.opacity(0.86))
        .overlay(alignment: .bottom) {
            Rectangle().fill(t.border).frame(height: 1)
        }
    }
}

// ============================================================
// LARGE TITLE BAR
// ============================================================
struct CLargeTitleBar: View {
    let title: String
    var kicker: String? = nil
    var action: AnyView? = nil

    @Environment(\.ct) private var t

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            if let kicker {
                Text(kicker)
                    .font(CTxt.captionMono)
                    .foregroundColor(t.mutedFg)
                    .padding(.horizontal, CS.s2xs)
            }
            HStack {
                Text(title)
                    .font(CTxt.largeTitle)
                    .foregroundColor(t.fg)
                    .tracking(-1.2)
                Spacer()
                action
            }
        }
        .padding(.horizontal, CS.lg)
        .padding(.vertical, CS.sm)
        .background(t.bg)
    }
}

// ============================================================
// TAB BAR
// ============================================================
struct TabItem {
    let id: String
    let label: String
    let icon: String
}

let kTabItems: [TabItem] = [
    .init(id: "home",    label: "Home",   icon: "house"),
    .init(id: "search",  label: "Search", icon: "magnifyingglass"),
    .init(id: "create",  label: "New",    icon: "plus"),
    .init(id: "inbox",   label: "Inbox",  icon: "tray"),
    .init(id: "profile", label: "Me",     icon: "person"),
]

struct CTabBar: View {
    @Binding var active: String
    @Environment(\.ct) private var t

    var body: some View {
        HStack(spacing: 0) {
            ForEach(kTabItems, id: \.id) { tab in
                Button(action: { active = tab.id }) {
                    VStack(spacing: CS.s2xs) {
                        Image(systemName: active == tab.id ? tab.icon + ".fill" : tab.icon)
                            .font(.system(size: 22))
                        Text(tab.label).font(CTxt.tabLabel)
                    }
                    .foregroundColor(active == tab.id ? t.fg : t.mutedFg)
                    .frame(maxWidth: .infinity)
                }
                .buttonStyle(.plain)
            }
        }
        .padding(.top, 10)
        .padding(.bottom, 28)
        .background(.ultraThinMaterial)
        .overlay(alignment: .top) {
            Rectangle().fill(t.border).frame(height: 1)
        }
    }
}

// ============================================================
// LIST ITEM
// ============================================================
struct CListItem: View {
    let title: String
    var subtitle: String? = nil
    var leading: AnyView? = nil
    var trailing: AnyView? = nil
    var action: (() -> Void)? = nil
    var showDivider: Bool = true

    @Environment(\.ct) private var t

    var body: some View {
        VStack(spacing: 0) {
            HStack(spacing: CS.sm) {
                if let leading {
                    ZStack {
                        RoundedRectangle(cornerRadius: CR.lg).fill(t.muted)
                            .frame(width: 36, height: 36)
                        leading
                    }
                }
                VStack(alignment: .leading, spacing: 2) {
                    Text(title)
                        .font(.system(size: 15, weight: .medium))
                        .foregroundColor(t.fg)
                        .lineLimit(1)
                    if let subtitle {
                        Text(subtitle)
                            .font(.system(size: 13))
                            .foregroundColor(t.mutedFg)
                            .lineLimit(1)
                    }
                }
                Spacer()
                if let trailing { trailing }
            }
            .padding(.horizontal, CS.md)
            .padding(.vertical, CS.sm)
            .contentShape(Rectangle())
            .onTapGesture { action?() }

            if showDivider {
                Rectangle().fill(t.border).frame(height: 1)
                    .padding(.leading, CS.md)
            }
        }
    }
}

// ============================================================
// KPI CARD
// ============================================================
struct CKpi: View {
    let label: String
    let value: String
    var delta: String? = nil
    var up: Bool? = nil

    @Environment(\.ct) private var t

    var body: some View {
        VStack(alignment: .leading, spacing: CS.s2xs) {
            Text(label.uppercased())
                .font(CTxt.captionMono)
                .foregroundColor(t.mutedFg)
                .tracking(1)
            Text(value)
                .font(CTxt.kpiValue)
                .foregroundColor(t.fg)
                .tracking(-0.8)
                .padding(.top, CS.xs)
            if let delta {
                let clr = up == true ? t.green : up == false ? t.destructive : t.mutedFg
                HStack(spacing: 2) {
                    if let up {
                        Image(systemName: up ? "chevron.up" : "chevron.down")
                            .font(.system(size: 10, weight: .semibold))
                    }
                    Text(delta).font(CTxt.caption)
                }
                .foregroundColor(clr)
            }
        }
        .padding(CS.md)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(t.card)
        .cornerRadius(CR.xl)
        .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
    }
}

// ============================================================
// PROGRESS BAR
// ============================================================
struct CProgress: View {
    let value: Double // 0.0 – 1.0
    @Environment(\.ct) private var t

    var body: some View {
        GeometryReader { geo in
            ZStack(alignment: .leading) {
                Capsule().fill(t.muted).frame(height: 6)
                Capsule().fill(t.primary)
                    .frame(width: geo.size.width * value.clamped(to: 0...1), height: 6)
            }
        }
        .frame(height: 6)
    }
}

extension Comparable {
    func clamped(to range: ClosedRange<Self>) -> Self {
        min(max(self, range.lowerBound), range.upperBound)
    }
}

// ============================================================
// SKELETON
// ============================================================
struct CSkeleton: View {
    var height: CGFloat = 12
    var width: CGFloat? = nil
    var radius: CGFloat = 6

    @State private var animating = false
    @Environment(\.ct) private var t

    var body: some View {
        RoundedRectangle(cornerRadius: radius)
            .fill(t.muted.opacity(animating ? 0.6 : 0.3))
            .frame(width: width, height: height)
            .frame(maxWidth: width == nil ? .infinity : nil)
            .onAppear {
                withAnimation(.easeInOut(duration: 0.7).repeatForever(autoreverses: true)) {
                    animating = true
                }
            }
    }
}

// ============================================================
// EMPTY STATE
// ============================================================
struct CEmptyState: View {
    var icon: String = "tray"
    let title: String
    let desc: String
    var action: AnyView? = nil

    @Environment(\.ct) private var t

    var body: some View {
        VStack(spacing: CS.sm) {
            ZStack {
                RoundedRectangle(cornerRadius: 14).fill(t.muted)
                    .frame(width: 56, height: 56)
                Image(systemName: icon)
                    .font(.system(size: 24))
                    .foregroundColor(t.mutedFg)
            }
            Text(title)
                .font(.system(size: 17, weight: .semibold))
                .foregroundColor(t.fg)
                .padding(.top, CS.xs)
            Text(desc)
                .font(CTxt.callout)
                .foregroundColor(t.mutedFg)
                .multilineTextAlignment(.center)
                .frame(maxWidth: 260)
            if let action { action.padding(.top, CS.s2xs) }
        }
        .frame(maxWidth: .infinity)
        .padding(.horizontal, CS.xl)
        .padding(.vertical, CS.xl3)
    }
}

// ============================================================
// TOAST
// ============================================================
struct CToast: View {
    let message: String
    var type: String = "default" // success | error | default

    @Environment(\.ct) private var t

    var icon: String { type == "success" ? "checkmark" : type == "error" ? "exclamationmark.triangle" : "bell" }
    var iconBg: Color { type == "success" ? t.green.opacity(0.15) : type == "error" ? t.destructive.opacity(0.15) : t.muted }
    var iconFg: Color { type == "success" ? t.green : type == "error" ? t.destructive : t.fg }

    var body: some View {
        HStack(spacing: 10) {
            ZStack {
                RoundedRectangle(cornerRadius: CR.lg).fill(iconBg).frame(width: 28, height: 28)
                Image(systemName: icon).font(.system(size: 13)).foregroundColor(iconFg)
            }
            Text(message)
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(t.fg)
            Spacer()
        }
        .padding(.horizontal, 14)
        .padding(.vertical, CS.sm)
        .background(t.card)
        .cornerRadius(CR.xl)
        .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
        .shadow(color: .black.opacity(0.1), radius: 6, y: 4)
    }
}

// ============================================================
// CARD
// ============================================================
struct CCard<Content: View>: View {
    let content: () -> Content
    var padding: EdgeInsets = EdgeInsets(top: CS.md, leading: CS.md, bottom: CS.md, trailing: CS.md)

    @Environment(\.ct) private var t

    var body: some View {
        VStack(alignment: .leading, spacing: 0, content: content)
            .padding(padding)
            .background(t.card)
            .cornerRadius(CR.xl)
            .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
    }
}

// ============================================================
// BOTTOM SHEET
// ============================================================
struct CBottomSheet<Content: View>: View {
    @Binding var isPresented: Bool
    var title: String? = nil
    var desc: String? = nil
    let content: () -> Content

    @Environment(\.ct) private var t

    var body: some View {
        ZStack(alignment: .bottom) {
            Color.black.opacity(isPresented ? 0.6 : 0)
                .ignoresSafeArea()
                .onTapGesture { isPresented = false }

            if isPresented {
                VStack(spacing: CS.sm) {
                    Capsule()
                        .fill(t.border)
                        .frame(width: 40, height: 4)
                        .padding(.top, CS.xs)
                    if let title {
                        Text(title).font(.system(size: 17, weight: .semibold)).foregroundColor(t.fg)
                    }
                    if let desc {
                        Text(desc).font(CTxt.callout).foregroundColor(t.mutedFg)
                    }
                    content()
                }
                .padding(.horizontal, CS.md)
                .padding(.bottom, 32)
                .background(t.card)
                .cornerRadius(20, corners: [.topLeft, .topRight])
                .transition(.move(edge: .bottom))
            }
        }
        .animation(.easeOut(duration: 0.25), value: isPresented)
    }
}

// cornerRadius per corner helper
extension View {
    func cornerRadius(_ radius: CGFloat, corners: UIRectCorner) -> some View {
        clipShape(RoundedCorner(radius: radius, corners: corners))
    }
}

struct RoundedCorner: Shape {
    var radius: CGFloat = .infinity
    var corners: UIRectCorner = .allCorners
    func path(in rect: CGRect) -> Path {
        let p = UIBezierPath(roundedRect: rect, byRoundingCorners: corners,
                             cornerRadii: CGSize(width: radius, height: radius))
        return Path(p.cgPath)
    }
}

// ============================================================
// ALERT DIALOG
// ============================================================
struct CAlertDialog: View {
    let title: String
    var desc: String? = nil
    var confirmLabel: String = "Confirm"
    var cancelLabel: String = "Cancel"
    var destructive: Bool = false
    let onConfirm: () -> Void
    let onCancel: () -> Void

    @Environment(\.ct) private var t

    var body: some View {
        ZStack {
            Color.black.opacity(0.6).ignoresSafeArea().onTapGesture { onCancel() }
            VStack(alignment: .leading, spacing: 6) {
                Text(title)
                    .font(.system(size: 17, weight: .semibold))
                    .foregroundColor(t.fg)
                if let desc {
                    Text(desc).font(CTxt.callout).foregroundColor(t.mutedFg)
                }
                HStack(spacing: CS.xs) {
                    CBtn(label: cancelLabel, action: onCancel, variant: .outline, size: .full)
                    CBtn(label: confirmLabel, action: onConfirm, variant: destructive ? .destructive : .def, size: .full)
                }
                .padding(.top, CS.md)
            }
            .padding(CS.lg)
            .background(t.card)
            .cornerRadius(14)
            .overlay(RoundedRectangle(cornerRadius: 14).stroke(t.border, lineWidth: 1))
            .frame(maxWidth: 320)
            .padding(.horizontal, CS.xl)
            .shadow(color: .black.opacity(0.12), radius: 15, y: 10)
        }
    }
}

// ============================================================
// LINE CHART
// ============================================================
struct CLineChart: View {
    let data: [Double]
    var height: CGFloat = 120
    var color: Color? = nil

    @Environment(\.ct) private var t

    var body: some View {
        let c = color ?? t.fg
        Canvas { ctx, size in
            guard data.count >= 2 else { return }
            let mn = data.min()!
            let mx = data.max()!
            let range = max(mx - mn, 0.001)
            let pts = data.enumerated().map { (i, v) -> CGPoint in
                let x = CGFloat(i) / CGFloat(data.count - 1) * size.width
                let y = height - ((v - mn) / range) * (height - 16) - 8
                return CGPoint(x: x, y: y)
            }
            var fill = Path()
            fill.move(to: CGPoint(x: 0, y: height))
            fill.addLine(to: pts[0])
            pts.dropFirst().forEach { fill.addLine(to: $0) }
            fill.addLine(to: CGPoint(x: size.width, y: height))
            fill.closeSubpath()
            ctx.fill(fill, with: .color(c.opacity(0.08)))
            var line = Path()
            line.move(to: pts[0])
            pts.dropFirst().forEach { line.addLine(to: $0) }
            ctx.stroke(line, with: .color(c), style: StrokeStyle(lineWidth: 1.5, lineCap: .round, lineJoin: .round))
        }
        .frame(height: height)
    }
}

// ============================================================
// BAR CHART
// ============================================================
struct CBarChart: View {
    let data: [Double]
    var height: CGFloat = 120
    var color: Color? = nil

    @Environment(\.ct) private var t

    var body: some View {
        let c = color ?? t.fg
        let mx = data.max() ?? 1
        HStack(alignment: .bottom, spacing: 6) {
            ForEach(Array(data.enumerated()), id: \.0) { _, v in
                let pct = max(v / mx, 0.03)
                Rectangle()
                    .fill(c.opacity(0.9))
                    .frame(height: CGFloat(pct) * height)
                    .cornerRadius(3, corners: [.topLeft, .topRight])
            }
        }
        .frame(height: height, alignment: .bottom)
    }
}

// ============================================================
// OTP ROW
// ============================================================
struct COTPRow: View {
    let code: [String] // 6 elements
    let focusedIndex: Int

    @Environment(\.ct) private var t

    var body: some View {
        HStack(spacing: 10) {
            ForEach(0..<6, id: \.self) { i in
                let focused = i == focusedIndex
                Text(code[i])
                    .font(.system(size: 22, weight: .semibold))
                    .foregroundColor(t.fg)
                    .frame(width: 48, height: 56)
                    .background(t.bg)
                    .cornerRadius(CR.def)
                    .overlay(
                        RoundedRectangle(cornerRadius: CR.def)
                            .stroke(focused ? t.ring : t.input, lineWidth: focused ? 2 : 1)
                    )
            }
        }
    }
}

// ============================================================
// LIST HEADER
// ============================================================
struct CListHeader: View {
    let label: String
    @Environment(\.ct) private var t
    var body: some View {
        Text(label.uppercased())
            .font(CTxt.captionMono)
            .foregroundColor(t.mutedFg)
            .tracking(1)
            .padding(.horizontal, CS.s2xs)
            .padding(.top, CS.xs)
            .padding(.bottom, CS.s2xs)
    }
}

// ============================================================
// ACTIVITY DOT
// ============================================================
struct CActivityDot: View {
    @Environment(\.ct) private var t
    var body: some View {
        Circle().fill(t.green).frame(width: 6, height: 6)
    }
}

// ============================================================
// ACCORDION
// ============================================================
struct CAccordionItem {
    let title: String
    let content: String
}

struct CAccordion: View {
    let items: [CAccordionItem]
    @State private var openIndex: Int? = nil
    @Environment(\.ct) private var t

    var body: some View {
        VStack(spacing: 0) {
            ForEach(Array(items.enumerated()), id: \.0) { i, item in
                VStack(spacing: 0) {
                    Button(action: {
                        withAnimation(.easeInOut(duration: 0.2)) {
                            openIndex = openIndex == i ? nil : i
                        }
                    }) {
                        HStack {
                            Text(item.title)
                                .font(.system(size: 15, weight: .medium))
                                .foregroundColor(t.fg)
                            Spacer()
                            Image(systemName: "chevron.down")
                                .font(.system(size: 13, weight: .medium))
                                .foregroundColor(t.mutedFg)
                                .rotationEffect(.degrees(openIndex == i ? 180 : 0))
                                .animation(.easeInOut(duration: 0.2), value: openIndex)
                        }
                        .padding(.horizontal, CS.md)
                        .padding(.vertical, CS.sm)
                        .contentShape(Rectangle())
                    }
                    .buttonStyle(.plain)

                    if openIndex == i {
                        Text(item.content)
                            .font(CTxt.callout)
                            .foregroundColor(t.mutedFg)
                            .frame(maxWidth: .infinity, alignment: .leading)
                            .padding(.horizontal, CS.md)
                            .padding(.bottom, CS.sm)
                            .transition(.opacity.combined(with: .move(edge: .top)))
                    }

                    if i < items.count - 1 {
                        Rectangle().fill(t.border).frame(height: 1)
                    }
                }
            }
        }
        .background(t.card)
        .cornerRadius(CR.xl)
        .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
    }
}

// ============================================================
// TOGGLE
// ============================================================
struct CToggle: View {
    @Binding var pressed: Bool
    let label: String
    var icon: String? = nil

    @Environment(\.ct) private var t

    var body: some View {
        Button(action: { pressed.toggle() }) {
            HStack(spacing: CS.xs) {
                if let icon { Image(systemName: icon).font(.system(size: 15)) }
                Text(label).font(.system(size: 14, weight: .medium))
            }
            .foregroundColor(pressed ? t.primaryFg : t.fg)
            .padding(.horizontal, CS.sm)
            .padding(.vertical, 8)
            .background(pressed ? t.primary : Color.clear)
            .cornerRadius(CR.def)
            .overlay(
                RoundedRectangle(cornerRadius: CR.def)
                    .stroke(pressed ? Color.clear : t.input, lineWidth: 1)
            )
        }
        .buttonStyle(.plain)
        .animation(.easeInOut(duration: 0.15), value: pressed)
    }
}

// ============================================================
// BREADCRUMB
// ============================================================
struct CBreadcrumbItem {
    let label: String
    var onTap: (() -> Void)? = nil
}

struct CBreadcrumb: View {
    let items: [CBreadcrumbItem]
    @Environment(\.ct) private var t

    var body: some View {
        HStack(spacing: CS.s2xs) {
            ForEach(Array(items.enumerated()), id: \.0) { i, item in
                if i > 0 {
                    Image(systemName: "chevron.right")
                        .font(.system(size: 11, weight: .medium))
                        .foregroundColor(t.mutedFg)
                }
                let isLast = i == items.count - 1
                Text(item.label)
                    .font(.system(size: 13))
                    .foregroundColor(isLast ? t.fg : t.mutedFg)
                    .onTapGesture { if !isLast { item.onTap?() } }
            }
        }
    }
}

// ============================================================
// PAGINATION
// ============================================================
struct CPagination: View {
    @Binding var currentPage: Int
    let totalPages: Int
    @Environment(\.ct) private var t

    var body: some View {
        HStack(spacing: CS.xs) {
            // Prev
            Button(action: { if currentPage > 1 { currentPage -= 1 } }) {
                Image(systemName: "chevron.left")
                    .font(.system(size: 13, weight: .medium))
                    .foregroundColor(currentPage <= 1 ? t.mutedFg.opacity(0.4) : t.fg)
                    .frame(width: 36, height: 36)
                    .background(t.card)
                    .cornerRadius(CR.def)
                    .overlay(RoundedRectangle(cornerRadius: CR.def).stroke(t.border, lineWidth: 1))
            }
            .buttonStyle(.plain)
            .disabled(currentPage <= 1)

            ForEach(1...totalPages, id: \.self) { page in
                Button(action: { currentPage = page }) {
                    Text("\(page)")
                        .font(.system(size: 14, weight: .medium))
                        .foregroundColor(page == currentPage ? t.primaryFg : t.fg)
                        .frame(width: 36, height: 36)
                        .background(page == currentPage ? t.primary : t.card)
                        .cornerRadius(CR.def)
                        .overlay(RoundedRectangle(cornerRadius: CR.def).stroke(page == currentPage ? Color.clear : t.border, lineWidth: 1))
                }
                .buttonStyle(.plain)
            }

            // Next
            Button(action: { if currentPage < totalPages { currentPage += 1 } }) {
                Image(systemName: "chevron.right")
                    .font(.system(size: 13, weight: .medium))
                    .foregroundColor(currentPage >= totalPages ? t.mutedFg.opacity(0.4) : t.fg)
                    .frame(width: 36, height: 36)
                    .background(t.card)
                    .cornerRadius(CR.def)
                    .overlay(RoundedRectangle(cornerRadius: CR.def).stroke(t.border, lineWidth: 1))
            }
            .buttonStyle(.plain)
            .disabled(currentPage >= totalPages)
        }
    }
}
