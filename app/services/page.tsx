import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Services — AmpTech",
  description:
    "What AmpTech builds, how it works, and what it costs.",
};

export default function ServicesPage() {
  return (
    <SectionWrapper className="min-h-[60vh] flex items-center">
      <div className="max-w-lg">
        <p className="text-sm font-medium uppercase tracking-wide text-brand-red mb-4">
          Services
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-brand-black mb-6">
          What we build.
        </h1>
        <p className="text-base text-brand-gray leading-relaxed mb-8">
          Full services page coming soon. In the meantime, book a discovery
          call and we&apos;ll walk you through exactly what we offer.
        </p>
        <Button href="/contact" variant="primary">
          Book a Discovery Call
        </Button>
      </div>
    </SectionWrapper>
  );
}
