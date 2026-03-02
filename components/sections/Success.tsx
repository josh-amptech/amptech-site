"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const outcomes = [
  {
    headline: "Something you're proud to show people.",
    body: "Not a prototype, not an MVP with 20 caveats.",
  },
  {
    headline: "Your idea didn't wait a year to ship.",
    body: "Built in weeks, not months.",
  },
  {
    headline: "No lock-in. No dependency. No rug to pull.",
    body: "The code is yours. Always.",
  },
  {
    headline: "We document everything.",
    body: "You're never left wondering how your own product works.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="text-brand-red flex-shrink-0"
    >
      <path
        d="M2.5 8.5l3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Success() {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-4">
          What You Walk Away With
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-14 max-w-lg leading-tight">
          A working product. Full stop.
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="flex gap-4 items-start"
            >
              <div className="mt-0.5 w-8 h-8 rounded-full bg-brand-red-light flex items-center justify-center flex-shrink-0">
                <CheckIcon />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-black mb-1 leading-snug">
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
