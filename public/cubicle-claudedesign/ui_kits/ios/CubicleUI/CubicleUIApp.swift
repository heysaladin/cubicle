// Cubicle UI Kit — iOS App Entry Point
// Open in Xcode, run on simulator or device
// Requires iOS 16+, Swift 5.9+

import SwiftUI

@main
struct CubicleUIApp: App {
    var body: some Scene {
        WindowGroup {
            RootView()
        }
    }
}

struct RootView: View {
    @State private var dark = false
    var body: some View {
        ContentView(dark: dark, onToggleDark: { dark.toggle() })
            .environment(\.ct, CT(dark: dark))
            .preferredColorScheme(dark ? .dark : .light)
    }
}
