// Cubicle Mobile UI Kit — SwiftUI Screens
// Follows iOS HIG conventions + Cubicle design tokens

import SwiftUI

// ============================================================
// 1. SPLASH
// ============================================================
struct SplashScreen: View {
    @Environment(\.ct) private var t
    var body: some View {
        ZStack {
            t.bg.ignoresSafeArea()
            VStack(spacing: CS.md) {
                RoundedRectangle(cornerRadius: 14).fill(t.fg).frame(width: 64, height: 64)
                Text("cubicle").font(.system(size: 22, weight: .bold)).foregroundColor(t.fg).tracking(-0.7)
            }
            VStack {
                Spacer()
                ProgressView().tint(t.primary).padding(.bottom, 80)
            }
        }
    }
}

// ============================================================
// 2. MAINTENANCE
// ============================================================
struct MaintenanceScreen: View {
    @Environment(\.ct) private var t
    var body: some View {
        VStack(spacing: 0) {
            CLargeTitleBar(title: "Maintenance")
            Spacer()
            CEmptyState(
                icon: "gearshape",
                title: "Down for maintenance",
                desc: "We're making improvements. This won't take long — we'll be back shortly.",
                action: AnyView(VStack(spacing: CS.xs) {
                    Text("ESTIMATED TIME").font(CTxt.captionMono).foregroundColor(t.mutedFg).tracking(1)
                    Text("~15 min").font(.system(size: 28, weight: .bold)).foregroundColor(t.fg).tracking(-0.8)
                })
            )
            Spacer()
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 3. OFFLINE
// ============================================================
struct OfflineScreen: View {
    @Environment(\.ct) private var t
    var body: some View {
        VStack(spacing: 0) {
            CLargeTitleBar(title: "Connection lost")
            Spacer()
            CEmptyState(
                icon: "wifi.slash",
                title: "You're offline",
                desc: "Check your connection and we'll pick up where you left off.",
                action: AnyView(CBtn(label: "Retry", action: {}, icon: "wifi"))
            )
            Spacer()
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 4. ERROR
// ============================================================
struct ErrorScreen: View {
    @Environment(\.ct) private var t
    var body: some View {
        VStack(spacing: 0) {
            CLargeTitleBar(title: "Error")
            Spacer()
            CEmptyState(
                icon: "exclamationmark.triangle",
                title: "Something went wrong",
                desc: "We couldn't load this page. Try again or contact support if the problem persists.",
                action: AnyView(HStack(spacing: CS.xs) {
                    CBtn(label: "Try again", action: {}, icon: "arrow.clockwise")
                    CBtn(label: "Support", action: {}, variant: .outline, icon: "envelope")
                })
            )
            Spacer()
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 5. ONBOARDING
// ============================================================
private let onbSlides: [(title: String, desc: String, icon: String)] = [
    ("Quiet by design.",       "A focus-first workspace that stays out of your way until you need it.",        "bolt"),
    ("Your stack, tokenized.", "Every color, radius and shadow lives as a CSS variable. Brand it in minutes.", "square.3.layers.3d"),
    ("Ship considered work.",  "From prototype to production on one system, one voice, one type.",             "shield"),
]

struct OnboardingScreen: View {
    @State private var idx = 0
    @Environment(\.ct) private var t

    var body: some View {
        let slide = onbSlides[idx]
        VStack {
            Spacer()
            VStack(spacing: CS.xl2) {
                ZStack {
                    RoundedRectangle(cornerRadius: 24).fill(t.muted).frame(width: 180, height: 180)
                        .overlay(RoundedRectangle(cornerRadius: 24).stroke(t.border, lineWidth: 1))
                    Image(systemName: slide.icon).font(.system(size: 48)).foregroundColor(t.mutedFg)
                }
                VStack(spacing: CS.sm) {
                    Text(slide.title)
                        .font(.system(size: 30, weight: .semibold)).foregroundColor(t.fg)
                        .multilineTextAlignment(.center).tracking(-1.2)
                    Text(slide.desc)
                        .font(.system(size: 16)).foregroundColor(t.mutedFg)
                        .multilineTextAlignment(.center).lineSpacing(4)
                }
            }
            .padding(.horizontal, CS.xl2)
            Spacer()
            VStack(spacing: CS.lg) {
                HStack(spacing: 6) {
                    ForEach(0..<onbSlides.count, id: \.self) { k in
                        Capsule().fill(k == idx ? t.fg : t.border)
                            .frame(width: k == idx ? 20 : 6, height: 6)
                            .animation(.easeInOut(duration: 0.2), value: idx)
                    }
                }
                VStack(spacing: CS.sm) {
                    if idx < onbSlides.count - 1 {
                        CBtn(label: "Continue", action: { idx += 1 }, size: .full)
                        CBtn(label: "Skip", action: {}, variant: .ghost, size: .small)
                    } else {
                        CBtn(label: "Get started", action: {}, size: .full)
                        CBtn(label: "Back to start", action: { idx = 0 }, variant: .ghost, size: .small)
                    }
                }
                .padding(.horizontal, CS.xl2)
            }
            .padding(.bottom, CS.xl3)
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 6. LOGIN
// ============================================================
struct LoginScreen: View {
    @State private var email = "mira@relay.dev"
    @State private var pw    = ""
    @State private var show  = false
    @Environment(\.ct) private var t

    var body: some View {
        VStack(spacing: 0) {
            CAppBar(title: "Sign in", onBack: {})
            ScrollView {
                VStack(alignment: .leading, spacing: CS.md) {
                    VStack(alignment: .leading, spacing: CS.s2xs) {
                        Text("Welcome back.").font(.system(size: 26, weight: .semibold)).foregroundColor(t.fg).tracking(-0.8)
                        Text("Enter your credentials to continue.").font(CTxt.body).foregroundColor(t.mutedFg)
                    }
                    CField(label: "Email") { CInput(text: $email, placeholder: "you@work.com", keyboardType: .emailAddress) }
                    CField(label: "Password", hint: "At least 8 characters.") {
                        ZStack(alignment: .trailing) {
                            CInput(text: $pw, placeholder: "••••••••", isSecure: !show)
                            Button(action: { show.toggle() }) {
                                Image(systemName: show ? "eye.slash" : "eye")
                                    .foregroundColor(t.mutedFg).padding(.trailing, 14)
                            }
                        }
                    }
                    CBtn(label: "Continue", action: {}, size: .full)
                    CBtn(label: "Use Face ID", action: {}, variant: .outline, size: .full, icon: "faceid")
                    Text("Forgot your password?").font(.system(size: 14, weight: .medium)).foregroundColor(t.mutedFg).frame(maxWidth: .infinity)
                }
                .padding(CS.md)
            }
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 7. OTP
// ============================================================
struct OTPScreen: View {
    let code = ["2","4","7","","",""]
    @Environment(\.ct) private var t
    var body: some View {
        VStack(spacing: 0) {
            CAppBar(title: "Verify", onBack: {})
            ScrollView {
                VStack(alignment: .leading, spacing: CS.md) {
                    VStack(alignment: .leading, spacing: CS.s2xs) {
                        Text("Check your email").font(.system(size: 26, weight: .semibold)).foregroundColor(t.fg).tracking(-0.8)
                        Text("We sent a 6-digit code to mira@relay.dev. Enter it below to continue.").font(CTxt.body).foregroundColor(t.mutedFg)
                    }
                    COTPRow(code: code, focusedIndex: 3)
                    CBtn(label: "Verify and continue", action: {}, size: .full)
                    CBtn(label: "Resend code in 28s", action: {}, variant: .ghost, size: .small).frame(maxWidth: .infinity)
                }
                .padding(CS.md)
            }
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 8. REGISTER
// ============================================================
struct RegisterScreen: View {
    @State private var name    = ""
    @State private var email   = ""
    @State private var pw      = ""
    @State private var agreed  = false
    @Environment(\.ct) private var t

    var body: some View {
        VStack(spacing: 0) {
            CAppBar(title: "Create account", onBack: {})
            ScrollView {
                VStack(alignment: .leading, spacing: CS.md) {
                    VStack(alignment: .leading, spacing: CS.s2xs) {
                        Text("Get started.").font(.system(size: 26, weight: .semibold)).foregroundColor(t.fg).tracking(-0.8)
                        Text("Create your Cubicle account.").font(CTxt.body).foregroundColor(t.mutedFg)
                    }
                    CField(label: "Full name")  { CInput(text: $name,  placeholder: "Mira Chen") }
                    CField(label: "Work email") { CInput(text: $email, placeholder: "you@work.com", keyboardType: .emailAddress) }
                    CField(label: "Password", hint: "At least 8 characters.") { CInput(text: $pw, placeholder: "••••••••", isSecure: true) }
                    HStack(alignment: .top, spacing: CS.sm) {
                        CCheckbox(isChecked: $agreed)
                        Text("I agree to the **Terms of Service** and **Privacy Policy**.").font(CTxt.callout).foregroundColor(t.mutedFg)
                    }
                    CBtn(label: "Create account", action: {}, size: .full)
                    HStack { Spacer(); Text("Already have an account? ").foregroundColor(t.mutedFg) + Text("Sign in").foregroundColor(t.fg).bold(); Spacer() }
                        .font(CTxt.callout)
                }
                .padding(CS.md)
            }
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 9. FORGOT PASSWORD
// ============================================================
struct ForgotPasswordScreen: View {
    @State private var email = "mira@relay.dev"
    @State private var sent  = false
    @Environment(\.ct) private var t

    var body: some View {
        VStack(spacing: 0) {
            CAppBar(title: sent ? "Check your email" : "Forgot password", onBack: {})
            if sent {
                Spacer()
                VStack(spacing: CS.sm) {
                    ZStack {
                        RoundedRectangle(cornerRadius: 14).fill(t.green.opacity(0.12)).frame(width: 56, height: 56)
                        Image(systemName: "checkmark").font(.system(size: 22)).foregroundColor(t.green)
                    }
                    Text("Reset link sent").font(.system(size: 20, weight: .semibold)).foregroundColor(t.fg)
                    Text("We sent a reset link to **\(email)**. Check your inbox.").font(CTxt.callout).foregroundColor(t.mutedFg).multilineTextAlignment(.center)
                }
                .padding(.horizontal, CS.xl)
                Spacer()
                CBtn(label: "Back to sign in", action: {}, size: .full).padding(CS.md)
            } else {
                ScrollView {
                    VStack(alignment: .leading, spacing: CS.md) {
                        VStack(alignment: .leading, spacing: CS.s2xs) {
                            Text("Reset password.").font(.system(size: 26, weight: .semibold)).foregroundColor(t.fg).tracking(-0.8)
                            Text("Enter your email and we'll send a reset link.").font(CTxt.body).foregroundColor(t.mutedFg)
                        }
                        CField(label: "Email") { CInput(text: $email, placeholder: "you@work.com", keyboardType: .emailAddress) }
                        CBtn(label: "Send reset link", action: { sent = true }, size: .full)
                    }
                    .padding(CS.md)
                }
            }
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 10. HOME / DASHBOARD
// ============================================================
struct HomeScreen: View {
    @State private var range = "30d"
    @Environment(\.ct) private var t

    var body: some View {
        VStack(spacing: 0) {
            CLargeTitleBar(title: "Good morning, Mira.", kicker: "Cubicle",
                action: AnyView(Button(action: {}) { Image(systemName: "bell").font(.system(size: 18)).foregroundColor(t.fg) }))
            ScrollView {
                VStack(spacing: CS.md) {
                    LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: CS.sm) {
                        CKpi(label: "MRR",    value: "$48.2k", delta: "+12.4%", up: true)
                        CKpi(label: "Active", value: "2,148",  delta: "+3.1%",  up: true)
                        CKpi(label: "Churn",  value: "1.8%",   delta: "-0.4%",  up: false)
                        CKpi(label: "NPS",    value: "62",      delta: "+5",     up: true)
                    }
                    CCard {
                        HStack(alignment: .top) {
                            VStack(alignment: .leading, spacing: 2) {
                                Text("Revenue").font(CTxt.footnote).foregroundColor(t.mutedFg)
                                Text("$48,214").font(CTxt.chartBig).foregroundColor(t.fg).tracking(-0.6)
                            }
                            Spacer()
                            HStack(spacing: CS.s2xs) {
                                ForEach(["7d","30d","90d"], id: \.self) { r in
                                    CChip(label: r, active: range == r) { range = r }
                                }
                            }
                        }
                        CLineChart(data: [12,18,14,22,28,24,30,34,31,40,38,48]).padding(.top, CS.sm)
                    }
                    VStack(alignment: .leading, spacing: CS.xs) {
                        Text("QUICK ACTIONS").font(CTxt.captionMono).foregroundColor(t.mutedFg).tracking(1)
                        LazyVGrid(columns: Array(repeating: GridItem(.flexible()), count: 4), spacing: CS.xs) {
                            ForEach([("plus","New"),("creditcard","Pay"),("square.and.arrow.up","Share"),("chart.line.uptrend.xyaxis","Report")], id: \.0) { pair in
                                CCard(padding: EdgeInsets(top: 14, leading: CS.xs, bottom: 14, trailing: CS.xs)) {
                                    VStack(spacing: 6) {
                                        ZStack {
                                            Circle().fill(t.muted).frame(width: 36, height: 36)
                                            Image(systemName: pair.0).font(.system(size: 16)).foregroundColor(t.fg)
                                        }
                                        Text(pair.1).font(.system(size: 12, weight: .medium)).foregroundColor(t.fg)
                                    }
                                    .frame(maxWidth: .infinity)
                                }
                            }
                        }
                    }
                    VStack(alignment: .leading, spacing: CS.xs) {
                        HStack {
                            Text("RECENT ACTIVITY").font(CTxt.captionMono).foregroundColor(t.mutedFg).tracking(1)
                            Spacer()
                            Text("See all").font(.system(size: 11)).foregroundColor(t.fg)
                        }
                        VStack(spacing: 0) {
                            CListItem(title: "Payment from Acme Corp", subtitle: "$2,400 · 2 hours ago", leading: AnyView(Image(systemName: "creditcard").foregroundColor(t.fg)), trailing: AnyView(CBadge(label: "Paid", variant: .success)))
                            CListItem(title: "New signup — Lana Reyes", subtitle: "Starter plan · 4h ago", leading: AnyView(Image(systemName: "person").foregroundColor(t.fg)), trailing: AnyView(Image(systemName: "chevron.right").font(.system(size: 12)).foregroundColor(t.mutedFg)))
                            CListItem(title: "Invoice #1842 overdue", subtitle: "Humm Inc · 1d ago", leading: AnyView(Image(systemName: "exclamationmark.triangle").foregroundColor(t.fg)), trailing: AnyView(CBadge(label: "Late", variant: .warning)))
                            CListItem(title: "Report exported", subtitle: "Weekly KPIs · 2d ago", leading: AnyView(Image(systemName: "chart.bar").foregroundColor(t.fg)), trailing: AnyView(Image(systemName: "chevron.right").font(.system(size: 12)).foregroundColor(t.mutedFg)), showDivider: false)
                        }
                        .background(t.card)
                        .cornerRadius(CR.xl)
                        .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
                    }
                }
                .padding(CS.md)
                .padding(.bottom, 100)
            }
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 11. SEARCH
// ============================================================
struct SearchScreen: View {
    @State private var q      = ""
    @State private var filter = "all"
    @Environment(\.ct) private var t

    private let data: [(title: String, sub: String, icon: String)] = [
        ("Acme Corp",       "Customer · Enterprise",  "creditcard"),
        ("Weekly KPIs",     "Report · Updated today", "chart.line.uptrend.xyaxis"),
        ("Humm Inc",        "Customer · Pro",         "creditcard"),
        ("Onboarding flow", "Project · In progress",  "square.3.layers.3d"),
        ("Mira Chen",       "Teammate · Design",      "person"),
        ("Q1 Roadmap",      "Doc · Edited 2d ago",    "number"),
    ]
    private var filtered: [(title: String, sub: String, icon: String)] {
        q.isEmpty ? data : data.filter { $0.title.localizedCaseInsensitiveContains(q) }
    }

    var body: some View {
        VStack(spacing: 0) {
            CLargeTitleBar(title: "Search")
            ScrollView {
                VStack(spacing: CS.sm) {
                    CSearchInput(text: $q, placeholder: "Search everything")
                    ScrollView(.horizontal, showsIndicators: false) {
                        HStack(spacing: CS.xs) {
                            ForEach([("all","All"),("customers","Customers"),("reports","Reports"),("projects","Projects"),("people","People")], id: \.0) { item in
                                CChip(label: item.1, active: filter == item.0) { filter = item.0 }
                            }
                        }
                    }
                    if filtered.isEmpty {
                        CEmptyState(icon: "magnifyingglass", title: "Nothing here yet", desc: "No results matching \"\(q)\".")
                    } else {
                        VStack(spacing: 0) {
                            ForEach(Array(filtered.enumerated()), id: \.0) { i, item in
                                CListItem(
                                    title: item.title, subtitle: item.sub,
                                    leading: AnyView(Image(systemName: item.icon).foregroundColor(t.fg)),
                                    trailing: AnyView(Image(systemName: "chevron.right").font(.system(size: 12)).foregroundColor(t.mutedFg)),
                                    showDivider: i < filtered.count - 1
                                )
                            }
                        }
                        .background(t.card).cornerRadius(CR.xl)
                        .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
                    }
                }
                .padding(CS.md)
                .padding(.bottom, 100)
            }
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 12. CREATE / FORM
// ============================================================
struct CreateScreen: View {
    @State private var name   = ""
    @State private var cat    = "general"
    @State private var prio   = "normal"
    @State private var notify = true
    @State private var notes  = ""
    @Environment(\.ct) private var t
    private var err: String? { name.count > 0 && name.count < 3 ? "Name must be at least 3 characters." : nil }

    var body: some View {
        VStack(spacing: 0) {
            HStack {
                Button(action: {}) { Image(systemName: "xmark").font(.system(size: 18)).foregroundColor(t.fg) }.frame(width: 36, height: 36)
                Spacer()
                Text("New report").font(CTxt.appBarTitle).foregroundColor(t.fg)
                Spacer()
                CBtn(label: "Save", action: {}, size: .small)
            }
            .padding(.horizontal, CS.xs).padding(.vertical, CS.xs)
            .background(t.bg)
            ScrollView {
                VStack(spacing: CS.md) {
                    CField(label: "Name", error: err) { CInput(text: $name, placeholder: "Weekly KPIs") }
                    CField(label: "Category") {
                        ScrollView(.horizontal, showsIndicators: false) {
                            HStack(spacing: CS.xs) {
                                ForEach([("general","General"),("revenue","Revenue"),("growth","Growth"),("ops","Ops")], id: \.0) { item in
                                    CChip(label: item.1, active: cat == item.0) { cat = item.0 }
                                }
                            }
                        }
                    }
                    CField(label: "Priority") {
                        VStack(spacing: 0) {
                            ForEach([("low","Low"),("normal","Normal"),("high","High")], id: \.0) { item in
                                HStack(spacing: CS.sm) {
                                    CRadio(isSelected: Binding(get: { prio == item.0 }, set: { if $0 { prio = item.0 } }))
                                    Text(item.1).font(CTxt.body).foregroundColor(t.fg)
                                }
                                .padding(.vertical, 10)
                                Divider().background(t.border)
                            }
                        }
                    }
                    HStack {
                        Text("Notify team on publish").font(.system(size: 15, weight: .medium)).foregroundColor(t.fg)
                        Spacer()
                        CSwitch(isOn: $notify)
                    }
                    CField(label: "Notes") { CTextarea(text: $notes, placeholder: "Optional context for your team.") }
                    CBtn(label: "Discard draft", action: {}, variant: .destructive, size: .full, icon: "trash")
                }
                .padding(CS.md)
                .padding(.bottom, 100)
            }
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 13. INBOX
// ============================================================
struct InboxScreen: View {
    @State private var tab = "all"
    @Environment(\.ct) private var t

    private struct InboxItem { let cat, title, sub, time: String; let unread: Bool; let icon: String }
    private let items: [InboxItem] = [
        .init(cat:"alert",   title:"Invoice #1842 overdue",  sub:"Humm Inc · Payment 2d late",   time:"Just now", unread:true,  icon:"exclamationmark.triangle"),
        .init(cat:"mention", title:"Lana mentioned you",      sub:"In \"Q1 Roadmap\" doc",        time:"1h",       unread:true,  icon:"number"),
        .init(cat:"alert",   title:"Deploy succeeded",        sub:"cubicle@1.4.2 → production",   time:"3h",       unread:false, icon:"checkmark"),
        .init(cat:"mention", title:"Jamal replied",           sub:"Let's ship it next week.",     time:"Yesterday",unread:false, icon:"envelope"),
        .init(cat:"alert",   title:"Plan upgrade successful", sub:"Pro · $24/mo · annual",        time:"2d",       unread:false, icon:"creditcard"),
    ]
    private var filtered: [InboxItem] { tab == "all" ? items : items.filter { $0.cat == tab } }

    var body: some View {
        VStack(spacing: 0) {
            CLargeTitleBar(title: "Inbox", action: AnyView(Button(action: {}) { Image(systemName: "checkmark").foregroundColor(t.fg) }))
            ScrollView {
                VStack(spacing: CS.sm) {
                    ScrollView(.horizontal, showsIndicators: false) {
                        HStack(spacing: CS.xs) {
                            ForEach([("all","All"),("alert","Alerts"),("mention","Mentions")], id: \.0) { item in
                                CChip(label: item.1, active: tab == item.0) { tab = item.0 }
                            }
                        }
                    }
                    if filtered.isEmpty {
                        CEmptyState(icon: "tray", title: "Inbox zero", desc: "You're all caught up.")
                    } else {
                        VStack(spacing: 0) {
                            ForEach(Array(filtered.enumerated()), id: \.0) { i, item in
                                CListItem(
                                    title: item.title, subtitle: item.sub,
                                    leading: AnyView(Image(systemName: item.icon).foregroundColor(t.fg)),
                                    trailing: AnyView(Text(item.time).font(CTxt.captionMono).foregroundColor(t.mutedFg)),
                                    action: {},
                                    showDivider: i < filtered.count - 1
                                )
                            }
                        }
                        .background(t.card).cornerRadius(CR.xl)
                        .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
                    }
                }
                .padding(CS.md).padding(.bottom, 100)
            }
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 14. PROFILE
// ============================================================
struct ProfileScreen: View {
    @Environment(\.ct) private var t
    var body: some View {
        VStack(spacing: 0) {
            CLargeTitleBar(title: "Profile", action: AnyView(Button(action: {}) { Image(systemName: "gearshape").font(.system(size: 18)).foregroundColor(t.fg) }))
            ScrollView {
                VStack(spacing: CS.md) {
                    VStack(spacing: CS.xs) {
                        CAvatar(initials: "MC", large: true)
                        Text("Mira Chen").font(.system(size: 20, weight: .semibold)).foregroundColor(t.fg).tracking(-0.4)
                        Text("Head of Design · Relay").font(CTxt.callout).foregroundColor(t.mutedFg)
                        HStack(spacing: CS.xs) {
                            CBtn(label: "Edit profile", action: {}, variant: .outline, size: .small, icon: "pencil")
                            CBtn(label: "Share",        action: {}, variant: .outline, size: .small, icon: "square.and.arrow.up")
                        }
                    }
                    LazyVGrid(columns: Array(repeating: GridItem(.flexible()), count: 3), spacing: CS.sm) {
                        CKpi(label: "Projects", value: "14")
                        CKpi(label: "Reports",  value: "37")
                        CKpi(label: "Team",     value: "8")
                    }
                    VStack(alignment: .leading, spacing: CS.xs) {
                        CListHeader(label: "Account")
                        VStack(spacing: 0) {
                            CListItem(title: "Account details", leading: AnyView(Image(systemName: "person").foregroundColor(t.fg)), trailing: AnyView(Image(systemName: "chevron.right").font(.system(size: 12)).foregroundColor(t.mutedFg)), action: {})
                            CListItem(title: "Billing and plan", leading: AnyView(Image(systemName: "creditcard").foregroundColor(t.fg)), trailing: AnyView(CBadge(label: "Pro")), action: {})
                            CListItem(title: "Team workspaces", leading: AnyView(Image(systemName: "square.3.layers.3d").foregroundColor(t.fg)), trailing: AnyView(Text("2").font(CTxt.footnote).foregroundColor(t.mutedFg)), action: {})
                            CListItem(title: "Security and privacy", leading: AnyView(Image(systemName: "shield").foregroundColor(t.fg)), trailing: AnyView(Image(systemName: "chevron.right").font(.system(size: 12)).foregroundColor(t.mutedFg)), action: {}, showDivider: false)
                        }
                        .background(t.card).cornerRadius(CR.xl)
                        .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
                    }
                    VStack(alignment: .leading, spacing: CS.xs) {
                        CListHeader(label: "Support")
                        VStack(spacing: 0) {
                            CListItem(title: "Help and FAQs",   leading: AnyView(Image(systemName: "questionmark.circle").foregroundColor(t.fg)), trailing: AnyView(Image(systemName: "chevron.right").font(.system(size: 12)).foregroundColor(t.mutedFg)))
                            CListItem(title: "Contact support", leading: AnyView(Image(systemName: "envelope").foregroundColor(t.fg)), trailing: AnyView(Image(systemName: "chevron.right").font(.system(size: 12)).foregroundColor(t.mutedFg)))
                            CListItem(title: "What's new",      leading: AnyView(Image(systemName: "gift").foregroundColor(t.fg)), trailing: AnyView(Image(systemName: "chevron.right").font(.system(size: 12)).foregroundColor(t.mutedFg)), showDivider: false)
                        }
                        .background(t.card).cornerRadius(CR.xl)
                        .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
                    }
                    CBtn(label: "Sign out", action: {}, variant: .destructive, size: .full)
                }
                .padding(CS.md).padding(.bottom, 100)
            }
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 15. SETTINGS
// ============================================================
struct SettingsScreen: View {
    @State private var dark      = false
    @State private var biometric = true
    @State private var notif     = true
    @State private var marketing = false
    @Environment(\.ct) private var t

    var body: some View {
        VStack(spacing: 0) {
            CAppBar(title: "Settings", onBack: {})
            ScrollView {
                VStack(spacing: CS.md) {
                    VStack(alignment: .leading, spacing: CS.xs) {
                        CListHeader(label: "General")
                        VStack(spacing: 0) {
                            CListItem(title: "Dark mode", leading: AnyView(Image(systemName: dark ? "moon" : "sun.max").foregroundColor(t.fg)), trailing: AnyView(CSwitch(isOn: $dark)))
                            CListItem(title: "Language",  leading: AnyView(Image(systemName: "globe").foregroundColor(t.fg)), trailing: AnyView(Text("English").font(CTxt.footnote).foregroundColor(t.mutedFg)), showDivider: false)
                        }
                        .background(t.card).cornerRadius(CR.xl)
                        .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
                    }
                    VStack(alignment: .leading, spacing: CS.xs) {
                        CListHeader(label: "Security")
                        VStack(spacing: 0) {
                            CListItem(title: "Biometric unlock", subtitle: "Use Face ID to unlock the app", leading: AnyView(Image(systemName: "faceid").foregroundColor(t.fg)), trailing: AnyView(CSwitch(isOn: $biometric)))
                            CListItem(title: "Change password",  leading: AnyView(Image(systemName: "lock").foregroundColor(t.fg)), trailing: AnyView(Image(systemName: "chevron.right").font(.system(size: 12)).foregroundColor(t.mutedFg)), showDivider: false)
                        }
                        .background(t.card).cornerRadius(CR.xl)
                        .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
                    }
                    VStack(alignment: .leading, spacing: CS.xs) {
                        CListHeader(label: "Notifications")
                        VStack(spacing: 0) {
                            CListItem(title: "Push notifications", leading: AnyView(Image(systemName: "bell").foregroundColor(t.fg)), trailing: AnyView(CSwitch(isOn: $notif)))
                            CListItem(title: "Product updates", subtitle: "Weekly product emails", leading: AnyView(Image(systemName: "envelope").foregroundColor(t.fg)), trailing: AnyView(CSwitch(isOn: $marketing)), showDivider: false)
                        }
                        .background(t.card).cornerRadius(CR.xl)
                        .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
                    }
                    Text("Cubicle Mobile · v1.4.2 (build 2026.04)")
                        .font(CTxt.captionMono).foregroundColor(t.mutedFg).frame(maxWidth: .infinity)
                }
                .padding(CS.md).padding(.bottom, 100)
            }
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 16. HELP
// ============================================================
struct HelpScreen: View {
    @State private var openIdx = 0
    @Environment(\.ct) private var t
    private let faqs: [(q: String, a: String)] = [
        ("How do I upgrade my plan?",     "Open Profile → Billing and plan. Select Pro or Enterprise and follow the checkout flow."),
        ("Can I export my data?",         "Yes. From any report or list, tap More → Export. CSV, JSON, and PDF are supported."),
        ("Is biometric unlock secure?",   "Face ID and Touch ID keys are stored in the Secure Enclave and never leave your device."),
        ("How do I invite teammates?",    "Profile → Team workspaces → Invite. They will receive an email to join your workspace."),
    ]
    var body: some View {
        VStack(spacing: 0) {
            CAppBar(title: "Help", onBack: {})
            ScrollView {
                VStack(spacing: CS.md) {
                    CSearchInput(text: .constant(""), placeholder: "Search help articles")
                    VStack(alignment: .leading, spacing: CS.xs) {
                        CListHeader(label: "Frequently asked")
                        VStack(spacing: 0) {
                            ForEach(Array(faqs.enumerated()), id: \.0) { i, faq in
                                VStack(alignment: .leading, spacing: 0) {
                                    HStack {
                                        Text(faq.q).font(.system(size: 15, weight: .medium)).foregroundColor(t.fg)
                                        Spacer()
                                        Image(systemName: openIdx == i ? "chevron.up" : "chevron.down")
                                            .font(.system(size: 12)).foregroundColor(t.mutedFg)
                                    }
                                    .padding(.horizontal, CS.md).padding(.vertical, 14)
                                    .contentShape(Rectangle())
                                    .onTapGesture { openIdx = openIdx == i ? -1 : i }
                                    if openIdx == i {
                                        Text(faq.a).font(CTxt.callout).foregroundColor(t.mutedFg)
                                            .padding(.horizontal, CS.md).padding(.bottom, 14)
                                    }
                                    if i < faqs.count - 1 { Divider().padding(.leading, CS.md) }
                                }
                            }
                        }
                        .background(t.card).cornerRadius(CR.xl)
                        .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
                    }
                    CBtn(label: "Contact support", action: {}, variant: .outline, size: .full, icon: "envelope")
                }
                .padding(CS.md).padding(.bottom, 100)
            }
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 17. TRANSACTION DETAIL
// ============================================================
struct TransactionDetailScreen: View {
    @State private var showConfirm = false
    @Environment(\.ct) private var t

    var body: some View {
        ZStack {
            VStack(spacing: 0) {
                CAppBar(title: "Transaction", onBack: {})
                ScrollView {
                    VStack(spacing: CS.md) {
                        CCard {
                            VStack(spacing: CS.xs) {
                                CAvatar(initials: "AC", large: true)
                                Text("Acme Corp").font(CTxt.footnote).foregroundColor(t.mutedFg)
                                Text("+$2,400.00").font(.system(size: 36, weight: .bold)).foregroundColor(t.fg).tracking(-1.2)
                                CBadge(label: "Received", variant: .success)
                            }
                            .frame(maxWidth: .infinity)
                        }
                        VStack(spacing: 0) {
                            CListItem(title: "Revenue",    subtitle: "Category")
                            CListItem(title: "Today, 10:14", subtitle: "Date")
                            CListItem(title: "T1-2026",    subtitle: "Reference")
                            CListItem(title: "Settled",    subtitle: "Status", trailing: AnyView(CBadge(label: "Complete", variant: .success)), showDivider: false)
                        }
                        .background(t.card).cornerRadius(CR.xl)
                        .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
                        HStack(spacing: CS.xs) {
                            CBtn(label: "Share", action: {}, variant: .outline, size: .full, icon: "square.and.arrow.up")
                            CBtn(label: "Edit",  action: {}, variant: .outline, size: .full, icon: "pencil")
                        }
                        CBtn(label: "Delete transaction", action: { showConfirm = true }, variant: .destructive, size: .full, icon: "trash")
                    }
                    .padding(CS.md).padding(.bottom, 100)
                }
                .background(t.muted.ignoresSafeArea())
            }
            if showConfirm {
                CAlertDialog(
                    title: "Delete transaction?",
                    desc: "This cannot be undone. The transaction will be removed from all reports.",
                    confirmLabel: "Delete", destructive: true,
                    onConfirm: { showConfirm = false },
                    onCancel:  { showConfirm = false }
                )
            }
        }
    }
}

// ============================================================
// 18. LIST FEED
// ============================================================
struct ListFeedScreen: View {
    @State private var filter = "all"
    @State private var q      = ""
    @Environment(\.ct) private var t
    private let items: [(title: String, sub: String, icon: String, badge: String, bv: BadgeVariant)] = [
        ("Q1 Revenue Report",    "Updated 2h ago · Finance",  "chart.line.uptrend.xyaxis", "New",   .success),
        ("Onboarding Checklist", "6/8 tasks · Design",        "checklist",                 "",      .def),
        ("Infrastructure Costs", "Review needed · DevOps",    "globe",                     "Alert", .warning),
        ("Team Retro Notes",     "Yesterday · People",         "number",                   "",      .def),
        ("Marketing Leads",      "3d ago · Growth",            "bolt",                     "",      .def),
        ("Security Audit",       "Apr 8 · Compliance",         "shield",                   "Late",  .destructive),
    ]
    var body: some View {
        VStack(spacing: 0) {
            CLargeTitleBar(title: "Reports", action: AnyView(Button(action: {}) { Image(systemName: "plus").foregroundColor(t.fg) }))
            ScrollView {
                VStack(spacing: CS.sm) {
                    CSearchInput(text: $q, placeholder: "Search reports")
                    ScrollView(.horizontal, showsIndicators: false) {
                        HStack(spacing: CS.xs) {
                            ForEach([("all","All"),("finance","Finance"),("design","Design"),("devops","DevOps"),("growth","Growth")], id: \.0) { item in
                                CChip(label: item.1, active: filter == item.0) { filter = item.0 }
                            }
                        }
                    }
                    VStack(spacing: 0) {
                        ForEach(Array(items.enumerated()), id: \.0) { i, item in
                            CListItem(
                                title: item.title, subtitle: item.sub,
                                leading: AnyView(Image(systemName: item.icon).foregroundColor(t.fg)),
                                trailing: item.badge.isEmpty
                                    ? AnyView(Image(systemName: "chevron.right").font(.system(size: 12)).foregroundColor(t.mutedFg))
                                    : AnyView(CBadge(label: item.badge, variant: item.bv)),
                                action: {},
                                showDivider: i < items.count - 1
                            )
                        }
                    }
                    .background(t.card).cornerRadius(CR.xl)
                    .overlay(RoundedRectangle(cornerRadius: CR.xl).stroke(t.border, lineWidth: 1))
                }
                .padding(CS.md).padding(.bottom, 100)
            }
        }
        .background(t.bg.ignoresSafeArea())
    }
}

// ============================================================
// 19. NOTIFICATION DETAIL
// ============================================================
struct NotificationDetailScreen: View {
    @Environment(\.ct) private var t
    var body: some View {
        VStack(spacing: 0) {
            CAppBar(title: "Notification", onBack: {})
            ScrollView {
                CCard {
                    VStack(alignment: .leading, spacing: CS.sm) {
                        HStack(spacing: 10) {
                            ZStack {
                                RoundedRectangle(cornerRadius: CR.lg).fill(t.muted).frame(width: 36, height: 36)
                                Image(systemName: "exclamationmark.triangle").foregroundColor(t.fg)
                            }
                            VStack(alignment: .leading, spacing: 2) {
                                Text("Invoice #1842 overdue").font(.system(size: 15, weight: .semibold)).foregroundColor(t.fg)
                                Text("Just now").font(CTxt.footnote).foregroundColor(t.mutedFg)
                            }
                        }
                        Text("Humm Inc · Payment 2d late. Open the related item to take action. You can also dismiss or snooze this notification for later.")
                            .font(CTxt.callout).foregroundColor(t.fg)
                        HStack(spacing: CS.xs) {
                            CBtn(label: "Open",  action: {})
                            CBtn(label: "Snooze", action: {}, variant: .outline)
                            CBtn(label: "", action: {}, variant: .ghost, icon: "trash")
                        }
                    }
                }
                .padding(CS.md)
            }
        }
        .background(t.bg.ignoresSafeArea())
    }
}
