package com.cubicle.ui.screens

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.cubicle.ui.components.*
import com.cubicle.ui.theme.CP
import com.cubicle.ui.theme.CR
import com.cubicle.ui.theme.CS
import com.cubicle.ui.theme.CubicleColors

// ============================================================
// 1. SPLASH
// ============================================================
@Composable
fun SplashScreen() {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    Box(modifier = Modifier.fillMaxSize().background(c.bg), contentAlignment = Alignment.Center) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Box(modifier = Modifier.size(64.dp).clip(RoundedCornerShape(14.dp)).background(c.fg))
            Spacer(Modifier.height(CS.md.dp))
            Text("cubicle", fontSize = 22.sp, fontWeight = FontWeight.W700, color = c.fg, letterSpacing = (-0.7).sp)
        }
        Box(modifier = Modifier.align(Alignment.BottomCenter).padding(bottom = 80.dp)) {
            CircularProgressIndicator(modifier = Modifier.size(20.dp), color = c.primary, trackColor = c.muted, strokeWidth = 2.5.dp)
        }
    }
}

// ============================================================
// 2. MAINTENANCE
// ============================================================
@Composable
fun MaintenanceScreen() {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    Column(modifier = Modifier.fillMaxSize().background(c.bg)) {
        CLargeTitleBar("Maintenance")
        Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            CEmptyState(
                icon = Icons.Outlined.Settings,
                title = "Down for maintenance",
                desc = "We're making improvements. This won't take long — we'll be back shortly.",
                action = {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Text("ESTIMATED TIME", fontSize = 11.sp, fontFamily = androidx.compose.ui.text.font.FontFamily.Monospace, color = c.mutedFg, letterSpacing = 1.sp)
                        Text("~15 min", fontSize = 28.sp, fontWeight = FontWeight.W700, color = c.fg, letterSpacing = (-0.8).sp)
                    }
                }
            )
        }
    }
}

// ============================================================
// 3. OFFLINE
// ============================================================
@Composable
fun OfflineScreen() {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    Column(modifier = Modifier.fillMaxSize().background(c.bg)) {
        CLargeTitleBar("Connection lost")
        Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            CEmptyState(
                icon = Icons.Outlined.WifiOff,
                title = "You're offline",
                desc = "Check your connection and we'll pick up where you left off.",
                action = { CBtn("Retry", onClick = {}, leadingIcon = Icons.Outlined.Wifi) },
            )
        }
    }
}

// ============================================================
// 4. ERROR
// ============================================================
@Composable
fun ErrorScreen() {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    Column(modifier = Modifier.fillMaxSize().background(c.bg)) {
        CLargeTitleBar("Error")
        Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            CEmptyState(
                icon = Icons.Outlined.WarningAmber,
                title = "Something went wrong",
                desc = "We couldn't load this page. Try again or contact support if the problem persists.",
                action = {
                    Row(horizontalArrangement = Arrangement.spacedBy(CS.xs.dp)) {
                        CBtn("Try again",  onClick = {}, leadingIcon = Icons.Outlined.Refresh)
                        CBtn("Support",    onClick = {}, variant = BtnVariant.Outline, leadingIcon = Icons.Outlined.Mail)
                    }
                },
            )
        }
    }
}

// ============================================================
// 5. ONBOARDING
// ============================================================
private val onbSlides = listOf(
    Triple("Quiet by design.",       "A focus-first workspace that stays out of your way until you need it.",        Icons.Outlined.BoltOutlined),
    Triple("Your stack, tokenized.", "Every color, radius and shadow lives as a CSS variable. Brand it in minutes.", Icons.Outlined.Layers),
    Triple("Ship considered work.",  "From prototype to production on one system, one voice, one type.",             Icons.Outlined.Security),
)

