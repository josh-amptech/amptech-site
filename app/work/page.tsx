import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "How We Work — AmpTech",
  description:
    "How AmpTech scopes builds, makes technical decisions, and hands off working software.",
};

const proofBlocks = [
  {
    title: "Experience",
    body: (
      <>
        <span className="amp-metric">20+ years</span> of building production
        software that teams actually depend on.
      </>
    ),
  },
  {
    title: "References",
    body: "We'll connect you with people we've actually worked with, so you hear how we operate from someone other than us.",
  },
];

export default function WorkPage() {
  return (
    <SectionWrapper>
      <div className="max-w-5xl">
        <p className="amp-eyebrow mb-4">
          How We Work
        </p>
        <h1 className="display-type max-w-4xl text-[3.5rem] leading-[0.92] text-amp-ink sm:text-[4.7rem] md:text-[5.8rem]">
          How to tell if
          <br />
          the build
          <br />
          can work.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--fg2)]">
          If you&apos;re deciding whether AmpTech is the right fit, start here. A
          good partner makes the project clearer before asking you to commit to a
          build.
        </p>

        <div className="mt-16 grid gap-5 border-t border-black/10 pt-8 md:grid-cols-2">
          {proofBlocks.map((block) => (
            <div key={block.title} className="section-rule pt-5">
              <p className="amp-eyebrow mb-3">
                {block.title}
              </p>
              <p className="text-base leading-relaxed text-[var(--fg2)]">
                {block.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-black/10 pt-8">
          <p className="amp-eyebrow mb-4">
            What That Means For You
          </p>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-[var(--fg2)]">
            <p>
              You should know what can be kept, what needs rebuilding, what the
              tradeoffs are, and who&apos;s making the technical decisions before
              development begins.
            </p>
            <p>
              When it&apos;s done, you&apos;ll have everything you need to keep
              moving — and no reason to call us unless you want to.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" variant="primary">
            Book A Discovery Call
          </Button>
          <Button href="/about" variant="secondary">
            Meet AmpTech
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
