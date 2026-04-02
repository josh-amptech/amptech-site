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
        <h1 className="display-type text-[3.5rem] leading-[0.92] text-brand-ink mb-6 sm:text-[4.7rem] md:text-[5.8rem]">
          THE ENGINEER
          <br />
          BEHIND YOUR
          <br />
          IDEA.
        </h1>
        <p className="text-lg text-brand-gray leading-relaxed mb-6">
          AmpTech was founded to solve a specific problem: too many good ideas
          stall out in the gap between what AI tools promise and what
          non-technical founders can actually ship on their own.
        </p>
        <p className="text-base text-brand-gray leading-relaxed mb-6">
          We work with founders who have momentum, clarity, and a real product
          vision, but who need an experienced guide to turn that into something
          they can launch and grow.
        </p>
        <p className="text-base text-brand-gray leading-relaxed mb-10">
          AmpTech uses the best AI-powered development tools available, not to
          replace engineering judgment, but to dramatically accelerate what good
          engineering judgment can produce.
        </p>
        <div className="border border-gray-200 p-8 mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-4">
            What You Can Expect
          </p>
          <p className="text-base text-brand-gray leading-relaxed mb-4">
            20+ years of professional software development experience, direct
            communication, transparent scoping, and references from people who
            have worked with us directly.
          </p>
          <p className="text-base text-brand-gray leading-relaxed">
            The goal is simple: help you get from idea to real software without
            having to become a developer yourself.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mb-10">
          <Badge>20+ Years Engineering Experience</Badge>
          <Badge>AI-Assisted Development</Badge>
          <Badge>Transparent Scoping</Badge>
          <Badge>You Own Everything</Badge>
        </div>
        <Button href="/contact" variant="primary">
          Book A Discovery Call
        </Button>
      </div>
    </SectionWrapper>
  );
}
