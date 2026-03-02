"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export default function SocialProof() {
  return (
    <SectionWrapper className="bg-brand-gray-bg">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-4">
              Founding Clients
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4 leading-tight">
              Now accepting the first cohort.
            </h2>
            <p className="text-lg text-brand-gray leading-relaxed">
              AmpTech is in its founding phase. A small number of projects are
              open now. If you have an idea that&apos;s been waiting for the
              right team — this is it.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button
              href="/contact"
              variant="primary"
              data-umami-event="cta-click"
              data-umami-event-label="social-proof"
            >
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
