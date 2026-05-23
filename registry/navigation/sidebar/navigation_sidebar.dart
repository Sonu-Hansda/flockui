// FlockUI Component: Navigation (Sidebar)
// Description: A responsive sidebar navigation with a top app bar and hamburger menu that opens a drawer.
// Category: Structure
// External Dependencies: none

import 'package:flutter/material.dart';

class PreviewComponent extends StatefulWidget {
  const PreviewComponent({super.key});

  @override
  State<PreviewComponent> createState() => _PreviewComponentState();
}

class _PreviewComponentState extends State<PreviewComponent> {
  int _selectedIndex = 0;

  static const _menuItems = [
    ('Dashboard', Icons.dashboard_outlined, Icons.dashboard),
    ('Analytics', Icons.analytics_outlined, Icons.analytics),
    ('Settings', Icons.settings_outlined, Icons.settings),
    ('Profile', Icons.person_outline, Icons.person),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_menuItems[_selectedIndex].$1),
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            DrawerHeader(
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.primaryContainer,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  Icon(
                    Icons.flutter_dash,
                    size: 48,
                    color: Theme.of(context).colorScheme.onPrimaryContainer,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'FlockUI',
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(
                      color: Theme.of(context).colorScheme.onPrimaryContainer,
                    ),
                  ),
                  Text(
                    'Navigation Demo',
                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                      color: Theme.of(context).colorScheme.onPrimaryContainer,
                    ),
                  ),
                ],
              ),
            ),
            for (var i = 0; i < _menuItems.length; i++)
              ListTile(
                leading: Icon(
                  _selectedIndex == i
                      ? _menuItems[i].$3
                      : _menuItems[i].$2,
                ),
                title: Text(_menuItems[i].$1),
                selected: _selectedIndex == i,
                selectedTileColor:
                    Theme.of(context).colorScheme.primaryContainer.withValues(alpha: 0.3),
                onTap: () {
                  setState(() => _selectedIndex = i);
                  Navigator.pop(context);
                },
              ),
          ],
        ),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(
                _menuItems[_selectedIndex].$3,
                size: 64,
                color: Theme.of(context).colorScheme.primary,
              ),
              const SizedBox(height: 16),
              Text(
                _menuItems[_selectedIndex].$1,
                style: Theme.of(context).textTheme.headlineMedium,
              ),
              const SizedBox(height: 8),
              Text(
                'Tap the ☰ icon to open the sidebar',
                style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                  color: Theme.of(context).colorScheme.onSurfaceVariant,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
