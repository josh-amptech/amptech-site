"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const outcomes = [
  {
    headline: "A working application",
    body: "Not a prototype, not an MVP with 20 caveats. Something you're proud to show people.",
  },
  {
    headline: "Built in weeks, not months.",
    body: "Your idea didn't have to wait for a traditional development cycle.",
  },
  {
    headline: "You own it.",
    body: "The code, the hosting, the domain. No platform dependency, no lock-in.",
  },
  {
    headline: "You know what you built.",
    body: "We document it so you're never left wondering how your own product works.",
  },
];

export default function Success() {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-sm font-medium uppercase tracking-wide text-brand-red mb-8">
          What You Walk Away With
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="flex gap-4 items-start"
            >
              <span className="mt-1 w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-brand-black mb-2">
                  {item.headline}
                </h3>
                <p className="text-base text-brand-gray leading-relaxed">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
