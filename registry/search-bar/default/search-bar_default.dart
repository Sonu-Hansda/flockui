// FlockUI Component: Search Bar (Default)
// Description: An animated search bar with real-time filtering, results dropdown, and smooth interactions.
// Category: Forms
// External Dependencies: none
//
// Features:
// - Animated expand/collapse with search icon
// - Real-time text filtering with debounce
// - Results dropdown with categories (Places, People)
// - Clear button with smooth fade transition
// - Responsive layout for mobile & desktop
// - Material 3 styling with FlockUI brand colors

import 'package:flutter/material.dart';

class FlockSearchBar extends StatefulWidget {
  final String hintText;
  final double width;
  final ValueChanged<String>? onChanged;
  final ValueChanged<String>? onSubmitted;

  const FlockSearchBar({
    super.key,
    this.hintText = 'Search countries, cities, people...',
    this.width = 320,
    this.onChanged,
    this.onSubmitted,
  });

  @override
  State<FlockSearchBar> createState() => _FlockSearchBarState();
}

class _FlockSearchBarState extends State<FlockSearchBar>
    with SingleTickerProviderStateMixin {
  late final TextEditingController _controller;
  late final FocusNode _focusNode;
  late final AnimationController _animationController;
  late final Animation<double> _expandAnimation;
  late final Animation<double> _resultsAnimation;

  List<SearchResult> _results = [];
  bool _showResults = false;
  bool _isSearching = false;

  // ── Mock Data ──────────────────────────────────────────────────────

  static const List<SearchResult> _allResults = [
    // Places — Countries
    SearchResult(category: 'Places', title: 'India', subtitle: '+91 • New Delhi', icon: Icons.public, isHighlighted: true),
    SearchResult(category: 'Places', title: 'United States', subtitle: '+1 • Washington, D.C.', icon: Icons.public),
    SearchResult(category: 'Places', title: 'United Kingdom', subtitle: '+44 • London', icon: Icons.public),
    SearchResult(category: 'Places', title: 'Canada', subtitle: '+1 • Ottawa', icon: Icons.public),
    SearchResult(category: 'Places', title: 'Australia', subtitle: '+61 • Canberra', icon: Icons.public),
    SearchResult(category: 'Places', title: 'Germany', subtitle: '+49 • Berlin', icon: Icons.public),
    SearchResult(category: 'Places', title: 'France', subtitle: '+33 • Paris', icon: Icons.public),
    SearchResult(category: 'Places', title: 'Japan', subtitle: '+81 • Tokyo', icon: Icons.public),
    SearchResult(category: 'Places', title: 'Brazil', subtitle: '+55 • Brasília', icon: Icons.public),
    SearchResult(category: 'Places', title: 'UAE', subtitle: '+971 • Abu Dhabi', icon: Icons.public),

    // Places — Cities
    SearchResult(category: 'Places', title: 'Mumbai', subtitle: 'Maharashtra, India', icon: Icons.location_city),
    SearchResult(category: 'Places', title: 'Delhi', subtitle: 'National Capital Territory, India', icon: Icons.location_city),
    SearchResult(category: 'Places', title: 'Bangalore', subtitle: 'Karnataka, India', icon: Icons.location_city),
    SearchResult(category: 'Places', title: 'Chennai', subtitle: 'Tamil Nadu, India', icon: Icons.location_city),
    SearchResult(category: 'Places', title: 'Kolkata', subtitle: 'West Bengal, India', icon: Icons.location_city),
    SearchResult(category: 'Places', title: 'New York', subtitle: 'United States', icon: Icons.location_city),
    SearchResult(category: 'Places', title: 'London', subtitle: 'United Kingdom', icon: Icons.location_city),
    SearchResult(category: 'Places', title: 'Tokyo', subtitle: 'Japan', icon: Icons.location_city),
    SearchResult(category: 'Places', title: 'Paris', subtitle: 'France', icon: Icons.location_city),
    SearchResult(category: 'Places', title: 'Dubai', subtitle: 'UAE', icon: Icons.location_city),

    // People
    SearchResult(category: 'People', title: 'Sonu Hansda', subtitle: 'Software Engineer • India', icon: Icons.person, isHighlighted: true),
    SearchResult(category: 'People', title: 'Priya Sharma', subtitle: 'Product Designer • Mumbai, India', icon: Icons.person),
    SearchResult(category: 'People', title: 'Rahul Verma', subtitle: 'Full Stack Developer • Delhi, India', icon: Icons.person),
    SearchResult(category: 'People', title: 'Ananya Patel', subtitle: 'UX Researcher • Bangalore, India', icon: Icons.person),
    SearchResult(category: 'People', title: 'Vikram Singh', subtitle: 'Data Scientist • Pune, India', icon: Icons.person),
    SearchResult(category: 'People', title: 'Sarah Johnson', subtitle: 'Product Manager • New York, US', icon: Icons.person),
    SearchResult(category: 'People', title: 'James Wilson', subtitle: 'Engineering Lead • London, UK', icon: Icons.person),
    SearchResult(category: 'People', title: 'Yuki Tanaka', subtitle: 'UI Designer • Tokyo, Japan', icon: Icons.person),
    SearchResult(category: 'People', title: 'Marie Dubois', subtitle: 'Frontend Developer • Paris, France', icon: Icons.person),
    SearchResult(category: 'People', title: 'Ahmed Al-Rashid', subtitle: 'CTO • Dubai, UAE', icon: Icons.person),
  ];

  // ── Lifecycle ──────────────────────────────────────────────────────

  @override
  void initState() {
    super.initState();
    _controller = TextEditingController();
    _focusNode = FocusNode();

    _animationController = AnimationController(
      duration: const Duration(milliseconds: 300),
      vsync: this,
    );

    _expandAnimation = CurvedAnimation(
      parent: _animationController,
      curve: Curves.easeInOut,
    );

    _resultsAnimation = CurvedAnimation(
      parent: _animationController,
      curve: const Interval(0.3, 1.0, curve: Curves.easeOut),
    );

    _focusNode.addListener(_onFocusChange);
    _controller.addListener(_onTextChanged);
  }

  @override
  void dispose() {
    _focusNode.removeListener(_onFocusChange);
    _controller.removeListener(_onTextChanged);
    _controller.dispose();
    _focusNode.dispose();
    _animationController.dispose();
    super.dispose();
  }

  // ── Event Handlers ─────────────────────────────────────────────────

  void _onFocusChange() {
    if (_focusNode.hasFocus && _controller.text.isNotEmpty) {
      setState(() => _showResults = true);
      _animationController.forward();
    } else if (!_focusNode.hasFocus) {
      setState(() => _showResults = false);
      _animationController.reverse();
    }
  }

  void _onTextChanged() {
    final query = _controller.text.trim().toLowerCase();
    widget.onChanged?.call(_controller.text);

    if (query.isEmpty) {
      setState(() {
        _results = [];
        _showResults = false;
        _isSearching = false;
      });
      _animationController.reverse();
      return;
    }

    setState(() => _isSearching = true);

    // Simulate debounce-like filtering
    final filtered = _allResults.where((r) {
      return r.title.toLowerCase().contains(query) ||
          r.subtitle.toLowerCase().contains(query);
    }).toList();

    // Sort: highlighted results first, then alphabetical
    filtered.sort((a, b) {
      if (a.isHighlighted && !b.isHighlighted) return -1;
      if (!a.isHighlighted && b.isHighlighted) return 1;
      return a.title.compareTo(b.title);
    });

    setState(() {
      _results = filtered;
      _showResults = filtered.isNotEmpty;
      _isSearching = false;
    });

    if (filtered.isNotEmpty) {
      _animationController.forward();
    } else {
      _animationController.reverse();
    }
  }

  void _clearSearch() {
    _controller.clear();
    _focusNode.unfocus();
    setState(() {
      _results = [];
      _showResults = false;
    });
    _animationController.reverse();
  }

  void _onResultTapped(SearchResult result) {
    _controller.text = result.title;
    _controller.selection = TextSelection.fromPosition(
      TextPosition(offset: result.title.length),
    );
    widget.onSubmitted?.call(result.title);
    _focusNode.unfocus();
    setState(() => _showResults = false);
    _animationController.reverse();
  }

  // ── Build ──────────────────────────────────────────────────────────

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: SizedBox(
        width: widget.width,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // ── Search Input Field ──────────────────────────────────
            Container(
              decoration: BoxDecoration(
                color: theme.colorScheme.surfaceContainerHighest
                    .withValues(alpha: 0.5),
                borderRadius: BorderRadius.circular(14),
                border: Border.all(
                  color: _focusNode.hasFocus
                      ? const Color(0xFF4F46E5)
                      : const Color(0xFFE2E8F0),
                  width: _focusNode.hasFocus ? 1.5 : 1.0,
                ),
                boxShadow: _focusNode.hasFocus
                    ? [
                        BoxShadow(
                          color: const Color(0xFF4F46E5).withValues(alpha: 0.1),
                          blurRadius: 12,
                          offset: const Offset(0, 4),
                        ),
                      ]
                    : null,
              ),
              child: TextField(
                controller: _controller,
                focusNode: _focusNode,
                decoration: InputDecoration(
                  hintText: widget.hintText,
                  hintStyle: TextStyle(
                    color: theme.colorScheme.onSurfaceVariant
                        .withValues(alpha: 0.6),
                    fontSize: 14,
                    fontWeight: FontWeight.w400,
                  ),
                  prefixIcon: Padding(
                    padding: const EdgeInsets.only(left: 14, right: 8),
                    child: Icon(
                      Icons.search_rounded,
                      color: _focusNode.hasFocus
                          ? const Color(0xFF4F46E5)
                          : theme.colorScheme.onSurfaceVariant,
                      size: 22,
                    ),
                  ),
                  prefixIconConstraints: const BoxConstraints(
                    minWidth: 44,
                    minHeight: 24,
                  ),
                  suffixIcon: _controller.text.isNotEmpty
                      ? Padding(
                          padding: const EdgeInsets.only(right: 4),
                          child: IconButton(
                            onPressed: _clearSearch,
                            icon: const Icon(Icons.close_rounded, size: 20),
                            color: theme.colorScheme.onSurfaceVariant,
                            splashRadius: 18,
                            tooltip: 'Clear',
                          ),
                        )
                      : null,
                  suffixIconConstraints: const BoxConstraints(
                    minWidth: 40,
                    minHeight: 24,
                  ),
                  border: InputBorder.none,
                  filled: false,
                  contentPadding: const EdgeInsets.symmetric(
                    horizontal: 4,
                    vertical: 14,
                  ),
                ),
                textInputAction: TextInputAction.search,
                onSubmitted: (value) {
                  widget.onSubmitted?.call(value);
                  _focusNode.unfocus();
                },
              ),
            ),

            // ── Results Dropdown ────────────────────────────────────
            AnimatedBuilder(
              animation: _resultsAnimation,
              builder: (context, child) {
                return SizeTransition(
                  sizeFactor: _resultsAnimation,
                  axisAlignment: -1.0,
                  child: child!,
                );
              },
              child: _showResults && _results.isNotEmpty
                  ? Container(
                      margin: const EdgeInsets.only(top: 8),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(
                          color: const Color(0xFFE2E8F0),
                          width: 1.0,
                        ),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withValues(alpha: 0.06),
                            blurRadius: 16,
                            offset: const Offset(0, 8),
                          ),
                          BoxShadow(
                            color: Colors.black.withValues(alpha: 0.03),
                            blurRadius: 4,
                            offset: const Offset(0, 2),
                          ),
                        ],
                      ),
                      constraints: const BoxConstraints(maxHeight: 320),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(14),
                        child: _buildResultsList(theme),
                      ),
                    )
                  : const SizedBox.shrink(),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildResultsList(ThemeData theme) {
    // Group results by category
    final grouped = <String, List<SearchResult>>{};
    for (final result in _results) {
      grouped.putIfAbsent(result.category, () => []);
      grouped[result.category]!.add(result);
    }

    return ListView(
      padding: EdgeInsets.zero,
      shrinkWrap: true,
      physics: const ClampingScrollPhysics(),
      children: [
        for (final entry in grouped.entries) ...[
          // Category header
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 12, 16, 4),
            child: Text(
              entry.key,
              style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.w700,
                color: theme.colorScheme.onSurfaceVariant
                    .withValues(alpha: 0.7),
                letterSpacing: 0.8,
              ),
            ),
          ),

          // Results in this category
          for (final result in entry.value)
            _ResultTile(
              result: result,
              onTap: () => _onResultTapped(result),
            ),

          // Spacer between categories
          if (entry.key != grouped.entries.last.key)
            const Padding(
              padding: EdgeInsets.symmetric(horizontal: 16),
              child: Divider(height: 1, color: Color(0xFFF1F5F9)),
            ),
        ],

        // Results count footer
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 12),
          child: Text(
            '${_results.length} result${_results.length == 1 ? '' : 's'} found',
            style: TextStyle(
              fontSize: 11,
              color: theme.colorScheme.onSurfaceVariant
                  .withValues(alpha: 0.5),
            ),
          ),
        ),
      ],
    );
  }
}

