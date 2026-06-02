// FlockUI Component: Stepper (Vertical)
// Description: A vertical stepper widget with timeline-style connectors for multi-step forms and detailed step content.
// Category: Navigation
// External Dependencies: none
//
// This is a template component. When creating new components, follow this structure:
// 1. Add header comments describing your component
// 2. The class must extend `StatefulWidget` — you can name it anything you like
// 3. If using external packages, list them in the header comments above
// 4. Keep the entire component in a single .dart file

import 'package:flutter/material.dart';

class FlockStepperVertical extends StatefulWidget {
  const FlockStepperVertical({super.key});

  @override
  State<FlockStepperVertical> createState() => _FlockStepperVerticalState();
}

class _FlockStepperVerticalState extends State<FlockStepperVertical> {
  int _activeStep = 0;

  final List<VerticalStepData> _steps = const [
    VerticalStepData(
      title: 'Account Setup',
      subtitle: 'Create your account details',
      description:
          'Enter your email address and create a secure password for your account.',
      icon: Icons.person_outline,
    ),
    VerticalStepData(
      title: 'Profile Information',
      subtitle: 'Tell us about yourself',
      description:
          'Add your name, profile picture, and other personal details.',
      icon: Icons.edit_outlined,
    ),
    VerticalStepData(
      title: 'Preferences',
      subtitle: 'Customize your experience',
      description: 'Set your notification preferences and display settings.',
      icon: Icons.tune_outlined,
    ),
    VerticalStepData(
      title: 'Confirmation',
      subtitle: 'Review and confirm',
      description:
          'Review all the information you provided and confirm your account.',
      icon: Icons.check_circle_outline,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return SizedBox(
      width: 340,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: List.generate(_steps.length * 2 - 1, (index) {
            if (index.isOdd) {
              // Connector line between steps
              final stepIndex = index ~/ 2;
              final isCompleted = stepIndex < _activeStep;
              return Padding(
                padding: const EdgeInsets.only(left: 18),
                child: SizedBox(
                  height: 32,
                  child: VerticalDivider(
                    width: 2,
                    thickness: 2,
                    color: isCompleted
                        ? theme.colorScheme.primary
                        : theme.colorScheme.outlineVariant,
                  ),
                ),
              );
            }

            final stepIndex = index ~/ 2;
            final step = _steps[stepIndex];
            final isCompleted = stepIndex < _activeStep;
            final isActive = stepIndex == _activeStep;

            return _buildStepRow(
              theme: theme,
              step: step,
              stepNumber: stepIndex + 1,
              isActive: isActive,
              isCompleted: isCompleted,
              onTap: () => setState(() => _activeStep = stepIndex),
            );
          }),
        ),
      ),
    );
  }

  Widget _buildStepRow({
    required ThemeData theme,
    required VerticalStepData step,
    required int stepNumber,
    required bool isActive,
    required bool isCompleted,
    required VoidCallback onTap,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 300),
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: isActive
              ? theme.colorScheme.primaryContainer.withValues(alpha: 0.3)
              : Colors.transparent,
          borderRadius: BorderRadius.circular(12),
        ),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Step indicator
            AnimatedContainer(
              duration: const Duration(milliseconds: 300),
              width: 36,
              height: 36,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: isCompleted
                    ? theme.colorScheme.primary
                    : isActive
                    ? theme.colorScheme.primaryContainer
                    : theme.colorScheme.surface,
                border: Border.all(
                  color: isCompleted
                      ? theme.colorScheme.primary
                      : isActive
                      ? theme.colorScheme.primary
                      : theme.colorScheme.outlineVariant,
                  width: isActive ? 2.5 : 2,
                ),
              ),
              child: Center(
                child: isCompleted
                    ? Icon(
                        Icons.check,
                        size: 18,
                        color: theme.colorScheme.onPrimary,
                      )
                    : Text(
                        '$stepNumber',
                        style: theme.textTheme.labelMedium?.copyWith(
                          fontWeight: FontWeight.w700,
                          color: isActive
                              ? theme.colorScheme.primary
                              : theme.colorScheme.onSurfaceVariant,
                        ),
                      ),
              ),
            ),

            const SizedBox(width: 14),

            // Step content
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Row(
                    children: [
                      Icon(
                        step.icon,
                        size: 16,
                        color: isActive || isCompleted
                            ? theme.colorScheme.primary
                            : theme.colorScheme.onSurfaceVariant,
                      ),
                      const SizedBox(width: 6),
                      Text(
                        step.title,
                        style: theme.textTheme.titleSmall?.copyWith(
                          fontWeight: FontWeight.w600,
                          color: isActive || isCompleted
                              ? theme.colorScheme.onSurface
                              : theme.colorScheme.onSurfaceVariant,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 2),
                  Text(
                    step.subtitle,
                    style: theme.textTheme.bodySmall?.copyWith(
                      color: theme.colorScheme.onSurfaceVariant,
                      fontSize: 11,
                    ),
                  ),

                  // Expanded content for active step
                  if (isActive) ...[
                    const SizedBox(height: 10),
                    AnimatedContainer(
                      duration: const Duration(milliseconds: 300),
                      width: double.infinity,
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: theme.colorScheme.surface,
                        borderRadius: BorderRadius.circular(8),
                        border: Border.all(
                          color: theme.colorScheme.outlineVariant,
                        ),
                      ),
                      child: Text(
                        step.description,
                        style: theme.textTheme.bodySmall?.copyWith(
                          color: theme.colorScheme.onSurfaceVariant,
                          height: 1.5,
                        ),
                      ),
                    ),
                    const SizedBox(height: 10),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        if (stepNumber > 1)
                          Padding(
                            padding: const EdgeInsets.only(right: 8),
                            child: OutlinedButton(
                              onPressed: () {
                                setState(() => _activeStep = stepNumber - 2);
                              },
                              style: OutlinedButton.styleFrom(
                                padding: const EdgeInsets.symmetric(
                                  horizontal: 14,
                                  vertical: 6,
                                ),
                                textStyle: const TextStyle(fontSize: 12),
                              ),
                              child: const Text('Back'),
                            ),
                          ),
                        if (stepNumber < _steps.length)
                          FilledButton(
                            onPressed: () {
                              setState(() => _activeStep = stepNumber);
                            },
                            style: FilledButton.styleFrom(
                              padding: const EdgeInsets.symmetric(
                                horizontal: 14,
                                vertical: 6,
                              ),
                              textStyle: const TextStyle(fontSize: 12),
                            ),
                            child: const Text('Continue'),
                          )
                        else
                          FilledButton.icon(
                            onPressed: () {},
                            icon: const Icon(Icons.check, size: 14),
                            label: const Text('Finish'),
                            style: FilledButton.styleFrom(
                              padding: const EdgeInsets.symmetric(
                                horizontal: 14,
                                vertical: 6,
                              ),
                              textStyle: const TextStyle(fontSize: 12),
                            ),
                          ),
                      ],
                    ),
                  ],
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class VerticalStepData {
  final String title;
  final String subtitle;
  final String description;
  final IconData icon;

  const VerticalStepData({
    required this.title,
    required this.subtitle,
    required this.description,
    required this.icon,
  });
}
