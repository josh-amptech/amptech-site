import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Experience — AmpTech",
  description:
    "How AmpTech establishes credibility before formal case studies exist.",
};

const proofBlocks = [
  {
    title: "Experience",
    body: "20+ years of professional software development across real products, real users, and real delivery pressure.",
  },
  {
    title: "References",
    body: "We can provide references from people who have worked with us directly so you can hear how we operate from someone besides us.",
  },
];

export default function WorkPage() {
  return (
    <SectionWrapper>
      <div className="max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
          Why Clients Hire AmpTech
        </p>
        <h1 className="display-type max-w-4xl text-[3.5rem] leading-[0.92] text-brand-ink sm:text-[4.7rem] md:text-[5.8rem]">
          WHAT YOU
          <br />
          SHOULD LOOK
          <br />
          FOR IN
          <br />
          A GUIDE.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-gray">
          If you are deciding whether AmpTech is the right fit, start here. The
          right guide should bring engineering experience, clear thinking, and
          a process that makes you more confident, not more confused.
        </p>

        <div className="mt-16 grid gap-5 border-t border-black/10 pt-8 md:grid-cols-2">
          {proofBlocks.map((block) => (
            <div key={block.title} className="section-rule pt-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                {block.title}
              </p>
              <p className="text-base leading-relaxed text-brand-gray">
                {block.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-black/10 pt-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
            What That Means For You
          </p>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-brand-gray">
            <p>
              You should know how the project will be scoped, what the tradeoffs
              are, and who is making the technical decisions before development
              begins.
            </p>
            <p>
              You should leave with the code, the infrastructure, and the
              documentation you need to keep moving after launch.
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