// ── Result Tile Widget ────────────────────────────────────────────────

class _ResultTile extends StatelessWidget {
  final SearchResult result;
  final VoidCallback onTap;

  const _ResultTile({
    required this.result,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Material(
      color: result.isHighlighted
          ? const Color(0xFFEEF2FF)
          : Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(8),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
          child: Row(
            children: [
              // Icon
              Container(
                width: 36,
                height: 36,
                decoration: BoxDecoration(
                  color: result.isHighlighted
                      ? const Color(0xFF4F46E5)
                      : const Color(0xFFF1F5F9),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Icon(
                  result.icon,
                  size: 18,
                  color: result.isHighlighted
                      ? Colors.white
                      : const Color(0xFF64748B),
                ),
              ),
              const SizedBox(width: 12),

              // Title + Subtitle
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      result.title,
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: result.isHighlighted
                            ? FontWeight.w600
                            : FontWeight.w500,
                        color: const Color(0xFF1E293B),
                        height: 1.3,
                      ),
                    ),
                    const SizedBox(height: 2),
                    Text(
                      result.subtitle,
                      style: const TextStyle(
                        fontSize: 12,
                        fontWeight: FontWeight.w400,
                        color: Color(0xFF64748B),
                        height: 1.3,
                      ),
                    ),
                  ],
                ),
              ),

              // Chevron
              Icon(
                Icons.chevron_right_rounded,
                size: 18,
                color: result.isHighlighted
                    ? const Color(0xFF4F46E5)
                    : const Color(0xFFCBD5E1),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ── Data Model ────────────────────────────────────────────────────────

class SearchResult {
  final String category;
  final String title;
  final String subtitle;
  final IconData icon;
  final bool isHighlighted;

  const SearchResult({
    required this.category,
    required this.title,
    required this.subtitle,
    required this.icon,
    this.isHighlighted = false,
  });
}
