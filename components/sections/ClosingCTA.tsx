"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export default function ClosingCTA() {
  return (
    <SectionWrapper className="bg-brand-gray-bg">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-brand-black mb-4">
          Your idea has been waiting long enough.
        </h2>
        <p className="text-lg text-brand-gray leading-relaxed mb-10">
          Let&apos;s talk about what it would take to build it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            href="/contact"
            variant="primary"
            data-umami-event="cta-click"
            data-umami-event-label="closing-cta"
          >
            Book a Free Discovery Call
          </Button>
          <p className="text-sm text-brand-gray">
            Or email us at{" "}
            <a
              href="mailto:hello@amptech.dev"
              className="text-brand-red hover:underline underline-offset-4"
            >
              hello@amptech.dev
            </a>
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