@Composable
fun OnboardingScreen() {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    var idx by remember { mutableIntStateOf(0) }
    val slide = onbSlides[idx]
    Column(
        modifier = Modifier.fillMaxSize().background(c.bg).padding(horizontal = CS.xl2.dp).padding(top = CS.xl6.dp, bottom = CS.xl3.dp),
        verticalArrangement = Arrangement.SpaceBetween,
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Box(
                modifier = Modifier.size(180.dp).clip(RoundedCornerShape(24.dp)).background(c.muted).border(1.dp, c.border, RoundedCornerShape(24.dp)),
                contentAlignment = Alignment.Center,
            ) { Icon(slide.third, null, tint = c.mutedFg, modifier = Modifier.size(48.dp)) }
            Spacer(Modifier.height(CS.xl2.dp))
            Text(slide.first, fontSize = 30.sp, fontWeight = FontWeight.W600, color = c.fg, textAlign = TextAlign.Center, lineHeight = 34.sp, letterSpacing = (-1.2).sp)
            Spacer(Modifier.height(CS.sm.dp))
            Text(slide.second, fontSize = 16.sp, color = c.mutedFg, textAlign = TextAlign.Center, lineHeight = 24.sp)
        }
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                onbSlides.forEachIndexed { k, _ ->
                    val active = k == idx
                    Box(
                        modifier = Modifier
                            .width(if (active) 20.dp else 6.dp).height(6.dp)
                            .clip(RoundedCornerShape(3.dp))
                            .background(if (active) c.fg else c.border),
                    )
                }
            }
            Spacer(Modifier.height(CS.lg.dp))
            CBtn("Continue", onClick = { if (idx < onbSlides.size - 1) idx++ }, size = BtnSize.Full)
            Spacer(Modifier.height(CS.sm.dp))
            CBtn("Skip", onClick = {}, variant = BtnVariant.Ghost, size = BtnSize.Small)
        }
    }
}

// ============================================================
// 6. LOGIN
// ============================================================
@Composable
fun LoginScreen() {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    var email by remember { mutableStateOf("mira@relay.dev") }
    var pw    by remember { mutableStateOf("") }
    var show  by remember { mutableStateOf(false) }
    Column(modifier = Modifier.fillMaxSize().background(c.bg)) {
        CAppBar("Sign in", onBack = {})
        LazyColumn(modifier = Modifier.fillMaxSize(), contentPadding = PaddingValues(CS.md.dp), verticalArrangement = Arrangement.spacedBy(CS.md.dp)) {
            item {
                Column(verticalArrangement = Arrangement.spacedBy(CS.s2xs.dp)) {
                    Text("Welcome back.", fontSize = 26.sp, fontWeight = FontWeight.W600, color = c.fg, letterSpacing = (-0.8).sp)
                    Text("Enter your credentials to continue.", style = MaterialTheme.typography.bodyLarge, color = c.mutedFg)
                }
            }
            item { CField("Email") { CInput(email, onValueChange = { email = it }, keyboardType = androidx.compose.ui.text.input.KeyboardType.Email) } }
            item { CField("Password", hint = "At least 8 characters.") { CInput(pw, onValueChange = { pw = it }, obscure = !show, trailingIcon = { IconButton(onClick = { show = !show }) { Icon(if (show) Icons.Outlined.VisibilityOff else Icons.Outlined.Visibility, null, tint = c.mutedFg) } }) } }
            item { CBtn("Continue", onClick = {}, size = BtnSize.Full) }
            item { CBtn("Use Face ID", onClick = {}, variant = BtnVariant.Outline, size = BtnSize.Full, leadingIcon = Icons.Outlined.Fingerprint) }
            item { Text("Forgot your password?", color = c.mutedFg, fontSize = 14.sp, fontWeight = FontWeight.W500, modifier = Modifier.fillMaxWidth(), textAlign = TextAlign.Center) }
        }
    }
}

