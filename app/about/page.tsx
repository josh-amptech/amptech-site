import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About — AmpTech",
  description:
    "The senior engineering help behind AmpTech's prototype-to-product work.",
};

export default function AboutPage() {
  return (
    <SectionWrapper>
      <div className="max-w-2xl">
        <p className="amp-eyebrow mb-4">
          About
        </p>
        <h1 className="display-type text-[3.5rem] leading-[0.92] text-amp-ink mb-6 sm:text-[4.7rem] md:text-[5.8rem]">
          The help
          <br />
          behind the
          <br />
          build.
        </h1>
        <p className="text-lg text-[var(--fg2)] leading-relaxed mb-6">
          AmpTech was founded for the moment when a promising build stops
          moving. The demo exists. The idea is still strong. But the project
          needs experienced engineering to become something people can actually
          rely on.
        </p>
        <p className="text-base text-[var(--fg2)] leading-relaxed mb-6">
          We work with founders and business owners who have momentum, clarity,
          and a clear product vision, but need help getting from rough build to
          launch-ready software.
        </p>
        <p className="text-base text-[var(--fg2)] leading-relaxed mb-10">
          We use modern AI-assisted development tools where they help, but the
          work is led by engineering judgment: architecture, tradeoffs,
          debugging, deployment, and clean ownership.
        </p>
        <div className="border border-gray-200 p-8 mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-amp-red mb-4">
            What You Can Expect
          </p>
          <p className="text-base text-[var(--fg2)] leading-relaxed mb-4">
            <span className="amp-metric">20+ years</span> of professional
            software development experience, direct communication, transparent
            scoping, and references from people we&apos;ve worked with directly.
          </p>
          <p className="text-base text-[var(--fg2)] leading-relaxed">
            The goal is simple: help you get from a stuck build to working
            software without having to become a developer yourself.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mb-10">
          <Badge>20+ Years Engineering Experience</Badge>
          <Badge>AI-Assisted Development</Badge>
          <Badge>Transparent Scoping</Badge>
          <Badge>Direct Communication</Badge>
        </div>
        <Button href="/contact" variant="primary">
          Book A Discovery Call
        </Button>
      </div>
    </SectionWrapper>
  );
}
