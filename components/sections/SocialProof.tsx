"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const proofPoints: ReactNode[] = [
  <>
    <span className="amp-metric">20+ years</span> building software beyond the
    prototype stage
  </>,
  "References from people we've actually worked with",
  "A scoping process that shows you what's worth keeping before you commit",
];

export default function SocialProof() {
  return (
    <SectionWrapper>
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="amp-eyebrow mb-4">
              Before you commit
            </p>
            <h2 className="display-type mb-4 text-[3rem] leading-[0.92] text-amp-ink sm:text-[3.9rem] md:text-[4.6rem]">
              Look before you book.
            </h2>
            <p className="text-lg leading-relaxed text-[var(--fg2)]">
              You shouldn&apos;t have to trust a big claim on a small website.
              You should be able to see how we think, how we scope, and the kind
              of work we take to launch.
            </p>
            <div className="mt-10 space-y-5 border-t border-black/10 pt-6">
              {proofPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-amp-red" />
                  <p className="text-base leading-relaxed text-[var(--fg2)]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0">
            <Button
              href="/work"
              variant="secondary"
              className="border-amp-ink text-amp-ink hover:bg-amp-ink"
              data-umami-event="cta-click"
              data-umami-event-label="experience-proof"
            >
              See How We Work
            </Button>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
