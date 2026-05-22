package com.cubicle.ui.components

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.cubicle.ui.theme.CP
import com.cubicle.ui.theme.CR
import com.cubicle.ui.theme.CS
import com.cubicle.ui.theme.CubicleColors

// ============================================================
// BUTTON
// ============================================================
enum class BtnVariant { Default, Secondary, Outline, Ghost, Destructive }
enum class BtnSize    { Default, Large, Small, Full }

@Composable
fun CBtn(
    label: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    variant: BtnVariant = BtnVariant.Default,
    size: BtnSize = BtnSize.Default,
    leadingIcon: ImageVector? = null,
    enabled: Boolean = true,
) {
    val c = CubicleColors(isSystemInDarkTheme())
    val height = when(size) { BtnSize.Large -> 52.dp; BtnSize.Small -> 36.dp; else -> 44.dp }
    val radius = when(size) { BtnSize.Large -> CR.xl.dp; else -> CR.def.dp }
    val fontSize = when(size) { BtnSize.Large -> 16; BtnSize.Small -> 13; else -> 15 }
    val hPad = when(size) { BtnSize.Small -> CS.sm.dp; else -> 18.dp }

    val bg = when(variant) {
        BtnVariant.Secondary    -> c.secondary
        BtnVariant.Ghost,
        BtnVariant.Outline      -> Color.Transparent
        BtnVariant.Destructive  -> c.destructive
        else                    -> c.primary
    }
    val fg = when(variant) {
        BtnVariant.Secondary    -> c.fg
        BtnVariant.Ghost,
        BtnVariant.Outline      -> c.fg
        BtnVariant.Destructive  -> CP.white
        else                    -> c.primaryFg
    }
    val borderColor = when(variant) {
        BtnVariant.Outline -> c.input
        else               -> Color.Transparent
    }

    val sizeModifier = if (size == BtnSize.Full)
        modifier.fillMaxWidth().height(height)
    else
        modifier.height(height)

    Box(
        modifier = sizeModifier
            .clip(RoundedCornerShape(radius))
            .background(bg)
            .border(1.dp, borderColor, RoundedCornerShape(radius))
            .clickable(enabled = enabled) { onClick() }
            .padding(horizontal = hPad),
        contentAlignment = Alignment.Center,
    ) {
        Row(
            horizontalArrangement = Arrangement.Center,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            if (leadingIcon != null) {
                Icon(leadingIcon, contentDescription = null, tint = fg, modifier = Modifier.size(16.dp))
                Spacer(Modifier.width(CS.xs.dp))
            }
            Text(
                text = label,
                color = fg,
                fontSize = fontSize.sp,
                fontWeight = FontWeight.W500,
                maxLines = 1,
            )
        }
    }
}

private fun isSystemInDarkTheme() = false // resolved at call site

// ============================================================
// INPUT
// ============================================================
@Composable
fun CInput(
    value: String,
    onValueChange: (String) -> Unit,
    modifier: Modifier = Modifier,
    placeholder: String = "",
    obscure: Boolean = false,
    keyboardType: KeyboardType = KeyboardType.Text,
    trailingIcon: @Composable (() -> Unit)? = null,
    singleLine: Boolean = true,
    minLines: Int = 1,
) {
    val colors = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    val textColor = MaterialTheme.colorScheme.onBackground

    OutlinedTextField(
        value = value,
        onValueChange = onValueChange,
        modifier = modifier
            .fillMaxWidth()
            .defaultMinSize(minHeight = if (singleLine) 44.dp else 100.dp),
        placeholder = { Text(placeholder, color = MaterialTheme.colorScheme.onSurfaceVariant) },
        visualTransformation = if (obscure) PasswordVisualTransformation() else VisualTransformation.None,
        keyboardOptions = KeyboardOptions(keyboardType = keyboardType),
        trailingIcon = trailingIcon,
        singleLine = singleLine,
        minLines = minLines,
        shape = RoundedCornerShape(CR.def.dp),
        colors = OutlinedTextFieldDefaults.colors(
            focusedBorderColor   = MaterialTheme.colorScheme.primary,
            unfocusedBorderColor = MaterialTheme.colorScheme.outline,
            focusedContainerColor   = MaterialTheme.colorScheme.background,
            unfocusedContainerColor = MaterialTheme.colorScheme.background,
        ),
        textStyle = MaterialTheme.typography.bodyLarge,
    )
}

