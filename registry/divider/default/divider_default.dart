// FlockUI Component: Divider (Default)
// Description: A customizable divider widget supporting horizontal and vertical orientations with optional centered label.
// Category: Layout
// External Dependencies: none
//
// This is a template component. When creating new components, follow this structure:
// 1. Add header comments describing your component
// 2. The class must extend `StatefulWidget` — you can name it anything you like
// 3. If using external packages, list them in the header comments above
// 4. Keep the entire component in a single .dart file

import 'package:flutter/material.dart';

class FlockDivider extends StatefulWidget {
  const FlockDivider({super.key});

  @override
  State<FlockDivider> createState() => _FlockDividerState();
}

class _FlockDividerState extends State<FlockDivider> {
  bool _vertical = false;

  @override
  Widget build(BuildContext context) {
    const color = Color(0xFFCBD5E1);
    const thickness = 2.0;

    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        SwitchListTile(
          title: const Text('Vertical Divider'),
          value: _vertical,
          onChanged: (value) {
            setState(() {
              _vertical = value;
            });
          },
        ),

        const SizedBox(height: 20),

        _vertical
            ? SizedBox(
                height: 120,
                child: VerticalDivider(
                  color: color,
                  thickness: thickness,
                ),
              )
            : Row(
                children: [
                  Expanded(
                    child: Divider(
                      color: color,
                      thickness: thickness,
                    ),
                  ),
                  const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 12),
                    child: Text(
                      'OR',
                      style: TextStyle(
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                  Expanded(
                    child: Divider(
                      color: color,
                      thickness: thickness,
                    ),
                  ),
                ],
              ),
      ],
    );
  }
}