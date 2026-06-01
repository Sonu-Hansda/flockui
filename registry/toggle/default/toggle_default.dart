// FlockUI Component: Toggle (Default)
// Description: A switch control for toggling between two states with smooth animations.
// Category: Forms
// External Dependencies: none
//
// This is a template component. When creating new components, follow this structure:
// 1. Add header comments describing your component
// 2. The class must extend `StatefulWidget` — you can name it anything you like
// 3. If using external packages, list them in the header comments above
// 4. Keep the entire component in a single .dart file

import 'package:flutter/material.dart';

class FlockToggle extends StatefulWidget {
  final bool initialValue;
  final ValueChanged<bool>? onChanged;

  const FlockToggle({
    super.key,
    this.initialValue = false,
    this.onChanged,
  });

  @override
  State<FlockToggle> createState() => _FlockToggleState();
}

class _FlockToggleState extends State<FlockToggle>
    with SingleTickerProviderStateMixin {
  late bool _isOn;
  late AnimationController _animationController;
  late Animation<double> _thumbAnimation;
  late Animation<Color?> _trackColorAnimation;
  late Animation<Color?> _thumbColorAnimation;

  static const double _trackWidth = 52.0;
  static const double _trackHeight = 28.0;
  static const double _thumbRadius = 12.0;
  static const double _thumbInset = 2.0;

  static const Color _activeTrackColor = Color(0xFF4F46E5);
  static const Color _inactiveTrackColor = Color(0xFFE2E8F0);
  static const Color _activeThumbColor = Colors.white;
  static const Color _inactiveThumbColor = Colors.white;
  static const Color _activeShadowColor = Color(0x404F46E5);
  static const Color _inactiveShadowColor = Color(0x14000000);

  @override
  void initState() {
    super.initState();
    _isOn = widget.initialValue;

    _animationController = AnimationController(
      duration: const Duration(milliseconds: 250),
      vsync: this,
    );

    _thumbAnimation = Tween<double>(
      begin: _thumbInset,
      end: _trackWidth - (_thumbRadius * 2) - _thumbInset,
    ).animate(
      CurvedAnimation(parent: _animationController, curve: Curves.easeInOut),
    );

    _trackColorAnimation = ColorTween(
      begin: _inactiveTrackColor,
      end: _activeTrackColor,
    ).animate(
      CurvedAnimation(parent: _animationController, curve: Curves.easeInOut),
    );

    _thumbColorAnimation = ColorTween(
      begin: _inactiveThumbColor,
      end: _activeThumbColor,
    ).animate(
      CurvedAnimation(parent: _animationController, curve: Curves.easeInOut),
    );

    if (_isOn) {
      _animationController.value = 1.0;
    }
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  void _toggle() {
    setState(() {
      _isOn = !_isOn;
      if (_isOn) {
        _animationController.forward();
      } else {
        _animationController.reverse();
      }
      widget.onChanged?.call(_isOn);
    });
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: _toggle,
      child: AnimatedBuilder(
        animation: _animationController,
        builder: (context, child) {
          return Container(
            width: _trackWidth,
            height: _trackHeight,
            decoration: BoxDecoration(
              color: _trackColorAnimation.value,
              borderRadius: BorderRadius.circular(_trackHeight / 2),
              boxShadow: [
                BoxShadow(
                  color: _isOn ? _activeShadowColor : _inactiveShadowColor,
                  blurRadius: 4,
                  offset: const Offset(0, 2),
                ),
              ],
            ),
            child: Stack(
              alignment: Alignment.centerLeft,
              children: [
                AnimatedPadding(
                  duration: const Duration(milliseconds: 200),
                  padding: EdgeInsets.only(
                    left: _thumbAnimation.value,
                  ),
                  child: Container(
                    width: _thumbRadius * 2,
                    height: _thumbRadius * 2,
                    decoration: BoxDecoration(
                      color: _thumbColorAnimation.value,
                      shape: BoxShape.circle,
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withValues(alpha: 0.15),
                          blurRadius: 4,
                          offset: const Offset(0, 2),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
