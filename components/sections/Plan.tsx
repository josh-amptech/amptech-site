"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Show us where it stands",
    body: "Bring the idea, prototype, repo, screenshots, or rough build. We will meet you where the project is.",
  },
  {
    number: "02",
    title: "Get a clear build plan",
    body: "We identify what can be kept, what needs rebuilding, what it will take, and what should happen first.",
  },
  {
    number: "03",
    title: "Launch with ownership",
    body: "You get working software, deployment support, documentation, and the code in your hands.",
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
          A SIMPLE PATH
          <br />
          FROM STUCK
          <br />
          TO SHIPPED.
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
