// FlockUI Component: List Tile (Default)
// Description: A versatile list item for displaying information with leading icons, titles, subtitles, and trailing actions.
// Category: Layout
// External Dependencies: none
//
// This is a template component. When creating new components, follow this structure:
// 1. Add header comments describing your component
// 2. The class must extend `StatefulWidget` or `StatelessWidget` — you can name it anything you like
// 3. If using external packages, list them in the header comments above
// 4. Keep the entire component in a single .dart file

import 'package:flutter/material.dart';

class FlockListTile extends StatelessWidget {
  final Widget? leading;
  final Widget? title;
  final Widget? subtitle;
  final Widget? trailing;
  final bool dense;
  final VoidCallback? onTap;
  final EdgeInsetsGeometry? contentPadding;
  final EdgeInsetsGeometry? margin;
  final Color? tileColor;
  final LinearGradient? gradient;
  final double elevation;

  const FlockListTile({
    super.key,
    this.leading,
    this.title,
    this.subtitle,
    this.trailing,
    this.dense = false,
    this.onTap,
    this.contentPadding,
    this.margin,
    this.tileColor,
    this.gradient,
    this.elevation = 1.0,
  });

  @override
  Widget build(BuildContext context) {
    final horizontalPadding = dense ? 12.0 : 16.0;
    final verticalPadding = dense ? 8.0 : 12.0;
    final iconSize = dense ? 20.0 : 24.0;
    final titleFontSize = dense ? 13.0 : 15.0;
    final subtitleFontSize = dense ? 11.0 : 13.0;
    final spacing = dense ? 10.0 : 14.0;

    final tileContent = Container(
      padding: contentPadding ??
          EdgeInsets.symmetric(
            horizontal: horizontalPadding,
            vertical: verticalPadding,
          ),
      decoration: BoxDecoration(
        color: tileColor ?? Colors.white,
        gradient: gradient,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(
          color: const Color(0xFFE8E4F0),
          width: 1.2,
        ),
        boxShadow: [
          BoxShadow(
            color: const Color(0x1A000000),
            blurRadius: 4 + (elevation * 2),
            offset: Offset(0, 1 + elevation),
            spreadRadius: elevation * 0.3,
          ),
        ],
      ),
      child: Row(
        children: [
          // Leading widget (icon, avatar, etc.)
          if (leading != null) ...[
            SizedBox(
              width: iconSize + 4,
              height: iconSize + 4,
              child: leading!,
            ),
            SizedBox(width: spacing),
          ],

          // Title + Subtitle
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                DefaultTextStyle(
                  style: TextStyle(
                    fontSize: titleFontSize,
                    fontWeight: FontWeight.w600,
                    color: gradient != null ? Colors.white : const Color(0xFF1E293B),
                    height: 1.3,
                  ),
                  child: title ?? const Text("List Tile"),
                ),
                if (subtitle != null) ...[
                  const SizedBox(height: 3),
                  DefaultTextStyle(
                    style: TextStyle(
                      fontSize: subtitleFontSize,
                      fontWeight: FontWeight.w400,
                      color: gradient != null
                          ? Colors.white.withValues(alpha: 0.8)
                          : const Color(0xFF64748B),
                      height: 1.3,
                    ),
                    child: subtitle!,
                  ),
                ],
              ],
            ),
          ),

          // Trailing widget (icon, switch, chevron, etc.)
          if (trailing != null) ...[
            const SizedBox(width: 12),
            SizedBox(
              width: iconSize + 4,
              height: iconSize + 4,
              child: trailing!,
            ),
          ],
        ],
      ),
    );

    final paddedTile = Padding(
      padding: margin ??
          const EdgeInsets.symmetric(horizontal: 16, vertical: 5),
      child: tileContent,
    );

    if (onTap != null) {
      return GestureDetector(
        onTap: onTap,
        child: Padding(
          padding: margin ??
              const EdgeInsets.symmetric(horizontal: 16, vertical: 5),
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(12),
              boxShadow: [
                BoxShadow(
                  color: const Color(0x1A000000),
                  blurRadius: 4 + (elevation * 2),
                  offset: Offset(0, 1 + elevation),
                  spreadRadius: elevation * 0.3,
                ),
              ],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(12),
              child: Material(
                color: Colors.transparent,
                child: InkWell(
                  onTap: onTap,
                  borderRadius: BorderRadius.circular(12),
                  child: tileContent,
                ),
              ),
            ),
          ),
        ),
      );
    }

    return paddedTile;
  }
}
