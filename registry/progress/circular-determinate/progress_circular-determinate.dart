// FlockUI Component: Progress (Circular Determinate)
// Description: A determinate circular progress ring with a centered percentage label.
// Category: Feedback
// External Dependencies: none
//
// This is a template component. When creating new components, follow this structure:
// 1. Add header comments describing your component
// 2. The class must extend `StatefulWidget` — you can name it anything you like
// 3. If using external packages, list them in the header comments above
// 4. Keep the entire component in a single .dart file

import 'package:flutter/material.dart';

class CircularProgressDeterminate extends StatefulWidget {
  const CircularProgressDeterminate({super.key});

  @override
  State<CircularProgressDeterminate> createState() => _CircularProgressDeterminateState();
}

class _CircularProgressDeterminateState extends State<CircularProgressDeterminate>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _progress;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 2500),
    );
    _progress = Tween<double>(begin: 0.0, end: 0.82).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeOutCubic),
    );
    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return SizedBox(
      width: 260,
      child: AnimatedBuilder(
        animation: _controller,
        builder: (context, child) {
          return Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              // Circular progress ring with percentage
              SizedBox(
                width: 160,
                height: 160,
                child: Stack(
                  alignment: Alignment.center,
                  children: [
                    CircularProgressIndicator(
                      value: _progress.value,
                      strokeWidth: 6,
                      color: theme.colorScheme.primary,
                      backgroundColor: theme.colorScheme.surfaceContainerHighest,
                    ),
                    Text(
                      '${(_progress.value * 100).round()}%',
                      style: theme.textTheme.titleMedium?.copyWith(
                        color: theme.colorScheme.primary,
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 16),

              // Label
              Text(
                'Upload Progress',
                style: theme.textTheme.titleSmall?.copyWith(
                  fontWeight: FontWeight.w600,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                'Uploading files to cloud storage',
                style: theme.textTheme.bodySmall?.copyWith(
                  color: theme.colorScheme.onSurfaceVariant,
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}
