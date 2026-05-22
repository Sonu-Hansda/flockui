# FlockUI 🐦

**Open-source Flutter UI component library.** Preview, copy, and paste high-quality Flutter widgets into your apps.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?logo=next.js)](https://nextjs.org)
[![Flutter](https://img.shields.io/badge/Powered%20by-Flutter-02569B?logo=flutter)](https://flutter.dev)

---

## ✨ Features

- **Copy-paste components** — No package installation required. You own the code.
- **Live previews** — See components in action before adding them to your project.
- **Fully customizable** — Modify any widget to fit your design system.
- **Material 3 ready** — Built with modern Flutter and Material Design 3.
- **Open source** — MIT licensed. Free for personal and commercial use.

## 🚀 Quick Start

1. Browse the [component library](https://flockui.vercel.app/components)
2. Find a component you like
3. Copy the Dart code
4. Paste it into your Flutter project

## 🛠️ Development

### Prerequisites

- **Node.js** v18+
- **npm** v9+
- **Flutter SDK** v3.11+

### Setup

```bash
# Clone the repository
git clone https://github.com/Sonu-Hansda/flockui.git
cd flockui

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building Component Previews

```bash
npm run render -- -Component <name> -Variant <variant>
```

Example:

```bash
npm run render -- -Component button -Variant default
```

## 📁 Project Structure

```
flockui/
├── registry/           # Flutter component source files
├── renderer/           # Flutter web project for previews
├── lib/                # Website utilities
├── app/                # Next.js app router pages
├── components/         # React components for the website
├── scripts/            # Build & preview scripts
└── public/             # Static assets & built previews
```

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for a complete guide on how to add new components, variants, and more.

**Quick overview:**
1. Fork the repo
2. Create your component in `registry/<component>/<variant>/`
3. Register metadata in `lib/component-meta.ts`
4. Build the preview with `npm run render`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- **Email:** [sonukumarhansda61@gmail.com](mailto:sonukumarhansda61@gmail.com)
- **GitHub Issues:** [https://github.com/Sonu-Hansda/flockui/issues](https://github.com/Sonu-Hansda/flockui/issues)
