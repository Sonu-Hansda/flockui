// FlockUI Component: Navigation (Bottom Navigation)
// Description: A Material 3 bottom navigation bar with destinations for switching between primary views.
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

  static const _labels = ['Home', 'Search', 'Profile'];
  static const _icons = [Icons.home, Icons.search, Icons.person];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text(
          _labels[_selectedIndex],
          style: Theme.of(context).textTheme.headlineMedium,
        ),
      ),
      bottomNavigationBar: NavigationBar(
        selectedIndex: _selectedIndex,
        onDestinationSelected: (index) {
          setState(() => _selectedIndex = index);
        },
        destinations: const [
          NavigationDestination(
            icon: Icon(Icons.home_outlined),
            selectedIcon: Icon(Icons.home),
            label: 'Home',
          ),
          NavigationDestination(
            icon: Icon(Icons.search_outlined),
            selectedIcon: Icon(Icons.search),
            label: 'Search',
          ),
          NavigationDestination(
            icon: Icon(Icons.person_outline),
            selectedIcon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
      ),
    );
  }
}
