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
        <p className="text-sm font-medium uppercase tracking-wide text-brand-red mb-8">
          How It Works
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="border-t-2 border-brand-red pt-6"
            >
              <p className="text-4xl font-bold text-brand-red-light mb-4">
                {step.number}
              </p>
              <h3 className="text-xl font-semibold text-brand-black mb-3">
                {step.title}
              </h3>
              <p className="text-base text-brand-gray leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