// ============================================================
// FIELD
// ============================================================
@Composable
fun CField(
    label: String? = null,
    hint: String? = null,
    error: String? = null,
    content: @Composable () -> Unit,
) {
    Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
        if (label != null) {
            Text(label, style = MaterialTheme.typography.labelLarge, color = MaterialTheme.colorScheme.onBackground)
        }
        content()
        when {
            error != null -> Text(error, style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.error)
            hint  != null -> Text(hint,  style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
    }
}

// ============================================================
// BADGE
// ============================================================
enum class BadgeVariant { Default, Success, Warning, Destructive, Muted }

@Composable
fun CBadge(label: String, variant: BadgeVariant = BadgeVariant.Default) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    val (fg, bg, borderColor) = when(variant) {
        BadgeVariant.Success     -> Triple(c.green,       Color.Transparent,  c.green.copy(alpha = 0.3f))
        BadgeVariant.Warning     -> Triple(c.amber,       Color.Transparent,  c.amber.copy(alpha = 0.3f))
        BadgeVariant.Destructive -> Triple(CP.white,      c.destructive,      c.destructive)
        BadgeVariant.Muted       -> Triple(c.mutedFg,     c.muted,            Color.Transparent)
        else                     -> Triple(c.fg,          c.card,             c.border)
    }
    Box(
        modifier = Modifier
            .clip(RoundedCornerShape(CR.full.dp))
            .background(bg)
            .border(1.dp, borderColor, RoundedCornerShape(CR.full.dp))
            .padding(horizontal = 10.dp, vertical = 3.dp),
    ) {
        Text(label, color = fg, fontSize = 12.sp, fontWeight = FontWeight.W500)
    }
}

// ============================================================
// AVATAR
// ============================================================
@Composable
fun CAvatar(
    initials: String,
    large: Boolean = false,
    bgColor: Color? = null,
    fgColor: Color? = null,
) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    val size = if (large) 80.dp else 40.dp
    val fontSize = if (large) 24.sp else 13.sp
    Box(
        modifier = Modifier
            .size(size)
            .clip(CircleShape)
            .background(bgColor ?: c.muted)
            .border(1.dp, c.border, CircleShape),
        contentAlignment = Alignment.Center,
    ) {
        Text(initials, color = fgColor ?: c.fg, fontSize = fontSize, fontWeight = FontWeight.W500)
    }
}

// ============================================================
// SWITCH
// ============================================================
@Composable
fun CSwitch(checked: Boolean, onCheckedChange: (Boolean) -> Unit) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    val trackColor by animateColorAsState(if (checked) c.primary else c.input, label = "sw")
    Switch(
        checked = checked,
        onCheckedChange = onCheckedChange,
        colors = SwitchDefaults.colors(
            checkedThumbColor      = c.bg,
            checkedTrackColor      = trackColor,
            uncheckedThumbColor    = c.bg,
            uncheckedTrackColor    = c.input,
            uncheckedBorderColor   = c.input,
            checkedBorderColor     = c.primary,
        ),
    )
}

// ============================================================
// CHECKBOX
// ============================================================
@Composable
fun CCheckbox(checked: Boolean, onCheckedChange: (Boolean) -> Unit) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    Checkbox(
        checked = checked,
        onCheckedChange = onCheckedChange,
        colors = CheckboxDefaults.colors(
            checkedColor   = c.primary,
            checkmarkColor = c.primaryFg,
            uncheckedColor = c.input,
        ),
    )
}

