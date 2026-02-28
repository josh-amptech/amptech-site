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
        className="text-center max-w-xl mx-auto"
      >
        <p className="text-sm font-medium uppercase tracking-wide text-brand-red mb-4">
          Early Access
        </p>
        <p className="text-2xl font-bold text-brand-black mb-4">
          First cohort of clients forming now.
        </p>
        <p className="text-base text-brand-gray leading-relaxed mb-8">
          Book a discovery call to learn more about working together and what
          we can build for you.
        </p>
        <Button
          href="/contact"
          variant="primary"
          data-umami-event="cta-click"
          data-umami-event-label="social-proof"
        >
          Book a Discovery Call
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
