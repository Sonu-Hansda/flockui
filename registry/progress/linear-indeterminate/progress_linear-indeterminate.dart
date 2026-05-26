// FlockUI Component: Progress (Linear Indeterminate)
// Description: An animated indeterminate linear progress bar for indefinite loading states.
// Category: Feedback
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

class _PreviewComponentState extends State<PreviewComponent>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1500),
    )..repeat();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: SizedBox(
        width: 260,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Label
            Text(
              'Loading...',
              style: theme.textTheme.titleSmall?.copyWith(
                fontWeight: FontWeight.w600,
              ),
            ),
            const SizedBox(height: 8),

            // Animated indeterminate bar
            ClipRRect(
              borderRadius: BorderRadius.circular(6),
              child: Container(
                width: double.infinity,
                height: 12,
                color: theme.colorScheme.surfaceContainerHighest,
                child: AnimatedBuilder(
                  animation: _controller,
                  builder: (context, child) {
                    return Align(
                      alignment: Alignment(
                        -1.0 + (_controller.value * 2.0),
                        0,
                      ),
                      child: Container(
                        width: 80,
                        height: 12,
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            colors: [
                              theme.colorScheme.primary.withValues(alpha: 0.4),
                              theme.colorScheme.primary,
                              theme.colorScheme.primary.withValues(alpha: 0.4),
                            ],
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ),
            ),
            const SizedBox(height: 6),

            // Status text
            Text(
              'Please wait while we load your content...',
              style: theme.textTheme.bodySmall?.copyWith(
                color: theme.colorScheme.onSurfaceVariant,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