// ============================================================
// RADIO
// ============================================================
@Composable
fun CRadio(selected: Boolean, onClick: () -> Unit) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    RadioButton(
        selected = selected,
        onClick = onClick,
        colors = RadioButtonDefaults.colors(selectedColor = c.primary, unselectedColor = c.input),
    )
}

// ============================================================
// CHIP
// ============================================================
@Composable
fun CChip(label: String, active: Boolean = false, onClick: () -> Unit, leadingIcon: ImageVector? = null) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    val bg by animateColorAsState(if (active) c.fg else c.card, label = "chip")
    val fg by animateColorAsState(if (active) c.bg else c.fg,   label = "chipFg")
    Box(
        modifier = Modifier
            .clip(RoundedCornerShape(CR.full.dp))
            .background(bg)
            .border(1.dp, c.border, RoundedCornerShape(CR.full.dp))
            .clickable { onClick() }
            .padding(horizontal = CS.sm.dp, vertical = 6.dp),
    ) {
        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(CS.s2xs.dp)) {
            if (leadingIcon != null) Icon(leadingIcon, contentDescription = null, tint = fg, modifier = Modifier.size(14.dp))
            Text(label, color = fg, fontSize = 13.sp, fontWeight = FontWeight.W500)
        }
    }
}

// ============================================================
// SEARCH INPUT
// ============================================================
@Composable
fun CSearchInput(
    value: String,
    onValueChange: (String) -> Unit,
    placeholder: String = "Search",
) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .height(40.dp)
            .clip(RoundedCornerShape(CR.def.dp))
            .background(c.muted)
            .padding(horizontal = 14.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Icon(Icons.Outlined.Search, contentDescription = "Search", tint = c.mutedFg, modifier = Modifier.size(16.dp))
        Spacer(Modifier.width(CS.xs.dp))
        BasicTextField(
            value = value,
            onValueChange = onValueChange,
            modifier = Modifier.weight(1f),
            singleLine = true,
            textStyle = TextStyle(color = c.fg, fontSize = 15.sp),
            cursorBrush = SolidColor(c.fg),
            decorationBox = { inner ->
                Box {
                    if (value.isEmpty()) Text(placeholder, color = c.mutedFg, fontSize = 15.sp)
                    inner()
                }
            },
        )
    }
}

// ============================================================
// APP BAR
// ============================================================
@Composable
fun CAppBar(
    title: String,
    onBack: (() -> Unit)? = null,
    action: @Composable (() -> Unit)? = null,
) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .background(MaterialTheme.colorScheme.background)
            .padding(horizontal = CS.xs.dp, vertical = CS.xs.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        if (onBack != null) {
            IconButton(onClick = onBack, modifier = Modifier.size(36.dp)) {
                Icon(Icons.Outlined.ChevronLeft, null, tint = c.fg, modifier = Modifier.size(22.dp))
            }
        } else {
            Spacer(Modifier.size(36.dp))
        }
        Text(
            title,
            modifier = Modifier.weight(1f),
            textAlign = androidx.compose.ui.text.style.TextAlign.Center,
            style = MaterialTheme.typography.titleMedium,
            color = c.fg,
            maxLines = 1,
        )
        if (action != null) {
            Box(Modifier.size(36.dp), contentAlignment = Alignment.Center) { action() }
        } else {
            Spacer(Modifier.size(36.dp))
        }
    }
}

// ============================================================
// LARGE TITLE BAR
// ============================================================
@Composable
fun CLargeTitleBar(
    title: String,
    kicker: String? = null,
    action: @Composable (() -> Unit)? = null,
) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(MaterialTheme.colorScheme.background)
            .padding(horizontal = CS.lg.dp, vertical = CS.sm.dp),
    ) {
        if (kicker != null) {
            Text(kicker, style = MaterialTheme.typography.labelSmall, color = c.mutedFg)
        }
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text(title, style = MaterialTheme.typography.displayLarge, color = c.fg, modifier = Modifier.weight(1f))
            if (action != null) action()
        }
    }
}

