package com.cubicle

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.DarkMode
import androidx.compose.material.icons.outlined.LightMode
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.cubicle.ui.components.CBtn
import com.cubicle.ui.components.BtnVariant
import com.cubicle.ui.components.BtnSize
import com.cubicle.ui.screens.*
import com.cubicle.ui.theme.CP
import com.cubicle.ui.theme.CR
import com.cubicle.ui.theme.CS
import com.cubicle.ui.theme.CubicleColors
import com.cubicle.ui.theme.CubicleTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            var darkOverride by remember { mutableStateOf<Boolean?>(null) }
            val sysDark = isSystemInDarkTheme()
            val dark = darkOverride ?: sysDark

            CubicleTheme(darkTheme = dark) {
                KitShowcase(dark = dark, onToggleDark = { darkOverride = !dark })
            }
        }
    }
}

// ============================================================
// PHONE FRAME
// ============================================================
@Composable
fun PhoneFrame(
    label: String? = null,
    dark: Boolean = false,
    content: @Composable () -> Unit,
) {
    val frameColor = if (dark) CP.n700 else CP.n200
    val bgColor    = if (dark) CP.n950 else CP.white
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Box(
            modifier = Modifier
                .width(300.dp).height(650.dp)
                .shadow(20.dp, RoundedCornerShape(36.dp))
                .clip(RoundedCornerShape(36.dp))
                .background(bgColor)
                .border(2.dp, frameColor, RoundedCornerShape(36.dp)),
        ) {
            CubicleTheme(darkTheme = dark) { content() }
            // Status bar strip
            Row(
                modifier = Modifier.fillMaxWidth().height(40.dp).padding(horizontal = 20.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Text("9:41", fontSize = 13.sp, fontWeight = FontWeight.W600, color = if (dark) CP.n50 else CP.n950)
                Spacer(Modifier.weight(1f))
                Text("●●● ▲ 🔋", fontSize = 11.sp, color = if (dark) CP.n50 else CP.n950)
            }
        }
        if (label != null) {
            Spacer(Modifier.height(12.dp))
            Text(
                label.uppercase(),
                fontSize = 11.sp,
                fontFamily = FontFamily.Monospace,
                letterSpacing = 1.5.sp,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
            )
        }
    }
}

// ============================================================
// SECTION
// ============================================================
@Composable
fun KitSection(title: String, content: @Composable () -> Unit) {
    Column(modifier = Modifier.padding(horizontal = CS.xl2.dp).padding(top = CS.xl3.dp)) {
        Text(
            title.uppercase(),
            fontSize = 11.sp, fontFamily = FontFamily.Monospace,
            letterSpacing = 1.5.sp, color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
        HorizontalDivider(modifier = Modifier.padding(top = CS.sm.dp, bottom = CS.lg.dp), color = MaterialTheme.colorScheme.outline)
        content()
    }
}

// ============================================================
// MAIN SHOWCASE
// ============================================================
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun KitShowcase(dark: Boolean, onToggleDark: () -> Unit) {
    val c = CubicleColors(dark)
    LazyColumn(
        modifier = Modifier.fillMaxSize().background(c.bg),
        contentPadding = PaddingValues(bottom = CS.xl3.dp),
    ) {
        // ── Header ──
        item {
            Row(
                modifier = Modifier.fillMaxWidth().background(c.bg)
                    .windowInsetsPadding(WindowInsets.statusBars)
                    .padding(horizontal = CS.xl2.dp, vertical = CS.md.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Column {
                    Text("Cubicle · Android", fontSize = 15.sp, fontWeight = FontWeight.W700, color = c.fg, letterSpacing = (-0.4).sp)
                    Text("UI Kit · v1.4", fontSize = 13.sp, fontFamily = FontFamily.Monospace, color = c.mutedFg)
                }
                Spacer(Modifier.weight(1f))
                FilledTonalButton(
                    onClick = onToggleDark,
                    colors = ButtonDefaults.filledTonalButtonColors(containerColor = c.card),
                ) {
                    Icon(if (dark) Icons.Outlined.LightMode else Icons.Outlined.DarkMode, null, tint = c.fg, modifier = Modifier.size(14.dp))
                    Spacer(Modifier.width(CS.s2xs.dp))
                    Text(if (dark) "Light" else "Dark", fontSize = 13.sp, color = c.fg)
                }
            }
        }

        // ── 1. System Screens ──
        item {
            KitSection("System Screens") {
                LazyRow(horizontalArrangement = Arrangement.spacedBy(CS.xl2.dp)) {
                    item { PhoneFrame("Splash",      dark) { SplashScreen() } }
                    item { PhoneFrame("Maintenance", dark) { MaintenanceScreen() } }
                    item { PhoneFrame("Offline",     dark) { OfflineScreen() } }
                    item { PhoneFrame("Error",       dark) { ErrorScreen() } }
                }
            }
        }

        // ── 2. Onboarding ──
        item {
            KitSection("Onboarding") {
                LazyRow(horizontalArrangement = Arrangement.spacedBy(CS.xl2.dp)) {
                    item { PhoneFrame("Intro slides", dark) { OnboardingScreen() } }
                }
            }
        }

        // ── 3. Authentication ──
        item {
            KitSection("Authentication") {
                LazyRow(horizontalArrangement = Arrangement.spacedBy(CS.xl2.dp)) {
                    item { PhoneFrame("Sign in",         dark) { LoginScreen() } }
                    item { PhoneFrame("OTP verify",      dark) { OTPScreen() } }
                }
            }
        }

        // ── 4. Home ──
        item {
            KitSection("Home — Dashboard") {
                LazyRow(horizontalArrangement = Arrangement.spacedBy(CS.xl2.dp)) {
                    item { PhoneFrame("Dashboard", dark) { HomeScreen() } }
                }
            }
        }

        // ── 5. Navigation ──
        item {
            KitSection("Main Navigation — Tabs") {
                LazyRow(horizontalArrangement = Arrangement.spacedBy(CS.xl2.dp)) {
                    item { PhoneFrame("Search",  dark) { SearchScreen() } }
                    item { PhoneFrame("Create",  dark) { CreateScreen() } }
                    item { PhoneFrame("Inbox",   dark) { InboxScreen() } }
                    item { PhoneFrame("Profile", dark) { ProfileScreen() } }
                }
            }
        }

        // ── 6. Settings & Support ──
        item {
            KitSection("Settings & Support") {
                LazyRow(horizontalArrangement = Arrangement.spacedBy(CS.xl2.dp)) {
                    item { PhoneFrame("Settings", dark) { SettingsScreen() } }
                    item { PhoneFrame("Help",     dark) { HelpScreen() } }
                }
            }
        }

        // ── Footer ──
        item {
            HorizontalDivider(modifier = Modifier.padding(top = CS.xl3.dp), color = MaterialTheme.colorScheme.outline)
            Row(
                modifier = Modifier.fillMaxWidth().padding(horizontal = CS.xl2.dp, vertical = CS.xl3.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
            ) {
                Text("Cubicle Design System · Android UI Kit", fontSize = 13.sp, fontFamily = FontFamily.Monospace, color = c.mutedFg)
                Text("2026", fontSize = 13.sp, fontFamily = FontFamily.Monospace, color = c.mutedFg)
            }
        }
    }
}
