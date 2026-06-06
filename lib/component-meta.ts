export const componentMeta: Record<
  string,
  {
    name: string;
    tag: string;
    color: string;
    description: string;
  }
> = {
  button: {
    name: "Buttons",
    tag: "Elements",
    color: "bg-flutter-blue/10 text-flutter-blue border-flutter-blue/20",
    description: "A versatile button widget with multiple variants, sizes, and interactive states.",
  },
  card: {
    name: "Cards",
    tag: "Layout",
    color: "bg-flutter-purple/10 text-flutter-purple border-flutter-purple/20",
    description: "A flexible container for grouping related content and actions.",
  },
  textfield: {
    name: "Text Fields",
    tag: "Forms",
    color: "bg-flutter-red/10 text-flutter-red border-flutter-red/20",
    description: "Input fields for collecting user data and text.",
  },
  navigation: {
    name: "Navigation",
    tag: "Structure",
    color: "bg-flutter-green/10 text-flutter-green border-flutter-green/20",
    description: "Components for navigating between different sections of your app.",
  },
  modal: {
    name: "Modals",
    tag: "Overlays",
    color: "bg-flutter-sky/10 text-flutter-sky border-flutter-sky/20",
    description: "Dialogs that overlay the main content to focus user attention.",
  },
  avatar: {
    name: "Avatars",
    tag: "Elements",
    color: "bg-flutter-navy/10 text-flutter-navy border-flutter-navy/20",
    description: "Visual representations of users or entities.",
  },
  badge: {
    name: "Badges & Chips",
    tag: "Elements",
    color: "bg-flutter-blue/10 text-flutter-blue border-flutter-blue/20",
    description: "Small visual indicators for status, labels, or counts.",
  },
  bottomsheet: {
    name: "Bottom Sheets",
    tag: "Overlays",
    color: "bg-flutter-purple/10 text-flutter-purple border-flutter-purple/20",
    description: "Surfaces anchored to the bottom of the screen.",
  },
  progress: {
    name: "Progress Bars",
    tag: "Feedback",
    color: "bg-flutter-green/10 text-flutter-green border-flutter-green/20",
    description: "Indicators for showing the status of ongoing processes.",
  },
  toast: {
    name: "Toasts",
    tag: "Feedback",
    color: "bg-flutter-sky/10 text-flutter-sky border-flutter-sky/20",
    description: "Brief, temporary notifications that appear over the interface.",
  },
  toggle: {
    name: "Toggles",
    tag: "Forms",
    color: "bg-flutter-red/10 text-flutter-red border-flutter-red/20",
    description: "Switch controls for toggling between two states with smooth animations.",
  },
  divider: {
    name: "Dividers",
    tag: "Layout",
    color: "bg-flutter-purple/10 text-flutter-purple border-flutter-purple/20",
    description:
      "Horizontal and vertical dividers with optional labels and customizable styling.",
  },
  slider: {
    name: "Sliders",
    tag: "Forms",
    color: "bg-flutter-red/10 text-flutter-red border-flutter-red/20",
    description: "Interactive sliders for selecting values from a range with smooth drag controls.",
  },
  "list-tile": {
    name: "List Tiles",
    tag: "Layout",
    color: "bg-flutter-purple/10 text-flutter-purple border-flutter-purple/20",
    description: "Versatile list items for displaying information with leading icons, titles, subtitles, and trailing actions.",
  },
  stepper: {
    name: "Steppers",
    tag: "Navigation",
    color: "bg-flutter-green/10 text-flutter-green border-flutter-green/20",
    description:
      "Step progress indicators for guiding users through multi-step processes and workflows.",
  },
  "search-bar": {
    name: "Search Bar",
    tag: "Forms",
    color: "bg-flutter-blue/10 text-flutter-blue border-flutter-blue/20",
    description: "An animated search bar with real-time filtering, results dropdown, and smooth interactions.",
  },
};

export type ComponentMetaEntry = (typeof componentMeta)[keyof typeof componentMeta];

export function getComponentMeta(slug: string): ComponentMetaEntry {
  return componentMeta[slug] ?? {
    name: slug.charAt(0).toUpperCase() + slug.slice(1),
    tag: "Component",
    color: "bg-slate-100 text-slate-800 border-slate-200",
    description: `A ${slug} component for your Flutter applications.`,
  };
}