// ============================================================
// LIST ITEM
// ============================================================
@Composable
fun CListItem(
    title: String,
    subtitle: String? = null,
    leading: @Composable (() -> Unit)? = null,
    trailing: @Composable (() -> Unit)? = null,
    onClick: (() -> Unit)? = null,
    showDivider: Boolean = true,
) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    Column {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .then(if (onClick != null) Modifier.clickable { onClick() } else Modifier)
                .padding(horizontal = CS.md.dp, vertical = CS.sm.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            if (leading != null) {
                Box(
                    modifier = Modifier
                        .size(36.dp)
                        .clip(RoundedCornerShape(CR.lg.dp))
                        .background(c.muted),
                    contentAlignment = Alignment.Center,
                ) { leading() }
                Spacer(Modifier.width(CS.sm.dp))
            }
            Column(modifier = Modifier.weight(1f)) {
                Text(title, style = MaterialTheme.typography.titleSmall, color = c.fg, overflow = TextOverflow.Ellipsis, maxLines = 1)
                if (subtitle != null) {
                    Text(subtitle, style = MaterialTheme.typography.bodySmall, color = c.mutedFg, overflow = TextOverflow.Ellipsis, maxLines = 1)
                }
            }
            if (trailing != null) {
                Spacer(Modifier.width(CS.xs.dp))
                trailing()
            }
        }
        if (showDivider) {
            HorizontalDivider(modifier = Modifier.padding(start = CS.md.dp), color = c.border, thickness = 1.dp)
        }
    }
}

// ============================================================
// KPI CARD
// ============================================================
@Composable
fun CKpi(label: String, value: String, delta: String? = null, up: Boolean? = null) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    Column(
        modifier = Modifier
            .clip(RoundedCornerShape(CR.xl.dp))
            .background(c.card)
            .border(1.dp, c.border, RoundedCornerShape(CR.xl.dp))
            .padding(CS.md.dp),
    ) {
        Text(label.uppercase(), style = MaterialTheme.typography.labelSmall, color = c.mutedFg, letterSpacing = 1.sp)
        Spacer(Modifier.height(CS.xs.dp))
        Text(value, fontSize = 26.sp, fontWeight = FontWeight.W700, color = c.fg, letterSpacing = (-0.8).sp)
        if (delta != null) {
            val clr = if (up == true) c.green else if (up == false) c.destructive else c.mutedFg
            Row(verticalAlignment = Alignment.CenterVertically) {
                if (up != null) {
                    Icon(
                        if (up) Icons.Outlined.KeyboardArrowUp else Icons.Outlined.KeyboardArrowDown,
                        null, tint = clr, modifier = Modifier.size(14.dp),
                    )
                }
                Text(delta, fontSize = 12.sp, fontWeight = FontWeight.W500, color = clr)
            }
        }
    }
}

// ============================================================
// PROGRESS BAR
// ============================================================
@Composable
fun CProgress(value: Float) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    LinearProgressIndicator(
        progress = { value.coerceIn(0f, 1f) },
        modifier = Modifier.fillMaxWidth().height(6.dp).clip(RoundedCornerShape(CR.full.dp)),
        color = c.primary,
        trackColor = c.muted,
    )
}

// ============================================================
// SKELETON
// ============================================================
@Composable
fun CSkeleton(height: Dp = 12.dp, width: Dp? = null, radius: Dp = 6.dp) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    val infiniteTransition = rememberInfiniteTransition(label = "skel")
    val alpha by infiniteTransition.animateFloat(
        initialValue = 0.3f,
        targetValue  = 0.8f,
        animationSpec = androidx.compose.animation.core.infiniteRepeatable(
            animation = androidx.compose.animation.core.tween(700),
            repeatMode = androidx.compose.animation.core.RepeatMode.Reverse,
        ),
        label = "skelAlpha",
    )
    Box(
        modifier = (if (width != null) Modifier.width(width) else Modifier.fillMaxWidth())
            .height(height)
            .clip(RoundedCornerShape(radius))
            .background(c.muted.copy(alpha = alpha)),
    )
}

