import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ComponentsPreview from "@/components/landing/ComponentsPreview";
import CtaSection from "@/components/landing/CtaSection";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd
        id="faq-schema"
        json={faqJsonLd([
          {
            question: "What is FlockUI?",
            answer:
              "FlockUI is an open-source collection of copy-paste Flutter UI components. Browse previews, grab the Dart source code, and drop it directly into your Flutter projects — no package installation required.",
          },
          {
            question: "Is FlockUI free to use?",
            answer:
              "Yes, FlockUI is completely free and open source under the MIT License. You can use the components in personal, commercial, and open-source projects without any restrictions.",
          },
          {
            question: "How do I use FlockUI components?",
            answer:
              "Simply browse the component library, preview the component you like, copy the Dart source code, and paste it into your Flutter project. Each component is self-contained with no external dependencies.",
          },
          {
            question: "Does FlockUI require any dependencies?",
            answer:
              "No. FlockUI components are built with pure Flutter and Dart — no external packages or dependencies needed. Just copy the code and use it.",
          },
          {
            question: "Can I contribute to FlockUI?",
            answer:
              "Absolutely! FlockUI is open source and welcomes contributions. You can submit new components, report bugs, improve documentation, or suggest features via our GitHub repository.",
          },
        ])}
      />
      <HeroSection />
      <FeaturesSection />
      <ComponentsPreview />
      <CtaSection />
    </>
  );
}
