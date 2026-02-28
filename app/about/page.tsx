import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About — AmpTech",
  description:
    "20+ years of engineering experience, now applied to helping entrepreneurs ship their ideas.",
};

export default function AboutPage() {
  return (
    <SectionWrapper>
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wide text-brand-red mb-4">
          About
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-brand-black mb-6">
          Built by an engineer who&apos;s been doing this for 20 years.
        </h1>
        <p className="text-lg text-brand-gray leading-relaxed mb-6">
          AmpTech was founded to solve a specific problem: the gap between what
          AI development tools promise and what non-technical founders can
          actually ship on their own.
        </p>
        <p className="text-base text-brand-gray leading-relaxed mb-6">
          A lot of people try Replit, Bolt, or Lovable — get 60% there — and
          get stuck. We take them to 100%, and we build it to last.
        </p>
        <p className="text-base text-brand-gray leading-relaxed mb-10">
          We use the best AI-powered development tools available — not to
          replace engineering judgment, but to dramatically accelerate what
          great engineering judgment can produce.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <Badge>20+ Years Engineering Experience</Badge>
          <Badge>AI-Assisted Development</Badge>
          <Badge>Fixed-Price Projects</Badge>
          <Badge>You Own Everything</Badge>
        </div>
        <Button href="/contact" variant="primary">
          Work With Us
        </Button>
      </div>
    </SectionWrapper>
  );
}
