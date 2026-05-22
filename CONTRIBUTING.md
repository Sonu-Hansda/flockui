# Contributing to FlockUI

First off, thank you for considering contributing to FlockUI! 🎉 We're building an open-source Flutter UI component library, and every contribution — whether it's a new component, a bug fix, or a documentation improvement — helps the community grow.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Understanding the Project Structure](#understanding-the-project-structure)
- [Adding a New Component](#adding-a-new-component)
- [Adding a New Variant](#adding-a-new-variant)
- [Building Previews Locally](#building-previews-locally)
- [Code Conventions & Component Template](#code-conventions--component-template)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Contributing to the Website](#contributing-to-the-website)
- [Need Help?](#need-help)

---

## Code of Conduct

This project and everyone participating in it is governed by the [MIT License](LICENSE). By participating, you are expected to uphold this code of respect and collaboration. Please report unacceptable behavior to [sonukumarhansda61@gmail.com](mailto:sonukumarhansda61@gmail.com).

---

## Prerequisites

Before you start contributing, make sure you have the following installed:

| Tool | Version | Purpose |
|------|---------|---------|
| **Node.js** | v18+ | Running the Next.js website |
| **npm** | v9+ | Package management |
| **Flutter SDK** | v3.11+ | Building component previews |
| **Git** | Any recent version | Version control |

> **Note:** You do **not** need AWS CLI or any Cloudflare R2 credentials to contribute. The CI/CD pipeline handles deployment automatically when your PR is merged.

---

## Getting Started

### 1. Fork the Repository

Click the **Fork** button at the top-right of the [FlockUI GitHub page](https://github.com/Sonu-Hansda/flockui).

### 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/flockui.git
cd flockui
```

### 3. Add the Upstream Remote

```bash
git remote add upstream https://github.com/Sonu-Hansda/flockui.git
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the FlockUI website.

---

## Understanding the Project Structure

```
flockui/
├── registry/              # 📦 Flutter component source files
│   ├── button/
│   │   └── default/
│   │       └── button_default.dart
│   └── toast/
│       └── default/
│           └── toast_default.dart
├── renderer/              # 🎨 Flutter web project for previews
│   └── lib/
│       ├── main.dart
│       └── component.dart   # (auto-generated — don't edit)
├── lib/                   # 🧰 Website utilities
│   ├── component-meta.ts    # Component metadata registry
│   ├── get-component-code.ts
│   └── get-preview-url.ts
├── app/                   # 🌐 Next.js app router pages
│   ├── components/          # Component listing & detail pages
│   └── docs/                # Documentation pages
├── components/            # 🧩 React components for the website
├── scripts/               # 🔧 Build & preview scripts
│   ├── render_previews.mjs
│   └── render_previews.sh
└── public/                # 📁 Static assets & built previews
    └── previews/            # (generated — gitignored)
```

### Key Directories Explained

- **`registry/`** — This is where all Flutter components live. Each component has its own folder, and each variant has a subfolder containing a single `.dart` file.
- **`renderer/`** — A minimal Flutter web project used to build live previews. When you run the render script, it copies your component file into `renderer/lib/component.dart` and builds it as a web app.
- **`lib/component-meta.ts`** — A metadata registry that maps component slugs to their display name, category tag, color, and description. Every new component must be registered here.
- **`scripts/render_previews.mjs`** — The build script that compiles your Flutter component into a web preview and places it in `public/previews/`.

---

## Adding a New Component

Follow these steps to add a brand-new component to FlockUI.

### Step 1: Create the Registry Directory

Create a directory structure under `registry/` following this pattern:

```
registry/
└── <component-name>/
    └── <variant-name>/
        └── <component>_<variant>.dart
```

For example, to add a "card" component with a "default" variant:

```bash
mkdir -p registry/card/default
```

### Step 2: Create the Dart Component File

Create `registry/card/default/card_default.dart` with a `PreviewComponent` class.

> **Important:** The class **must** be named `PreviewComponent` and extend `StatefulWidget`. This is what the renderer expects.

Use the [component template](#component-template) below as a starting point.

### Step 3: Register Metadata

Open `lib/component-meta.ts` and add an entry for your component:

```typescript
card: {
  name: "Cards",
  tag: "Layout",
  color: "bg-flutter-purple/10 text-flutter-purple border-flutter-purple/20",
  description: "A flexible container for grouping related content and actions.",
},
```

Choose a `tag` from the existing categories: `Elements`, `Layout`, `Forms`, `Structure`, `Overlays`, `Feedback`.

### Step 4: Build the Preview Locally

Run the render script to build a live preview of your component:

```bash
npm run render -- -Component card -Variant default
```

This will:
1. Copy `registry/card/default/card_default.dart` into `renderer/lib/component.dart`
2. Build the Flutter web project
3. Output the preview to `public/previews/card/default/index.html`

### Step 5: Verify the Preview

Start the development server:

```bash
npm run dev
```

Navigate to `http://localhost:3000/components/card` on the website. You should see your component listed with its live preview.

### Step 6: Commit and Push

```bash
git add .
git commit -m "feat: add card component with default variant"
git push origin main
```

Then open a pull request from your fork to the main repository.

---

## Adding a New Variant

To add a new variant to an existing component (e.g., an "outline" variant for the button):

### Step 1: Create the Variant Directory

```bash
mkdir -p registry/button/outline
```

### Step 2: Create the Dart File

Create `registry/button/outline/button_outline.dart` with a `PreviewComponent` class.

### Step 3: Build the Preview

```bash
npm run render -- -Component button -Variant outline
```

> **Note:** You don't need to update `lib/component-meta.ts` for new variants — the metadata is per-component, not per-variant. The website automatically discovers variants by scanning the registry directory.

### Step 4: Verify

Check `http://localhost:3000/components/button` to see both the "default" and "outline" variants.

---

## Building Previews Locally

The render script is defined in `package.json` as:

```json
"render": "node scripts/render_previews.mjs"
```

### Usage

```bash
# Build a specific component variant
npm run render -- -Component <name> -Variant <variant>

# Examples:
npm run render -- -Component button -Variant default
npm run render -- -Component toast -Variant default
```

### What Happens During a Build

1. The script reads your component file from `registry/<component>/<variant>/<component>_<variant>.dart`
2. It copies the file to `renderer/lib/component.dart`
3. It runs `flutter build web --release` inside the `renderer/` directory
4. The built preview is placed in `public/previews/<component>/<variant>/`

### Troubleshooting

| Issue | Solution |
|-------|----------|
| `flutter: command not found` | Ensure Flutter SDK is installed and in your PATH |
| `Component source file not found` | Check the file path: `registry/<component>/<variant>/<component>_<variant>.dart` |
| Build fails with Dart errors | Run `dart analyze` in the `renderer/` directory for detailed error messages |
| Preview not showing on website | Make sure you've run `npm run dev` and the build completed successfully |

---

## Code Conventions & Component Template

### Component Template

Every component file should follow this structure. Use the header comments to document your component:

```dart
// FlockUI Component: Button (Default)
// Description: A versatile button widget with multiple variants, sizes, and interactive states.
// Category: Elements
// External Dependencies: none
// Author: Your Name (optional)

import 'package:flutter/material.dart';

class PreviewComponent extends StatefulWidget {
  const PreviewComponent({super.key});

  @override
  State<PreviewComponent> createState() => _PreviewComponentState();
}

class _PreviewComponentState extends State<PreviewComponent> {
  @override
  Widget build(BuildContext context) {
    // Your component widget tree goes here
    return ElevatedButton(
      onPressed: () {},
      child: const Text('Click Me'),
    );
  }
}
```

### Rules

1. **Class name must be `PreviewComponent`** — This is required by the renderer.
2. **Extend `StatefulWidget`** — Even if your component is stateless, wrap it in a `StatefulWidget` for consistency.
3. **No package-level imports** beyond `package:flutter/material.dart` unless necessary (see external dependencies rule below).
4. **Use Material 3 widgets** where possible (e.g., `FilledButton`, `Card`, `NavigationBar`).
5. **Keep it self-contained** — The entire component should be in a single `.dart` file.

### External Dependencies

If your component requires external packages, **annotate them clearly in comments** at the top of the file:

```dart
// FlockUI Component: Image Picker
// Description: A button that opens the device gallery to pick an image.
// Category: Elements
// External Dependencies:
//   - package:image_picker/image_picker.dart (for accessing device gallery)
//   - package:http/http.dart (for uploading images)
```

> **Important:** External packages must also be added to `renderer/pubspec.yaml` for the preview build to work. If you're unsure, mention it in your pull request and we'll help.

### Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| Component directory | `kebab-case` | `text-field`, `bottom-sheet` |
| Variant directory | `kebab-case` | `default`, `outline`, `with-icon` |
| Dart file | `snake_case` | `text_field_default.dart`, `button_outline.dart` |
| Dart class | `PascalCase` | `PreviewComponent` (always) |

---

## Submitting a Pull Request

### Before You Submit

- [ ] Your component builds successfully with `npm run render`
- [ ] You've added metadata in `lib/component-meta.ts`
- [ ] The preview shows correctly on the website
- [ ] Your code follows the conventions above
- [ ] External dependencies are annotated in comments (if any)
- [ ] You've tested on both light and dark themes (if applicable)

### PR Process

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feat/add-card-component
   ```

2. **Make your changes** and commit with a descriptive message:
   ```bash
   git commit -m "feat: add card component with default variant"
   ```

3. **Push to your fork**:
   ```bash
   git push origin feat/add-card-component
   ```

4. **Open a Pull Request** on GitHub from your branch to `Sonu-Hansda/flockui:main`.

5. **In your PR description**, include:
   - What component/variant you're adding
   - Screenshots of the preview (if possible)
   - Any external dependencies used
   - Any special notes for the reviewer

6. **Wait for review** — I'll review your PR, provide feedback if needed, and merge it once everything looks good.

### After Your PR is Merged

- The CI/CD pipeline will automatically build and deploy your component previews to Cloudflare R2
- Your component will appear live on the FlockUI website
- 🎉 Congratulations, you're now a FlockUI contributor!

---

## Contributing to the Website

This guide focuses on contributing Flutter components. If you'd like to contribute to the Next.js website (docs, blog, design improvements), please reach out to me on [LinkedIn](https://linkedin.com/in/sonu-hansda) or email me at [sonukumarhansda61@gmail.com](mailto:sonukumarhansda61@gmail.com) so we can discuss the best approach.

---

## Need Help?

If you have questions or run into issues:

- **Open an Issue** on the [GitHub repository](https://github.com/Sonu-Hansda/flockui/issues)
- **Message me on [LinkedIn](https://linkedin.com/in/sonu-hansda)**
- **Email me** at [sonukumarhansda61@gmail.com](mailto:sonukumarhansda61@gmail.com)

We're excited to see what you build!