// ============================================================
// 7. OTP
// ============================================================
@Composable
fun OTPScreen() {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    val code = listOf("2","4","7","","","")
    Column(modifier = Modifier.fillMaxSize().background(c.bg)) {
        CAppBar("Verify", onBack = {})
        LazyColumn(modifier = Modifier.fillMaxSize(), contentPadding = PaddingValues(CS.md.dp), verticalArrangement = Arrangement.spacedBy(CS.md.dp)) {
            item {
                Column(verticalArrangement = Arrangement.spacedBy(CS.s2xs.dp)) {
                    Text("Check your email", fontSize = 26.sp, fontWeight = FontWeight.W600, color = c.fg, letterSpacing = (-0.8).sp)
                    Text("We sent a 6-digit code to mira@relay.dev. Enter it below to continue.", style = MaterialTheme.typography.bodyLarge, color = c.mutedFg)
                }
            }
            item {
                Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.Center) {
                    code.forEachIndexed { i, ch ->
                        Box(
                            modifier = Modifier.padding(horizontal = 5.dp).size(48.dp, 56.dp)
                                .clip(RoundedCornerShape(CR.def.dp))
                                .background(c.bg)
                                .border(if (i == 3) 2.dp else 1.dp, if (i == 3) c.ring else c.input, RoundedCornerShape(CR.def.dp)),
                            contentAlignment = Alignment.Center,
                        ) { Text(ch, fontSize = 22.sp, fontWeight = FontWeight.W600, color = c.fg) }
                    }
                }
            }
            item { CBtn("Verify and continue", onClick = {}, size = BtnSize.Full) }
            item { Box(modifier = Modifier.fillMaxWidth(), contentAlignment = Alignment.Center) { CBtn("Resend code in 28s", onClick = {}, variant = BtnVariant.Ghost, size = BtnSize.Small) } }
        }
    }
}

// ============================================================
// 8. HOME / DASHBOARD
// ============================================================
@Composable
fun HomeScreen() {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    var range by remember { mutableStateOf("30d") }
    Column(modifier = Modifier.fillMaxSize().background(c.bg)) {
        CLargeTitleBar("Good morning, Mira.", kicker = "Cubicle", action = { IconButton(onClick = {}) { Icon(Icons.Outlined.Notifications, null, tint = c.fg) } })
        LazyColumn(modifier = Modifier.fillMaxSize(), contentPadding = PaddingValues(CS.md.dp), verticalArrangement = Arrangement.spacedBy(CS.md.dp)) {
            item {
                Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(CS.sm.dp)) {
                    Column(modifier = Modifier.weight(1f), verticalArrangement = Arrangement.spacedBy(CS.sm.dp)) {
                        CKpi("MRR",    "\$48.2k", delta = "+12.4%", up = true)
                        CKpi("Churn",  "1.8%",    delta = "-0.4%",  up = false)
                    }
                    Column(modifier = Modifier.weight(1f), verticalArrangement = Arrangement.spacedBy(CS.sm.dp)) {
                        CKpi("Active", "2,148",   delta = "+3.1%",  up = true)
                        CKpi("NPS",    "62",       delta = "+5",     up = true)
                    }
                }
            }
            item {
                CCard {
                    Row(modifier = Modifier.fillMaxWidth(), verticalAlignment = Alignment.Top) {
                        Column {
                            Text("Revenue", fontSize = 13.sp, color = c.mutedFg)
                            Text("\$48,214", fontSize = 24.sp, fontWeight = FontWeight.W700, color = c.fg, letterSpacing = (-0.6).sp)
                        }
                        Spacer(Modifier.weight(1f))
                        Row(horizontalArrangement = Arrangement.spacedBy(CS.s2xs.dp)) {
                            listOf("7d","30d","90d").forEach { r -> CChip(r, active = range == r, onClick = { range = r }) }
                        }
                    }
                    Spacer(Modifier.height(CS.sm.dp))
                    // Simple bar chart placeholder
                    Row(modifier = Modifier.fillMaxWidth().height(80.dp), horizontalArrangement = Arrangement.spacedBy(3.dp), verticalAlignment = Alignment.Bottom) {
                        listOf(12,18,14,22,28,24,30,34,31,40,38,48).forEach { v ->
                            Box(modifier = Modifier.weight(1f).fillMaxHeight(v / 48f).clip(RoundedCornerShape(topStart = 2.dp, topEnd = 2.dp)).background(c.fg.copy(alpha = 0.5f)))
                        }
                    }
                }
            }
            item {
                Column(verticalArrangement = Arrangement.spacedBy(CS.xs.dp)) {
                    Text("QUICK ACTIONS", fontSize = 11.sp, fontFamily = androidx.compose.ui.text.font.FontFamily.Monospace, color = c.mutedFg, letterSpacing = 1.sp)
                    Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(CS.xs.dp)) {
                        listOf(Triple(Icons.Outlined.Add,"New",{}),Triple(Icons.Outlined.CreditCard,"Pay",{}),Triple(Icons.Outlined.Share,"Share",{}),Triple(Icons.Outlined.ShowChart,"Report",{})).forEach { (icon,label,action) ->
                            CCard(modifier = Modifier.weight(1f), padding = PaddingValues(vertical = 14.dp)) {
                                Column(modifier = Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.spacedBy(6.dp)) {
                                    Box(Modifier.size(36.dp).clip(CircleShape).background(c.muted), contentAlignment = Alignment.Center) { Icon(icon, null, tint = c.fg, modifier = Modifier.size(18.dp)) }
                                    Text(label, fontSize = 12.sp, fontWeight = FontWeight.W500, color = c.fg)
                                }
                            }
                        }
                    }
                }
            }
            item {
                Column(verticalArrangement = Arrangement.spacedBy(CS.xs.dp)) {
                    Text("RECENT ACTIVITY", fontSize = 11.sp, fontFamily = androidx.compose.ui.text.font.FontFamily.Monospace, color = c.mutedFg, letterSpacing = 1.sp)
                    Column(modifier = Modifier.clip(RoundedCornerShape(CR.xl.dp)).background(c.card).border(1.dp, c.border, RoundedCornerShape(CR.xl.dp))) {
                        CListItem("Payment from Acme Corp", subtitle = "\$2,400 · 2 hours ago", leading = { Icon(Icons.Outlined.AccountBalanceWallet, null, tint = c.fg) }, trailing = { CBadge("Paid", BadgeVariant.Success) })
                        CListItem("New signup — Lana Reyes", subtitle = "Starter plan · 4h ago", leading = { Icon(Icons.Outlined.Person, null, tint = c.fg) }, trailing = { Icon(Icons.Outlined.ChevronRight, null, tint = c.mutedFg, modifier = Modifier.size(14.dp)) })
                        CListItem("Invoice #1842 overdue", subtitle = "Humm Inc · 1d ago", leading = { Icon(Icons.Outlined.Warning, null, tint = c.fg) }, trailing = { CBadge("Late", BadgeVariant.Warning) })
                        CListItem("Report exported", subtitle = "Weekly KPIs · 2d ago", leading = { Icon(Icons.Outlined.ShowChart, null, tint = c.fg) }, trailing = { Icon(Icons.Outlined.ChevronRight, null, tint = c.mutedFg, modifier = Modifier.size(14.dp)) }, showDivider = false)
                    }
                }
            }
        }
    }
}

