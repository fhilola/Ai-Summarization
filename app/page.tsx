import {
  BgGradient,
  CTASection,
  DemoSection,
  HeroSection,
  HowItWorksSection,
  PricingSection,
} from "./ui/components";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <CTASection />
      </div>
    </div>
  );
}
