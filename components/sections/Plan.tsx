"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Tell us what you want to build",
    body: "Book a free 30-minute discovery call. Describe your idea — no technical knowledge needed.",
  },
  {
    number: "02",
    title: "We scope, design, and price it",
    body: "You get a clear proposal: what we'll build, how long it takes, and what it costs. No surprises.",
  },
  {
    number: "03",
    title: "We build it and hand it over",
    body: "You receive a complete, tested, deployed application — and everything you need to own and run it.",
  },
];

export default function Plan() {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-4">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-16 max-w-lg leading-tight">
          Three steps to a working application.
        </h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            >
              {/* Ghost step number */}
              <div
                className="text-[7rem] font-black leading-none text-brand-red-light select-none pointer-events-none mb-1"
                aria-hidden="true"
              >
                {step.number}
              </div>
              <div className="border-t-2 border-brand-red pt-6">
                <h3 className="text-xl font-bold text-brand-black mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-base text-brand-gray leading-relaxed">
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
