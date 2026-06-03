// FlockUI Component: Slider (Default)
// Description: An interactive slider for selecting values from a range with smooth drag controls.
// Category: Forms
// External Dependencies: none
//
// This is a template component. When creating new components, follow this structure:
// 1. Add header comments describing your component
// 2. The class must extend `StatefulWidget` — you can name it anything you like
// 3. If using external packages, list them in the header comments above
// 4. Keep the entire component in a single .dart file

import 'package:flutter/material.dart';

class FlockSlider extends StatefulWidget {
  final double min;
  final double max;
  final double initialValue;
  final int? divisions;
  final ValueChanged<double>? onChanged;

  const FlockSlider({
    super.key,
    this.min = 0.0,
    this.max = 100.0,
    this.initialValue = 50.0,
    this.divisions,
    this.onChanged,
  });

  @override
  State<FlockSlider> createState() => _FlockSliderState();
}

class _FlockSliderState extends State<FlockSlider> {
  late double _currentValue;
  bool _isDragging = false;

  static const double _trackHeight = 6.0;
  static const double _thumbRadius = 12.0;
  static const double _sliderHeight = 48.0;
  static const double _horizontalPadding = 16.0;

  static const Color _activeTrackColor = Color(0xFF4F46E5);
  static const Color _inactiveTrackColor = Color(0xFFE2E8F0);
  static const Color _thumbColor = Colors.white;
  static const Color _thumbShadowColor = Color(0x40000000);
  static const Color _labelTextColor = Color(0xFF1E293B);
  static const Color _labelBgColor = Color(0xFFF1F5F9);

  @override
  void initState() {
    super.initState();
    _currentValue = widget.initialValue.clamp(widget.min, widget.max);
  }

  double _getFraction(double dx, double trackWidth) {
    final fraction = (dx / trackWidth).clamp(0.0, 1.0);
    return widget.min + fraction * (widget.max - widget.min);
  }

  double _snapToDivision(double value) {
    if (widget.divisions == null || widget.divisions! < 1) return value;
    final step = (widget.max - widget.min) / widget.divisions!;
    return (value / step).round() * step;
  }

  String _formatValue(double value) {
    if (value == value.roundToDouble()) {
      return value.toInt().toString();
    }
    return value.toStringAsFixed(1);
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final availableWidth = constraints.maxWidth - _horizontalPadding * 2;
        final fraction = (_currentValue - widget.min) / (widget.max - widget.min);
        final thumbPosition = fraction * availableWidth;

        return SizedBox(
          height: _sliderHeight + 24, // extra space for label
          child: GestureDetector(
            onTapDown: (details) {
              final localDx = details.localPosition.dx - _horizontalPadding;
              final rawValue = _getFraction(localDx.clamp(0.0, availableWidth), availableWidth);
              final snapped = _snapToDivision(rawValue);
              setState(() {
                _currentValue = snapped.clamp(widget.min, widget.max);
                _isDragging = true;
              });
              widget.onChanged?.call(_currentValue);
              Future.delayed(const Duration(milliseconds: 300), () {
                if (mounted) setState(() => _isDragging = false);
              });
            },
            onHorizontalDragStart: (_) {
              setState(() => _isDragging = true);
            },
            onHorizontalDragUpdate: (details) {
              final localDx = details.localPosition.dx - _horizontalPadding;
              final rawValue = _getFraction(localDx.clamp(0.0, availableWidth), availableWidth);
              final snapped = _snapToDivision(rawValue);
              setState(() {
                _currentValue = snapped.clamp(widget.min, widget.max);
              });
              widget.onChanged?.call(_currentValue);
            },
            onHorizontalDragEnd: (_) {
              setState(() => _isDragging = false);
            },
            onHorizontalDragCancel: () {
              setState(() => _isDragging = false);
            },
            child: Stack(
              clipBehavior: Clip.none,
              children: [
                // Value label above thumb
                if (_isDragging)
                  Positioned(
                    left: thumbPosition + _horizontalPadding - 14,
                    top: -2,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                      decoration: BoxDecoration(
                        color: _labelBgColor,
                        borderRadius: BorderRadius.circular(6),
                        border: Border.all(color: const Color(0xFFE2E8F0)),
                      ),
                      child: Text(
                        _formatValue(_currentValue),
                        style: const TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w600,
                          color: _labelTextColor,
                          fontFamily: 'monospace',
                        ),
                      ),
                    ),
                  ),

                // Slider track area
                Positioned(
                  left: _horizontalPadding,
                  right: _horizontalPadding,
                  top: 28,
                  child: SizedBox(
                    height: _trackHeight,
                    child: Stack(
                      alignment: Alignment.centerLeft,
                      children: [
                        // Inactive track (full width)
                        Container(
                          width: availableWidth,
                          height: _trackHeight,
                          decoration: BoxDecoration(
                            color: _inactiveTrackColor,
                            borderRadius: BorderRadius.circular(_trackHeight / 2),
                          ),
                        ),

                        // Active track (from left to thumb)
                        Container(
                          width: thumbPosition,
                          height: _trackHeight,
                          decoration: BoxDecoration(
                            color: _activeTrackColor,
                            borderRadius: BorderRadius.circular(_trackHeight / 2),
                          ),
                        ),

                        // Thumb
                        Positioned(
                          left: thumbPosition - _thumbRadius,
                          child: Container(
                            width: _thumbRadius * 2,
                            height: _thumbRadius * 2,
                            decoration: BoxDecoration(
                              color: _thumbColor,
                              shape: BoxShape.circle,
                              boxShadow: [
                                BoxShadow(
                                  color: _thumbShadowColor,
                                  blurRadius: _isDragging ? 8 : 4,
                                  offset: const Offset(0, 2),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),

                // Min / Max labels
                Positioned(
                  left: _horizontalPadding,
                  bottom: 0,
                  child: Text(
                    _formatValue(widget.min),
                    style: const TextStyle(
                      fontSize: 10,
                      color: Color(0xFF94A3B8),
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
                Positioned(
                  right: _horizontalPadding,
                  bottom: 0,
                  child: Text(
                    _formatValue(widget.max),
                    style: const TextStyle(
                      fontSize: 10,
                      color: Color(0xFF94A3B8),
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