// ============================================================
// EMPTY STATE
// ============================================================
@Composable
fun CEmptyState(
    icon: ImageVector = Icons.Outlined.AllInbox,
    title: String,
    desc: String,
    action: @Composable (() -> Unit)? = null,
) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    Column(
        modifier = Modifier.fillMaxWidth().padding(horizontal = CS.xl.dp, vertical = CS.xl3.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Box(
            modifier = Modifier.size(56.dp).clip(RoundedCornerShape(14.dp)).background(c.muted),
            contentAlignment = Alignment.Center,
        ) { Icon(icon, null, tint = c.mutedFg, modifier = Modifier.size(26.dp)) }
        Spacer(Modifier.height(CS.sm.dp + 2.dp))
        Text(title, style = MaterialTheme.typography.titleMedium, color = c.fg)
        Spacer(Modifier.height(CS.xs.dp))
        Text(desc, style = MaterialTheme.typography.bodyMedium, color = c.mutedFg, textAlign = androidx.compose.ui.text.style.TextAlign.Center)
        if (action != null) { Spacer(Modifier.height(CS.md.dp)); action() }
    }
}

// ============================================================
// CARD
// ============================================================
@Composable
fun CCard(
    modifier: Modifier = Modifier,
    padding: PaddingValues = PaddingValues(CS.md.dp),
    content: @Composable ColumnScope.() -> Unit,
) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    Column(
        modifier = modifier
            .clip(RoundedCornerShape(CR.xl.dp))
            .background(c.card)
            .border(1.dp, c.border, RoundedCornerShape(CR.xl.dp))
            .padding(padding),
        content = content,
    )
}

// ============================================================
// ACCORDION
// ============================================================
data class CAccordionItem(val title: String, val content: String)

@Composable
fun CAccordion(items: List<CAccordionItem>) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    var openIndex by remember { mutableStateOf<Int?>(null) }

    Column(
        modifier = Modifier
            .clip(RoundedCornerShape(CR.xl.dp))
            .background(c.card)
            .border(1.dp, c.border, RoundedCornerShape(CR.xl.dp)),
    ) {
        items.forEachIndexed { i, item ->
            Column {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clickable {
                            openIndex = if (openIndex == i) null else i
                        }
                        .padding(horizontal = CS.md.dp, vertical = CS.sm.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Text(item.title, style = MaterialTheme.typography.titleSmall, color = c.fg, modifier = Modifier.weight(1f))
                    val rotation by animateFloatAsState(
                        targetValue = if (openIndex == i) 180f else 0f,
                        label = "chevron",
                    )
                    Icon(
                        Icons.Outlined.KeyboardArrowDown,
                        contentDescription = null,
                        tint = c.mutedFg,
                        modifier = Modifier.size(18.dp).rotate(rotation),
                    )
                }
                androidx.compose.animation.AnimatedVisibility(visible = openIndex == i) {
                    Text(
                        item.content,
                        style = MaterialTheme.typography.bodyMedium,
                        color = c.mutedFg,
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(start = CS.md.dp, end = CS.md.dp, bottom = CS.sm.dp),
                    )
                }
                if (i < items.size - 1) {
                    HorizontalDivider(color = c.border, thickness = 1.dp)
                }
            }
        }
    }
}