// ============================================================
// 9. SEARCH
// ============================================================
@Composable
fun SearchScreen() {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    var q      by remember { mutableStateOf("") }
    var filter by remember { mutableStateOf("all") }
    val data = listOf(
        Triple("Acme Corp",       "Customer · Enterprise",  Icons.Outlined.AccountBalanceWallet),
        Triple("Weekly KPIs",     "Report · Updated today", Icons.Outlined.ShowChart),
        Triple("Humm Inc",        "Customer · Pro",         Icons.Outlined.AccountBalanceWallet),
        Triple("Onboarding flow", "Project · In progress",  Icons.Outlined.Layers),
        Triple("Mira Chen",       "Teammate · Design",      Icons.Outlined.Person),
        Triple("Q1 Roadmap",      "Doc · Edited 2d ago",    Icons.Outlined.Tag),
    )
    val filtered = data.filter { q.isEmpty() || it.first.contains(q, ignoreCase = true) }
    Column(modifier = Modifier.fillMaxSize().background(c.bg)) {
        CLargeTitleBar("Search")
        LazyColumn(modifier = Modifier.fillMaxSize(), contentPadding = PaddingValues(CS.md.dp), verticalArrangement = Arrangement.spacedBy(CS.sm.dp)) {
            item { CSearchInput(q, { q = it }) }
            item {
                LazyRow(horizontalArrangement = Arrangement.spacedBy(CS.xs.dp)) {
                    items(listOf("all" to "All","customers" to "Customers","reports" to "Reports","projects" to "Projects")) { (id, label) ->
                        CChip(label, active = filter == id, onClick = { filter = id })
                    }
                }
            }
            if (filtered.isEmpty()) {
                item { CEmptyState(Icons.Outlined.Search, "Nothing here yet", "No results matching \"$q\".") }
            } else {
                item {
                    Column(modifier = Modifier.clip(RoundedCornerShape(CR.xl.dp)).background(c.card).border(1.dp, c.border, RoundedCornerShape(CR.xl.dp))) {
                        filtered.forEachIndexed { i, item ->
                            CListItem(item.first, subtitle = item.second, leading = { Icon(item.third, null, tint = c.fg) }, trailing = { Icon(Icons.Outlined.ChevronRight, null, tint = c.mutedFg, modifier = Modifier.size(14.dp)) }, showDivider = i < filtered.size - 1)
                        }
                    }
                }
            }
        }
    }
}

