import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Services — AmpTech",
  description:
    "How AmpTech turns rough prototypes, stalled builds, and app ideas into software people can use.",
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
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
          Services
        </p>
        <h1 className="display-type max-w-4xl text-[3.5rem] leading-[0.92] text-brand-ink sm:text-[4.7rem] md:text-[5.8rem]">
          FROM STUCK
          <br />
          TO SHIPPED,
          <br />
          DONE RIGHT.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-gray">
          AmpTech helps founders and business owners turn rough prototypes,
          stalled AI builds, and app ideas into software that holds up under
          real use.
        </p>

        <div className="mt-16 grid gap-5 border-t border-black/10 pt-8 md:grid-cols-2">
          {serviceAreas.map((service) => (
            <div key={service.title} className="section-rule pt-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                {service.title}
              </p>
              <p className="text-base leading-relaxed text-brand-gray">
                {service.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-black/10 pt-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
            Engagement Model
          </p>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-brand-gray">
            <p>
              Every engagement starts with a discovery call. If the build is a
              fit, the next step is scoped planning so you know what can be
              kept, what needs work, how long it should take, and what it will
              cost before development begins.
            </p>
            <p>
              AmpTech bills hourly against a scoped plan. The point is
              visibility: you know what is happening before the work starts and
              as it moves forward.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" variant="primary">
            Book A Discovery Call
          </Button>
          <Button href="/work" variant="secondary">
            See The Proof
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
