// Cubicle Mobile UI Kit — iOS Showcase
// Mirrors the web kit's section-by-section layout

import SwiftUI

// ============================================================
// PHONE FRAME
// ============================================================
struct PhoneFrame: View {
    let label: String?
    let dark: Bool
    let content: AnyView

    @Environment(\.ct) private var t

    init(label: String? = nil, dark: Bool = false, @ViewBuilder content: () -> some View) {
        self.label = label
        self.dark  = dark
        self.content = AnyView(content())
    }

    var body: some View {
        VStack(spacing: 12) {
            ZStack(alignment: .top) {
                RoundedRectangle(cornerRadius: 36)
                    .fill(dark ? CP.n950 : Color.white)
                    .overlay(RoundedRectangle(cornerRadius: 36).stroke(dark ? CP.n700 : CP.n200, lineWidth: 2))
                    .frame(width: 300, height: 650)
                    .shadow(color: .black.opacity(0.15), radius: 30, y: 10)

                content
                    .frame(width: 300, height: 650)
                    .clipShape(RoundedRectangle(cornerRadius: 36))
                    .environment(\.ct, CT(dark: dark))

                // Status bar
                HStack {
                    Text("9:41")
                        .font(.system(size: 13, weight: .semibold))
                        .foregroundColor(dark ? CP.n50 : CP.n950)
                    Spacer()
                    HStack(spacing: 4) {
                        Image(systemName: "antenna.radiowaves.left.and.right").font(.system(size: 11))
                        Image(systemName: "wifi").font(.system(size: 11))
                        Image(systemName: "battery.100").font(.system(size: 11))
                    }
                    .foregroundColor(dark ? CP.n50 : CP.n950)
                }
                .padding(.horizontal, 20)
                .frame(width: 300, height: 40)
            }
            .frame(width: 300, height: 650)

            if let label {
                Text(label.uppercased())
                    .font(.system(size: 11, weight: .medium, design: .monospaced))
                    .foregroundColor(t.mutedFg)
                    .tracking(1.5)
            }
        }
    }
}

// ============================================================
// SECTION
// ============================================================
struct KitSection<Content: View>: View {
    let title: String
    let content: () -> Content
    @Environment(\.ct) private var t

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            VStack(alignment: .leading, spacing: CS.sm) {
                Text(title.uppercased())
                    .font(.system(size: 11, weight: .medium, design: .monospaced))
                    .foregroundColor(t.mutedFg)
                    .tracking(1.5)
                Rectangle().fill(t.border).frame(height: 1)
            }
            .padding(.bottom, CS.lg)
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(alignment: .top, spacing: CS.xl2) {
                    content()
                }
            }
        }
        .padding(.horizontal, CS.xl2)
        .padding(.top, CS.xl3)
    }
}

// ============================================================
// MAIN SHOWCASE
// ============================================================
struct ContentView: View {
    let dark: Bool
    let onToggleDark: () -> Void
    @Environment(\.ct) private var t

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {

                // ── Header ──
                HStack {
                    VStack(alignment: .leading, spacing: 2) {
                        Text("Cubicle · iOS")
                            .font(.system(size: 15, weight: .bold)).foregroundColor(t.fg).tracking(-0.4)
                        Text("UI Kit · v1.4")
                            .font(.system(size: 13, design: .monospaced)).foregroundColor(t.mutedFg)
                    }
                    Spacer()
                    Button(action: onToggleDark) {
                        HStack(spacing: CS.s2xs + 2) {
                            Image(systemName: dark ? "sun.max" : "moon").font(.system(size: 13))
                            Text(dark ? "Light" : "Dark").font(.system(size: 13))
                        }
                        .foregroundColor(t.fg)
                        .padding(.horizontal, CS.sm)
                        .padding(.vertical, CS.s2xs + 2)
                        .background(t.card)
                        .cornerRadius(CR.lg)
                        .overlay(RoundedRectangle(cornerRadius: CR.lg).stroke(t.input, lineWidth: 1))
                    }
                }
                .padding(.horizontal, CS.xl2)
                .padding(.top, CS.md)
                .padding(.bottom, CS.md)

                // ── 1. System Screens ──
                KitSection(title: "System Screens") {
                    PhoneFrame(label: "Splash",      dark: dark) { SplashScreen() }
                    PhoneFrame(label: "Maintenance", dark: dark) { MaintenanceScreen() }
                    PhoneFrame(label: "Offline",     dark: dark) { OfflineScreen() }
                    PhoneFrame(label: "Error",       dark: dark) { ErrorScreen() }
                }

                // ── 2. Onboarding ──
                KitSection(title: "Onboarding") {
                    PhoneFrame(label: "Intro slides", dark: dark) { OnboardingScreen() }
                }

                // ── 3. Authentication ──
                KitSection(title: "Authentication") {
                    PhoneFrame(label: "Sign in",         dark: dark) { LoginScreen() }
                    PhoneFrame(label: "Register",        dark: dark) { RegisterScreen() }
                    PhoneFrame(label: "Forgot password", dark: dark) { ForgotPasswordScreen() }
                    PhoneFrame(label: "OTP verify",      dark: dark) { OTPScreen() }
                }

                // ── 4. Home ──
                KitSection(title: "Home — Dashboard") {
                    PhoneFrame(label: "Dashboard", dark: dark) { HomeScreen() }
                }

                // ── 5. Navigation ──
                KitSection(title: "Main Navigation — Tabs") {
                    PhoneFrame(label: "Search",  dark: dark) { SearchScreen() }
                    PhoneFrame(label: "Create",  dark: dark) { CreateScreen() }
                    PhoneFrame(label: "Inbox",   dark: dark) { InboxScreen() }
                    PhoneFrame(label: "Profile", dark: dark) { ProfileScreen() }
                }

                // ── 6. Content ──
                KitSection(title: "Content — List / Feed / Detail") {
                    PhoneFrame(label: "List / Feed",   dark: dark) { ListFeedScreen() }
                    PhoneFrame(label: "Transactions",  dark: dark) { TransactionDetailScreen() }
                }

                // ── 7. Detail & Forms ──
                KitSection(title: "Detail & Create / Edit") {
                    PhoneFrame(label: "Transaction detail",   dark: dark) { TransactionDetailScreen() }
                    PhoneFrame(label: "Notification detail",  dark: dark) { NotificationDetailScreen() }
                }

                // ── 8. Settings & Support ──
                KitSection(title: "Settings & Support") {
                    PhoneFrame(label: "Settings", dark: dark) { SettingsScreen() }
                    PhoneFrame(label: "Help",     dark: dark) { HelpScreen() }
                }

                // ── Footer ──
                Rectangle().fill(t.border).frame(height: 1)
                    .padding(.horizontal, CS.xl2)
                    .padding(.top, CS.xl3)
                HStack {
                    Text("Cubicle Design System · iOS UI Kit")
                        .font(.system(size: 13, design: .monospaced)).foregroundColor(t.mutedFg)
                    Spacer()
                    Text("2026")
                        .font(.system(size: 13, design: .monospaced)).foregroundColor(t.mutedFg)
                }
                .padding(.horizontal, CS.xl2)
                .padding(.vertical, CS.xl3)
            }
        }
        .background(t.bg.ignoresSafeArea())
    }
}
