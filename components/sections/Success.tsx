"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const outcomes = [
  {
    headline: "A product you are proud to show people.",
    body: "Not a prototype, not an MVP with 20 caveats.",
  },
  {
    headline: "A faster path to launch.",
    body: "Built in weeks, not months, without sacrificing the foundation underneath it.",
  },
  {
    headline: "No lock-in. No dependency. No rug to pull.",
    body: "The code is yours. The infrastructure is yours. The direction is clear.",
  },
  {
    headline: "Something you can actually run and grow.",
    body: "Documented, handed over cleanly, and built to keep moving after launch.",
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
      className="flex-shrink-0 text-brand-red"
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
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
          Success
        </p>
        <h2 className="display-type mb-14 max-w-4xl text-[3.3rem] leading-[0.92] text-brand-ink sm:text-[4.3rem] md:text-[5.2rem]">
          WHAT SUCCESS
          <br />
          LOOKS LIKE
          <br />
          ON THE OTHER
          <br />
          SIDE.
        </h2>

        <div className="grid gap-8 border-t border-black/10 pt-10 sm:grid-cols-2">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.headline}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="flex items-start gap-4"
            >
              <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-red-light">
                <CheckIcon />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold leading-snug text-brand-black">
                  {item.headline}
                </h3>
                <p className="text-base leading-relaxed text-brand-gray">
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
