"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const proofPoints = [
  "20+ years building software beyond the prototype stage",
  "References from people who have worked with us directly",
  "A scoping process that tells you what is real before you commit",
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
              Confidence
            </p>
            <h2 className="display-type mb-4 text-[3rem] leading-[0.92] text-brand-ink sm:text-[3.9rem] md:text-[4.6rem]">
              Proof before promises.
            </h2>
            <p className="text-lg leading-relaxed text-brand-gray">
              You should not have to trust a big claim on a small website. You
              should be able to see how we think, how we scope, and what kind
              of work we can carry across the finish line.
            </p>
            <div className="mt-10 space-y-5 border-t border-black/10 pt-6">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-red" />
                  <p className="text-base leading-relaxed text-brand-gray">
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
              className="border-brand-ink text-brand-ink hover:bg-brand-ink"
              data-umami-event="cta-click"
              data-umami-event-label="experience-proof"
            >
              See The Proof
            </Button>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