// ============================================================
// TOGGLE
// ============================================================
@Composable
fun CToggle(
    pressed: Boolean,
    onPressedChange: (Boolean) -> Unit,
    label: String,
    leadingIcon: ImageVector? = null,
) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    val bg by animateColorAsState(if (pressed) c.primary else Color.Transparent, label = "toggleBg")
    val fg by animateColorAsState(if (pressed) c.primaryFg else c.fg, label = "toggleFg")
    val borderColor = if (pressed) Color.Transparent else c.input

    Box(
        modifier = Modifier
            .clip(RoundedCornerShape(CR.def.dp))
            .background(bg)
            .border(1.dp, borderColor, RoundedCornerShape(CR.def.dp))
            .clickable { onPressedChange(!pressed) }
            .padding(horizontal = CS.sm.dp, vertical = 8.dp),
        contentAlignment = Alignment.Center,
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(CS.xs.dp),
        ) {
            if (leadingIcon != null) Icon(leadingIcon, contentDescription = null, tint = fg, modifier = Modifier.size(15.dp))
            Text(label, color = fg, fontSize = 14.sp, fontWeight = FontWeight.W500)
        }
    }
}

// ============================================================
// BREADCRUMB
// ============================================================
data class CBreadcrumbItem(val label: String, val onTap: (() -> Unit)? = null)

@Composable
fun CBreadcrumb(items: List<CBreadcrumbItem>) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)
    Row(verticalAlignment = Alignment.CenterVertically) {
        items.forEachIndexed { i, item ->
            if (i > 0) {
                Icon(
                    Icons.Outlined.ChevronRight,
                    contentDescription = null,
                    tint = c.mutedFg,
                    modifier = Modifier.size(14.dp).padding(horizontal = CS.s2xs.dp),
                )
            }
            val isLast = i == items.size - 1
            Text(
                text = item.label,
                fontSize = 13.sp,
                color = if (isLast) c.fg else c.mutedFg,
                modifier = if (!isLast && item.onTap != null)
                    Modifier.clickable(indication = null, interactionSource = remember { MutableInteractionSource() }) { item.onTap.invoke() }
                else Modifier,
            )
        }
    }
}

// ============================================================
// PAGINATION
// ============================================================
@Composable
fun CPagination(
    currentPage: Int,
    totalPages: Int,
    onPageChange: (Int) -> Unit,
) {
    val c = CubicleColors(MaterialTheme.colorScheme.background == CP.black)

    @Composable
    fun PageBtn(content: @Composable () -> Unit, onClick: () -> Unit, enabled: Boolean) {
        Box(
            modifier = Modifier
                .size(36.dp)
                .clip(RoundedCornerShape(CR.def.dp))
                .background(c.card)
                .border(1.dp, c.border, RoundedCornerShape(CR.def.dp))
                .clickable(enabled = enabled) { onClick() },
            contentAlignment = Alignment.Center,
        ) { content() }
    }

    Row(
        horizontalArrangement = Arrangement.spacedBy(CS.xs.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        PageBtn(
            content = { Icon(Icons.Outlined.ChevronLeft, null, tint = if (currentPage <= 1) c.mutedFg.copy(alpha = 0.4f) else c.fg, modifier = Modifier.size(16.dp)) },
            onClick = { onPageChange(currentPage - 1) },
            enabled = currentPage > 1,
        )
        for (page in 1..totalPages) {
            val isActive = page == currentPage
            Box(
                modifier = Modifier
                    .size(36.dp)
                    .clip(RoundedCornerShape(CR.def.dp))
                    .background(if (isActive) c.primary else c.card)
                    .border(1.dp, if (isActive) Color.Transparent else c.border, RoundedCornerShape(CR.def.dp))
                    .clickable { onPageChange(page) },
                contentAlignment = Alignment.Center,
            ) {
                Text("$page", fontSize = 14.sp, fontWeight = FontWeight.W500, color = if (isActive) c.primaryFg else c.fg)
            }
        }
        PageBtn(
            content = { Icon(Icons.Outlined.ChevronRight, null, tint = if (currentPage >= totalPages) c.mutedFg.copy(alpha = 0.4f) else c.fg, modifier = Modifier.size(16.dp)) },
            onClick = { onPageChange(currentPage + 1) },
            enabled = currentPage < totalPages,
        )
    }
}
