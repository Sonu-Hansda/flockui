// FlockUI Component: Progress (Circular Default)
// Description: A standard Material 3 circular progress indicator for indefinite loading states.
// Category: Feedback
// External Dependencies: none
//
// This is a template component. When creating new components, follow this structure:
// 1. Add header comments describing your component
// 2. The class must extend `StatefulWidget` — you can name it anything you like
// 3. If using external packages, list them in the header comments above
// 4. Keep the entire component in a single .dart file

import 'package:flutter/material.dart';

class CircularProgressIndicatorDemo extends StatefulWidget {
  const CircularProgressIndicatorDemo({super.key});

  @override
  State<CircularProgressIndicatorDemo> createState() => _CircularProgressIndicatorDemoState();
}

class _CircularProgressIndicatorDemoState extends State<CircularProgressIndicatorDemo> {
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return SizedBox(
      width: 260,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Circular indicator
          SizedBox(
            width: 80,
            height: 80,
            child: CircularProgressIndicator(
              strokeWidth: 6,
              color: theme.colorScheme.primary,
              backgroundColor: theme.colorScheme.surfaceContainerHighest,
            ),
          ),
          const SizedBox(height: 16),

          // Label
          Text(
            'Loading...',
            style: theme.textTheme.titleSmall?.copyWith(
              fontWeight: FontWeight.w600,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            'Fetching latest updates',
            style: theme.textTheme.bodySmall?.copyWith(
              color: theme.colorScheme.onSurfaceVariant,
            ),
          ),
        ],
      ),
    );
  }
}
