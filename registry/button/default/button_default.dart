// FlockUI Component: Button (Default)
// Description: A versatile button widget with multiple variants, sizes, and interactive states.
// Category: Elements
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
    return GestureDetector(
      onTapDown: (_) => setState(() => _isPressed = true),
      onTapUp: (_) => setState(() => _isPressed = false),
      onTapCancel: () => setState(() => _isPressed = false),
      child: AnimatedScale(
        scale: _isPressed ? 0.97 : 1.0,
        duration: const Duration(milliseconds: 100),
        child: ElevatedButton(
          onPressed: () {},
          style: ElevatedButton.styleFrom(
            backgroundColor: const Color(0xFF4F46E5),
            foregroundColor: Colors.white,
            elevation: 0,
            padding: const EdgeInsets.symmetric(
              horizontal: 24,
              vertical: 14,
            ),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8),
            ),
          ),
          child: const Text(
            'Get Started',
            style: TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w600,
              letterSpacing: 0.1,
            ),
          ),
        ),
      ),
    );
  }
}
