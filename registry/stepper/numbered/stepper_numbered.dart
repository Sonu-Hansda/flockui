// FlockUI Component: Stepper (Numbered)
// Description: A compact numbered step indicator for showing progress through a sequence, ideal for onboarding and multi-page flows.
// Category: Navigation
// External Dependencies: none
//
// This is a template component. When creating new components, follow this structure:
// 1. Add header comments describing your component
// 2. The class must extend `StatefulWidget` — you can name it anything you like
// 3. If using external packages, list them in the header comments above
// 4. Keep the entire component in a single .dart file

import 'package:flutter/material.dart';

class FlockStepperNumbered extends StatefulWidget {
  const FlockStepperNumbered({super.key});

  @override
  State<FlockStepperNumbered> createState() => _FlockStepperNumberedState();
}

class _FlockStepperNumberedState extends State<FlockStepperNumbered> {
  int _currentStep = 0;
  final int _totalSteps = 5;

  final List<String> _labels = const [
    'Start',
    'Details',
    'Review',
    'Confirm',
    'Done',
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
          // Step indicators
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 16),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                // Dots row
                Row(
                  children: List.generate(_totalSteps * 2 - 1, (index) {
                    if (index.isOdd) {
                      final stepIndex = index ~/ 2;
                      final isCompleted = stepIndex < _currentStep;
                      return Expanded(
                        child: Container(
                          height: 2,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(1),
                            color: isCompleted
                                ? theme.colorScheme.primary
                                : theme.colorScheme.outlineVariant,
                          ),
                        ),
                      );
                    }

                    final stepIndex = index ~/ 2;
                    final isCompleted = stepIndex < _currentStep;
                    final isActive = stepIndex == _currentStep;

                    return GestureDetector(
                      onTap: () => _goToStep(stepIndex),
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 300),
                        width: isActive ? 44 : 36,
                        height: isActive ? 44 : 36,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: isCompleted
                              ? theme.colorScheme.primary
                              : isActive
                              ? theme.colorScheme.primaryContainer
                              : Colors.transparent,
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
                                  size: 20,
                                  color: theme.colorScheme.onPrimary,
                                )
                              : Text(
                                  '${stepIndex + 1}',
                                  style: theme.textTheme.titleSmall?.copyWith(
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

                const SizedBox(height: 10),

                // Labels row
                Row(
                  children: List.generate(_totalSteps, (index) {
                    final isActive = index == _currentStep;
                    final isCompleted = index < _currentStep;
                    return Expanded(
                      child: GestureDetector(
                        onTap: () => _goToStep(index),
                        child: AnimatedDefaultTextStyle(
                          duration: const Duration(milliseconds: 200),
                          style: TextStyle(
                            fontSize: 10,
                            fontWeight: isActive
                                ? FontWeight.w700
                                : FontWeight.w500,
                            color: isCompleted || isActive
                                ? theme.colorScheme.primary
                                : theme.colorScheme.onSurfaceVariant,
                          ),
                          textAlign: TextAlign.center,
                          child: Text(
                            _labels[index],
                            textAlign: TextAlign.center,
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                      ),
                    );
                  }),
                ),
              ],
            ),
          ),

          // Content area
          AnimatedSwitcher(
            duration: const Duration(milliseconds: 300),
            child: Container(
              key: ValueKey(_currentStep),
              width: double.infinity,
              margin: const EdgeInsets.symmetric(horizontal: 16),
              padding: const EdgeInsets.all(24),
              decoration: BoxDecoration(
                color: theme.colorScheme.surfaceContainerLow,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: theme.colorScheme.outlineVariant),
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  // Step number in large circle
                  AnimatedContainer(
                    duration: const Duration(milliseconds: 300),
                    width: 64,
                    height: 64,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: theme.colorScheme.primaryContainer,
                    ),
                    child: Center(
                      child: Text(
                        '${_currentStep + 1}',
                        style: theme.textTheme.headlineSmall?.copyWith(
                          fontWeight: FontWeight.w800,
                          color: theme.colorScheme.primary,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Text(
                    _labels[_currentStep],
                    style: theme.textTheme.titleMedium?.copyWith(
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    _getStepDescription(_currentStep),
                    style: theme.textTheme.bodySmall?.copyWith(
                      color: theme.colorScheme.onSurfaceVariant,
                      height: 1.5,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 20),

                  // Navigation dots
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: List.generate(_totalSteps, (index) {
                      return GestureDetector(
                        onTap: () => _goToStep(index),
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 200),
                          width: index == _currentStep ? 24 : 8,
                          height: 8,
                          margin: const EdgeInsets.symmetric(horizontal: 3),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(4),
                            color: index <= _currentStep
                                ? theme.colorScheme.primary
                                : theme.colorScheme.outlineVariant,
                          ),
                        ),
                      );
                    }),
                  ),

                  const SizedBox(height: 20),

                  // Navigation buttons
                  Row(
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
                          label: const Text('Finish'),
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
                ],
              ),
            ),
          ),

          const SizedBox(height: 16),
        ],
      ),
    );
  }

  String _getStepDescription(int step) {
    switch (step) {
      case 0:
        return 'Begin your journey by setting up the basics. This is the first step of the process.';
      case 1:
        return 'Fill in the necessary details and information required to proceed further.';
      case 2:
        return 'Take a moment to review all the information you have provided so far.';
      case 3:
        return 'Confirm your choices and make sure everything looks correct before finishing.';
      case 4:
        return 'All done! You have successfully completed all the steps in this process.';
      default:
        return '';
    }
  }
}
