import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Work — AmpTech",
  description: "Portfolio and case studies from AmpTech.",
};

export default function WorkPage() {
  return (
    <SectionWrapper className="min-h-[60vh] flex items-center">
      <div className="max-w-lg">
        <p className="text-sm font-medium uppercase tracking-wide text-brand-red mb-4">
          Work
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-brand-black mb-6">
          Portfolio coming soon.
        </h1>
        <p className="text-base text-brand-gray leading-relaxed mb-8">
          We&apos;re building our first cohort of client projects now. Case
          studies will be published here as they ship. Want to be one of them?
        </p>
        <Button href="/contact" variant="primary">
          Book a Discovery Call
        </Button>
      </div>
    </SectionWrapper>
  );
}
