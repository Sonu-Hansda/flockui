// FlockUI Component: Stepper (Horizontal)
// Description: A horizontal stepper widget for guiding users through multi-step processes like checkout flows or wizards.
// Category: Navigation
// External Dependencies: none
//
// This is a template component. When creating new components, follow this structure:
// 1. Add header comments describing your component
// 2. The class must extend `StatefulWidget` — you can name it anything you like
// 3. If using external packages, list them in the header comments above
// 4. Keep the entire component in a single .dart file

import 'package:flutter/material.dart';

class FlockStepperHorizontal extends StatefulWidget {
  const FlockStepperHorizontal({super.key});

  @override
  State<FlockStepperHorizontal> createState() => _FlockStepperHorizontalState();
}

class _FlockStepperHorizontalState extends State<FlockStepperHorizontal> {
  int _currentStep = 0;
  final int _totalSteps = 4;

  final List<StepData> _steps = const [
    StepData(label: 'Cart', icon: Icons.shopping_cart_outlined),
    StepData(label: 'Shipping', icon: Icons.local_shipping_outlined),
    StepData(label: 'Payment', icon: Icons.payment_outlined),
    StepData(label: 'Confirm', icon: Icons.check_circle_outline),
  ];

  void _goToStep(int step) {
    if (step >= 0 && step < _totalSteps) {
      setState(() => _currentStep = step);
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return SizedBox(
      width: 360,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Stepper bar
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 16),
            child: Row(
              children: List.generate(_totalSteps * 2 - 1, (index) {
                if (index.isOdd) {
                  // Connector line
                  final stepIndex = index ~/ 2;
                  final isCompleted = stepIndex < _currentStep;
                  return Expanded(
                    child: Container(
                      height: 2,
                      color: isCompleted
                          ? theme.colorScheme.primary
                          : theme.colorScheme.outlineVariant,
                    ),
                  );
                }

                // Step circle
                final stepIndex = index ~/ 2;
                final isCompleted = stepIndex < _currentStep;
                final isActive = stepIndex == _currentStep;

                return GestureDetector(
                  onTap: () => _goToStep(stepIndex),
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 300),
                    width: isActive ? 40 : 32,
                    height: isActive ? 40 : 32,
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
                              '${stepIndex + 1}',
                              style: theme.textTheme.labelMedium?.copyWith(
                                fontWeight: FontWeight.w700,
                                color: isActive
                                    ? theme.colorScheme.primary
                                    : theme.colorScheme.onSurfaceVariant,
                              ),
                            ),
                    ),
                  ),
                );
              }),
            ),
          ),

          // Step labels
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8),
            child: Row(
              children: List.generate(_totalSteps, (index) {
                final isActive = index == _currentStep;
                final isCompleted = index < _currentStep;
                return Expanded(
                  child: GestureDetector(
                    onTap: () => _goToStep(index),
                    child: AnimatedDefaultTextStyle(
                      duration: const Duration(milliseconds: 200),
                      style: TextStyle(
                        fontSize: 11,
                        fontWeight: isActive
                            ? FontWeight.w700
                            : FontWeight.w500,
                        color: isCompleted || isActive
                            ? theme.colorScheme.primary
                            : theme.colorScheme.onSurfaceVariant,
                      ),
                      textAlign: TextAlign.center,
                      child: Text(
                        _steps[index].label,
                        textAlign: TextAlign.center,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ),
                );
              }),
            ),
          ),

          const SizedBox(height: 24),

          // Step content area
          AnimatedSwitcher(
            duration: const Duration(milliseconds: 300),
            child: Container(
              key: ValueKey(_currentStep),
              width: double.infinity,
              margin: const EdgeInsets.symmetric(horizontal: 16),
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: theme.colorScheme.surfaceContainerLow,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: theme.colorScheme.outlineVariant),
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(
                    _steps[_currentStep].icon,
                    size: 40,
                    color: theme.colorScheme.primary,
                  ),
                  const SizedBox(height: 12),
                  Text(
                    'Step ${_currentStep + 1}: ${_steps[_currentStep].label}',
                    style: theme.textTheme.titleSmall?.copyWith(
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    'Content for ${_steps[_currentStep].label.toLowerCase()} step goes here.',
                    style: theme.textTheme.bodySmall?.copyWith(
                      color: theme.colorScheme.onSurfaceVariant,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            ),
          ),

          const SizedBox(height: 20),

          // Navigation buttons
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                if (_currentStep > 0)
                  OutlinedButton.icon(
                    onPressed: () => _goToStep(_currentStep - 1),
                    icon: const Icon(Icons.arrow_back_ios, size: 14),
                    label: const Text('Back'),
                    style: OutlinedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 10,
                      ),
                      textStyle: const TextStyle(fontSize: 13),
                    ),
                  )
                else
                  const SizedBox.shrink(),

                if (_currentStep < _totalSteps - 1)
                  FilledButton.icon(
                    onPressed: () => _goToStep(_currentStep + 1),
                    icon: const Icon(Icons.arrow_forward_ios, size: 14),
                    label: const Text('Next'),
                    style: FilledButton.styleFrom(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 10,
                      ),
                      textStyle: const TextStyle(fontSize: 13),
                    ),
                  )
                else
                  FilledButton.icon(
                    onPressed: () {},
                    icon: const Icon(Icons.check, size: 14),
                    label: const Text('Complete'),
                    style: FilledButton.styleFrom(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 10,
                      ),
                      textStyle: const TextStyle(fontSize: 13),
                    ),
                  ),
              ],
            ),
          ),

          const SizedBox(height: 16),
        ],
      ),
    );
  }
}

class StepData {
  final String label;
  final IconData icon;

  const StepData({required this.label, required this.icon});
}