// ============================================================
// 10. CREATE / FORM
// ============================================================
@Composable
fun CreateScreen() {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    var name   by remember { mutableStateOf("") }
    var cat    by remember { mutableStateOf("general") }
    var prio   by remember { mutableStateOf("normal") }
    var notify by remember { mutableStateOf(true) }
    var notes  by remember { mutableStateOf("") }

    Column(modifier = Modifier.fillMaxSize().background(c.bg)) {
        Row(modifier = Modifier.fillMaxWidth().background(c.bg).padding(horizontal = CS.xs.dp, vertical = CS.xs.dp), verticalAlignment = Alignment.CenterVertically) {
            IconButton(onClick = {}, modifier = Modifier.size(36.dp)) { Icon(Icons.Outlined.Close, null, tint = c.fg) }
            Text("New report", modifier = Modifier.weight(1f), textAlign = TextAlign.Center, style = MaterialTheme.typography.titleMedium, color = c.fg)
            CBtn("Save", onClick = {}, size = BtnSize.Small)
        }
        LazyColumn(modifier = Modifier.fillMaxSize(), contentPadding = PaddingValues(CS.md.dp), verticalArrangement = Arrangement.spacedBy(CS.md.dp)) {
            item { CField("Name") { CInput(name, { name = it }, placeholder = "Weekly KPIs") } }
            item {
                CField("Category") {
                    Row(horizontalArrangement = Arrangement.spacedBy(CS.xs.dp)) {
                        listOf("general" to "General","revenue" to "Revenue","growth" to "Growth","ops" to "Ops").forEach { (v,l) ->
                            CChip(l, active = cat == v, onClick = { cat = v })
                        }
                    }
                }
            }
            item {
                CField("Priority") {
                    Column {
                        listOf("low" to "Low","normal" to "Normal","high" to "High").forEach { (v,l) ->
                            Row(modifier = Modifier.fillMaxWidth().padding(vertical = 10.dp).border(bottom = 1.dp, color = c.border), verticalAlignment = Alignment.CenterVertically) {
                                CRadio(prio == v) { prio = v }
                                Spacer(Modifier.width(CS.sm.dp))
                                Text(l, style = MaterialTheme.typography.bodyLarge, color = c.fg)
                            }
                        }
                    }
                }
            }
            item {
                Row(modifier = Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
                    Text("Notify team on publish", modifier = Modifier.weight(1f), style = MaterialTheme.typography.titleSmall, color = c.fg)
                    CSwitch(notify) { notify = it }
                }
            }
            item { CField("Notes") { CInput(notes, { notes = it }, placeholder = "Optional context for your team.", singleLine = false, minLines = 3) } }
            item { CBtn("Discard draft", onClick = {}, variant = BtnVariant.Destructive, size = BtnSize.Full, leadingIcon = Icons.Outlined.Delete) }
        }
    }
}

// Helper extension for bottom border
private fun Modifier.border(bottom: androidx.compose.ui.unit.Dp, color: Color): Modifier =
    this.padding(bottom = 0.dp)

