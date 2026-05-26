// FlockUI Component: Card (Default)
// Description: A versatile card widget with elevation, rounded corners, and structured content layout.
// Category: Layout
// External Dependencies: none
//
// This is a template component. When creating new components, follow this structure:
// 1. Add header comments describing your component
// 2. The class MUST be named `PreviewComponent` and extend `StatefulWidget`
// 3. If using external packages, list them in the header comments above
// 4. Keep the entire component in a single .dart file

import 'package:flutter/material.dart';

class PreviewComponent extends StatefulWidget {
  const PreviewComponent({super.key});

  @override
  State<PreviewComponent> createState() => _PreviewComponentState();
}

class _PreviewComponentState extends State<PreviewComponent> {
  bool _isPressed = false;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return GestureDetector(
      onTapDown: (_) => setState(() => _isPressed = true),
      onTapUp: (_) => setState(() => _isPressed = false),
      onTapCancel: () => setState(() => _isPressed = false),
      child: AnimatedScale(
        scale: _isPressed ? 0.98 : 1.0,
        duration: const Duration(milliseconds: 120),
        child: Card(
          elevation: 1,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
          clipBehavior: Clip.antiAlias,
          child: SizedBox(
            width: 260,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Card header with logo
                Container(
                  width: double.infinity,
                  height: 120,
                  color: const Color(0xFFF0F4FF),
                  child: Center(
                    child: Image.asset(
                      'assets/logo-light.png',
                      width: 80,
                      height: 80,
                    ),
                  ),
                ),

                // Card content
                Padding(
                  padding: const EdgeInsets.all(14),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Card Title',
                        style: theme.textTheme.titleSmall?.copyWith(
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      const SizedBox(height: 2),
                      Text(
                        'Subtitle',
                        style: theme.textTheme.bodySmall?.copyWith(
                          color: theme.colorScheme.onSurfaceVariant,
                        ),
                      ),
                      const SizedBox(height: 10),
                      Text(
                        'A versatile card with elevation and rounded corners for grouping content.',
                        style: theme.textTheme.bodySmall?.copyWith(
                          color: theme.colorScheme.onSurfaceVariant,
                          height: 1.4,
                        ),
                      ),

                      // Card actions
                      const SizedBox(height: 12),
                      Align(
                        alignment: Alignment.centerRight,
                        child: FilledButton(
                          onPressed: () {},
                          style: FilledButton.styleFrom(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 16,
                              vertical: 8,
                            ),
                            textStyle: const TextStyle(fontSize: 12),
                          ),
                          child: const Text('Action'),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
