"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Tell us what you want to build",
    body: "Book a free 30-minute discovery call. Describe your idea without translating it into developer language first.",
  },
  {
    number: "02",
    title: "We scope, design, and price it",
    body: "You get a build plan with real tradeoffs, timeline expectations, and cost before development starts.",
  },
  {
    number: "03",
    title: "We build it and hand it over",
    body: "You get tested software, deployment support, and ownership of the result instead of dependency on the process.",
  },
];

export default function Plan() {
  return (
    <SectionWrapper className="bg-brand-night text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-red-light/80">
          The Plan
        </p>
        <h2 className="display-type mb-14 max-w-4xl text-[3.3rem] leading-[0.92] text-brand-cream sm:text-[4.4rem] md:text-[5.4rem]">
          A CLEAR PATH
          <br />
          FROM IDEA
          <br />
          TO LAUNCH.
        </h2>

        <div className="grid gap-10 border-t border-white/14 pt-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            >
              <div
                className="display-type mb-3 text-[5.5rem] leading-none text-white/12 select-none pointer-events-none"
                aria-hidden="true"
              >
                {step.number}
              </div>
              <div className="border-t border-white/14 pt-6">
                <h3 className="mb-3 text-xl font-bold leading-tight text-white">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-white/72">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