// ============================================================
// 11. INBOX
// ============================================================
@Composable
fun InboxScreen() {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    var tab by remember { mutableStateOf("all") }
    val items = listOf(
        Quintuple("alert",   "Invoice #1842 overdue",  "Humm Inc · Payment 2d late",   "Just now", true,  Icons.Outlined.Warning),
        Quintuple("mention", "Lana mentioned you",      "In \"Q1 Roadmap\" doc",        "1h",       true,  Icons.Outlined.Tag),
        Quintuple("alert",   "Deploy succeeded",        "cubicle@1.4.2 → production",   "3h",       false, Icons.Outlined.Check),
        Quintuple("mention", "Jamal replied",           "Let's ship it next week.",     "Yesterday",false, Icons.Outlined.Mail),
        Quintuple("alert",   "Plan upgrade successful", "Pro · \$24/mo · annual",       "2d",       false, Icons.Outlined.CreditCard),
    )
    val filtered = if (tab == "all") items else items.filter { it.a == tab }
    Column(modifier = Modifier.fillMaxSize().background(c.bg)) {
        CLargeTitleBar("Inbox", action = { IconButton(onClick = {}) { Icon(Icons.Outlined.Check, null, tint = c.fg) } })
        LazyColumn(modifier = Modifier.fillMaxSize(), contentPadding = PaddingValues(CS.md.dp), verticalArrangement = Arrangement.spacedBy(CS.sm.dp)) {
            item {
                Row(horizontalArrangement = Arrangement.spacedBy(CS.xs.dp)) {
                    listOf("all" to "All","alert" to "Alerts","mention" to "Mentions").forEach { (v,l) ->
                        CChip(l, active = tab == v, onClick = { tab = v })
                    }
                }
            }
            if (filtered.isEmpty()) {
                item { CEmptyState(Icons.Outlined.AllInbox, "Inbox zero", "You're all caught up.") }
            } else {
                item {
                    Column(modifier = Modifier.clip(RoundedCornerShape(CR.xl.dp)).background(c.card).border(1.dp, c.border, RoundedCornerShape(CR.xl.dp))) {
                        filtered.forEachIndexed { i, it ->
                            CListItem(it.b, subtitle = it.c, leading = { Icon(it.f, null, tint = c.fg) }, trailing = { Text(it.d, fontFamily = androidx.compose.ui.text.font.FontFamily.Monospace, fontSize = 12.sp, color = c.mutedFg) }, showDivider = i < filtered.size - 1, onClick = {})
                        }
                    }
                }
            }
        }
    }
}

private data class Quintuple<A,B,C,D,E,F>(val a:A, val b:B, val c:C, val d:D, val e:E, val f:F)

// ============================================================
// 12. PROFILE
// ============================================================
@Composable
fun ProfileScreen() {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    Column(modifier = Modifier.fillMaxSize().background(c.bg)) {
        CLargeTitleBar("Profile", action = { IconButton(onClick = {}) { Icon(Icons.Outlined.Settings, null, tint = c.fg) } })
        LazyColumn(modifier = Modifier.fillMaxSize(), contentPadding = PaddingValues(CS.md.dp), verticalArrangement = Arrangement.spacedBy(CS.md.dp)) {
            item {
                Column(modifier = Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.spacedBy(CS.xs.dp)) {
                    CAvatar("MC", large = true)
                    Text("Mira Chen", fontSize = 20.sp, fontWeight = FontWeight.W600, color = c.fg, letterSpacing = (-0.4).sp)
                    Text("Head of Design · Relay", fontSize = 14.sp, color = c.mutedFg)
                    Row(horizontalArrangement = Arrangement.spacedBy(CS.xs.dp)) {
                        CBtn("Edit profile", onClick = {}, variant = BtnVariant.Outline, size = BtnSize.Small, leadingIcon = Icons.Outlined.Edit)
                        CBtn("Share",        onClick = {}, variant = BtnVariant.Outline, size = BtnSize.Small, leadingIcon = Icons.Outlined.Share)
                    }
                }
            }
            item {
                Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(CS.sm.dp)) {
                    listOf("Projects" to "14","Reports" to "37","Team" to "8").forEach { (l,v) -> Box(Modifier.weight(1f)) { CKpi(l, v) } }
                }
            }
            item {
                Column(verticalArrangement = Arrangement.spacedBy(CS.xs.dp)) {
                    Text("ACCOUNT", fontSize = 11.sp, fontFamily = androidx.compose.ui.text.font.FontFamily.Monospace, color = c.mutedFg, letterSpacing = 1.sp)
                    Column(modifier = Modifier.clip(RoundedCornerShape(CR.xl.dp)).background(c.card).border(1.dp, c.border, RoundedCornerShape(CR.xl.dp))) {
                        CListItem("Account details",      leading = { Icon(Icons.Outlined.Person, null, tint = c.fg) },  trailing = { Icon(Icons.Outlined.ChevronRight, null, tint = c.mutedFg, modifier = Modifier.size(14.dp)) }, onClick = {})
                        CListItem("Billing and plan",     leading = { Icon(Icons.Outlined.CreditCard, null, tint = c.fg) }, trailing = { CBadge("Pro") }, onClick = {})
                        CListItem("Team workspaces",      leading = { Icon(Icons.Outlined.Layers, null, tint = c.fg) },  trailing = { Text("2", fontSize = 13.sp, color = c.mutedFg) }, onClick = {})
                        CListItem("Security and privacy", leading = { Icon(Icons.Outlined.Security, null, tint = c.fg) }, trailing = { Icon(Icons.Outlined.ChevronRight, null, tint = c.mutedFg, modifier = Modifier.size(14.dp)) }, onClick = {}, showDivider = false)
                    }
                }
            }
            item { CBtn("Sign out", onClick = {}, variant = BtnVariant.Destructive, size = BtnSize.Full) }
        }
    }
}

