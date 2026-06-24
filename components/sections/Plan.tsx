"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Show us where it stands",
    body: "Bring the prototype, the repo, or the rough build. We'll meet you where the project actually is.",
  },
  {
    number: "02",
    title: "Get a clear build plan",
    body: "We tell you what's worth keeping, what needs rebuilding, what it'll take, and what to do first.",
  },
  {
    number: "03",
    title: "Go live",
    body: "You ship working software with deployment support and documentation, and a codebase you can keep building on.",
  },
];

export default function Plan() {
  return (
    <SectionWrapper className="bg-amp-ink text-white">
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="amp-eyebrow mb-4">
          How it goes
        </p>
        <h2 className="display-type mb-14 max-w-4xl text-[3.3rem] leading-[0.92] text-white sm:text-[4.4rem] md:text-[5.4rem]">
          A simple path
          <br />
          from stuck
          <br />
          to shipped.
        </h2>

        <div className="grid gap-10 border-t border-white/14 pt-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={false}
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
