/**
 * JSON-LD structured data helpers — safe to use in server components.
 * These are pure functions that return plain objects.
 */

/**
 * Generates BreadcrumbList JSON-LD from an array of { name, href } items.
 */
export function breadcrumbJsonLd(
  items: { name: string; href: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://flockui.com${item.href}`,
    })),
  };
}

/**
 * Generates WebSite JSON-LD with search action.
 */
export function websiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FlockUI",
    url: "https://flockui.com",
    description:
      "An open-source collection of copy-paste Flutter UI components. Preview, grab the code, and ship faster.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://flockui.com/components?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generates Organization JSON-LD.
 */
export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FlockUI",
    url: "https://flockui.com",
    logo: "https://flockui.com/logo-light.png",
    sameAs: ["https://github.com/Sonu-Hansda/flockui"],
  };
}

/**
 * Generates SoftwareSourceCode JSON-LD for a component page.
 */
export function softwareSourceCodeJsonLd(
  name: string,
  description: string,
  slug: string
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: `${name} — Flutter UI Component`,
    description,
    url: `https://flockui.com/components/${slug}`,
    codeRepository: "https://github.com/Sonu-Hansda/flockui",
    programmingLanguage: {
      "@type": "ComputerLanguage",
      name: "Dart",
      url: "https://dart.dev",
    },
    runtimePlatform: "Flutter",
    targetProduct: {
      "@type": "SoftwareApplication",
      name: "Flutter",
      applicationCategory: "MobileApplication",
    },
  };
}

/**
 * Generates FAQPage JSON-LD.
 */
export function faqJsonLd(
  questions: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

/**
 * Generates HowTo JSON-LD for the docs/getting-started page.
 */
export function howToJsonLd(
  steps: { name: string; text: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use FlockUI Components",
    description:
      "A step-by-step guide to using FlockUI Flutter components in your project.",
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
