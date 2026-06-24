"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const outcomes = [
  {
    headline: "You can put it in front of anyone.",
    body: "Investors, customers, your board — not a happy-path demo that only works when everything goes right.",
  },
  {
    headline: "You stop going in circles.",
    body: "Clear priorities, fewer loops, and progress you can actually measure.",
  },
  {
    headline: "You can finally sell it.",
    body: "It holds up under load and edge cases, not just the path you click through in a demo.",
  },
  {
    headline: "You can keep building without us.",
    body: "Documented and handed over cleanly, so your next developer picks up right where we left off.",
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
          After we ship
        </p>
        <h2 className="display-type mb-14 max-w-4xl text-[3.3rem] leading-[0.92] text-amp-ink sm:text-[4.3rem] md:text-[5.2rem]">
          What changes
          <br />
          once you
          <br />
          can ship.
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