// ============================================================
// 13. SETTINGS
// ============================================================
@Composable
fun SettingsScreen() {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    var dark      by remember { mutableStateOf(false) }
    var biometric by remember { mutableStateOf(true) }
    var notif     by remember { mutableStateOf(true) }
    var marketing by remember { mutableStateOf(false) }
    Column(modifier = Modifier.fillMaxSize().background(c.bg)) {
        CAppBar("Settings", onBack = {})
        LazyColumn(modifier = Modifier.fillMaxSize(), contentPadding = PaddingValues(CS.md.dp), verticalArrangement = Arrangement.spacedBy(CS.md.dp)) {
            item {
                Column(verticalArrangement = Arrangement.spacedBy(CS.xs.dp)) {
                    Text("GENERAL", fontSize = 11.sp, fontFamily = androidx.compose.ui.text.font.FontFamily.Monospace, color = c.mutedFg, letterSpacing = 1.sp)
                    Column(modifier = Modifier.clip(RoundedCornerShape(CR.xl.dp)).background(c.card).border(1.dp, c.border, RoundedCornerShape(CR.xl.dp))) {
                        CListItem("Dark mode",  leading = { Icon(if (dark) Icons.Outlined.DarkMode else Icons.Outlined.LightMode, null, tint = c.fg) }, trailing = { CSwitch(dark) { dark = it } })
                        CListItem("Language",   leading = { Icon(Icons.Outlined.Language, null, tint = c.fg) }, trailing = { Text("English", fontSize = 13.sp, color = c.mutedFg) }, showDivider = false)
                    }
                }
            }
            item {
                Column(verticalArrangement = Arrangement.spacedBy(CS.xs.dp)) {
                    Text("SECURITY", fontSize = 11.sp, fontFamily = androidx.compose.ui.text.font.FontFamily.Monospace, color = c.mutedFg, letterSpacing = 1.sp)
                    Column(modifier = Modifier.clip(RoundedCornerShape(CR.xl.dp)).background(c.card).border(1.dp, c.border, RoundedCornerShape(CR.xl.dp))) {
                        CListItem("Biometric unlock", subtitle = "Use Face ID to unlock", leading = { Icon(Icons.Outlined.Fingerprint, null, tint = c.fg) }, trailing = { CSwitch(biometric) { biometric = it } })
                        CListItem("Change password",  leading = { Icon(Icons.Outlined.Lock, null, tint = c.fg) }, trailing = { Icon(Icons.Outlined.ChevronRight, null, tint = c.mutedFg, modifier = Modifier.size(14.dp)) }, showDivider = false)
                    }
                }
            }
            item {
                Column(verticalArrangement = Arrangement.spacedBy(CS.xs.dp)) {
                    Text("NOTIFICATIONS", fontSize = 11.sp, fontFamily = androidx.compose.ui.text.font.FontFamily.Monospace, color = c.mutedFg, letterSpacing = 1.sp)
                    Column(modifier = Modifier.clip(RoundedCornerShape(CR.xl.dp)).background(c.card).border(1.dp, c.border, RoundedCornerShape(CR.xl.dp))) {
                        CListItem("Push notifications", leading = { Icon(Icons.Outlined.Notifications, null, tint = c.fg) }, trailing = { CSwitch(notif) { notif = it } })
                        CListItem("Product updates",    subtitle = "Weekly product emails", leading = { Icon(Icons.Outlined.Mail, null, tint = c.fg) }, trailing = { CSwitch(marketing) { marketing = it } }, showDivider = false)
                    }
                }
            }
            item { Text("Cubicle Mobile · v1.4.2 (build 2026.04)", fontSize = 12.sp, fontFamily = androidx.compose.ui.text.font.FontFamily.Monospace, color = c.mutedFg, modifier = Modifier.fillMaxWidth(), textAlign = TextAlign.Center) }
        }
    }
}

