import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ComponentsPreview from "@/components/landing/ComponentsPreview";
import CtaSection from "@/components/landing/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ComponentsPreview />
      <CtaSection />
    </>
  );
}
