import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Services — AmpTech",
  description:
    "How AmpTech turns a stalled AI build into software that holds up in production.",
};

const serviceAreas = [
  {
    title: "Product builds",
    body: "New web and mobile applications for founders who need more than a demo.",
  },
  {
    title: "Rescue and rebuild work",
    body: "Projects that got stuck in Replit, Bolt, Lovable, Cursor, or with a freelancer and need a clear path to launch.",
  },
  {
    title: "Scoping and technical direction",
    body: "Architecture, build plans, implementation decisions, and the judgment to stop bad paths before they get expensive.",
  },
  {
    title: "Post-launch iteration",
    body: "Ongoing product improvement for teams that want a steady engineering partner after launch.",
  },
];

export default function ServicesPage() {
  return (
    <SectionWrapper>
      <div className="max-w-5xl">
        <p className="amp-eyebrow mb-4">
          Services
        </p>
        <h1 className="display-type max-w-4xl text-[3.5rem] leading-[0.92] text-amp-ink sm:text-[4.7rem] md:text-[5.8rem]">
          From stuck
          <br />
          to shipped,
          <br />
          done right.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--fg2)]">
          You&apos;ve got a prototype that demos well but isn&apos;t ready for
          production. We take it the rest of the way — and hand it over.
        </p>

        <div className="mt-16 grid gap-5 border-t border-black/10 pt-8 md:grid-cols-2">
          {serviceAreas.map((service) => (
            <div key={service.title} className="section-rule pt-5">
              <p className="amp-eyebrow mb-3">
                {service.title}
              </p>
              <p className="text-base leading-relaxed text-[var(--fg2)]">
                {service.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-black/10 pt-8">
          <p className="amp-eyebrow mb-4">
            Engagement Model
          </p>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-[var(--fg2)]">
            <p>
              Every engagement starts with a discovery call. If the build is a
              fit, the next step is scoped planning, so you know what can be
              kept, what needs work, how long it should take, and what it&apos;ll
              cost before development begins.
            </p>
            <p>
              We bill hourly against a scoped plan. The point is visibility: you
              know what&apos;s happening before the work starts and as it moves
              forward.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" variant="primary">
            Book A Discovery Call
          </Button>
          <Button href="/work" variant="secondary">
            See How We Work
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