// ============================================================
// 14. HELP
// ============================================================
@Composable
fun HelpScreen() {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    var open by remember { mutableIntStateOf(0) }
    val faqs = listOf(
        "How do I upgrade my plan?" to "Open Profile → Billing and plan. Select Pro or Enterprise and follow the checkout flow.",
        "Can I export my data?" to "Yes. From any report or list, tap More → Export. CSV, JSON, and PDF are supported.",
        "Is biometric unlock secure?" to "Face ID and Touch ID keys are stored in the Secure Enclave and never leave your device.",
        "How do I invite teammates?" to "Profile → Team workspaces → Invite. They will receive an email to join your workspace.",
    )
    Column(modifier = Modifier.fillMaxSize().background(c.bg)) {
        CAppBar("Help", onBack = {})
        LazyColumn(modifier = Modifier.fillMaxSize(), contentPadding = PaddingValues(CS.md.dp), verticalArrangement = Arrangement.spacedBy(CS.md.dp)) {
            item { CSearchInput("", {}, "Search help articles") }
            item {
                Column(verticalArrangement = Arrangement.spacedBy(CS.xs.dp)) {
                    Text("FREQUENTLY ASKED", fontSize = 11.sp, fontFamily = androidx.compose.ui.text.font.FontFamily.Monospace, color = c.mutedFg, letterSpacing = 1.sp)
                    Column(modifier = Modifier.clip(RoundedCornerShape(CR.xl.dp)).background(c.card).border(1.dp, c.border, RoundedCornerShape(CR.xl.dp))) {
                        faqs.forEachIndexed { i, (q, a) ->
                            Column {
                                Row(
                                    modifier = Modifier.fillMaxWidth().clickable { open = if (open == i) -1 else i }.padding(horizontal = CS.md.dp, vertical = 14.dp),
                                    verticalAlignment = Alignment.CenterVertically,
                                ) {
                                    Text(q, modifier = Modifier.weight(1f), style = MaterialTheme.typography.titleSmall, color = c.fg)
                                    Icon(if (open == i) Icons.Outlined.KeyboardArrowUp else Icons.Outlined.KeyboardArrowDown, null, tint = c.mutedFg, modifier = Modifier.size(14.dp))
                                }
                                AnimatedVisibility(open == i) {
                                    Text(a, modifier = Modifier.padding(start = CS.md.dp, end = CS.md.dp, bottom = 14.dp), style = MaterialTheme.typography.bodyMedium, color = c.mutedFg)
                                }
                                if (i < faqs.size - 1) HorizontalDivider(modifier = Modifier.padding(start = CS.md.dp), color = c.border)
                            }
                        }
                    }
                }
            }
            item { CBtn("Contact support", onClick = {}, variant = BtnVariant.Outline, size = BtnSize.Full, leadingIcon = Icons.Outlined.Mail) }
        }
    }
}
