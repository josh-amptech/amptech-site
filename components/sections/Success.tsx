"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const outcomes = [
  {
    headline: "A product you can put in front of people.",
    body: "Not a demo that only works when everything goes exactly right.",
  },
  {
    headline: "A build that stops drifting.",
    body: "Clear priorities, fewer loops, and progress you can actually measure.",
  },
  {
    headline: "Ownership without a trap door.",
    body: "The code is yours. The infrastructure is yours. The direction is clear.",
  },
  {
    headline: "Something you can keep improving.",
    body: "Documented, handed over cleanly, and built to move after launch.",
  },
];

export default function Success() {
  return (
    <SectionWrapper>
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="amp-eyebrow mb-4">
          Success
        </p>
        <h2 className="display-type mb-14 max-w-4xl text-[3.3rem] leading-[0.92] text-amp-ink sm:text-[4.3rem] md:text-[5.2rem]">
          WHAT CHANGES
          <br />
          WHEN THE
          <br />
          PRODUCT IS
          <br />
          REAL.
        </h2>

        <div className="grid gap-8 border-t border-black/10 pt-10 sm:grid-cols-2">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.headline}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="flex items-start gap-4"
            >
              <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amp-red/10">
                <Check size={16} strokeWidth={2.5} className="flex-shrink-0 text-amp-red" aria-hidden />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold leading-snug text-amp-ink">
                  {item.headline}
                </h3>
                <p className="text-base leading-relaxed text-[var(--fg2)]">
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
