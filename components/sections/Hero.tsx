"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Hero() {
  return (
    <SectionWrapper className="pt-24 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl font-bold tracking-tight text-brand-black leading-tight mb-6">
          Your App Idea,
          <br />
          <span className="text-brand-red">Finally Built.</span>
        </h1>
        <p className="text-lg text-brand-gray leading-relaxed mb-10 max-w-2xl">
          AmpTech builds professional web and mobile applications for
          entrepreneurs and business owners — using AI-powered development to
          move fast, and 20+ years of engineering experience to build it right.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            href="/contact"
            variant="primary"
            data-umami-event="cta-click"
            data-umami-event-label="hero-primary"
          >
            Book a Free Discovery Call
          </Button>
          <Button href="/work" variant="secondary">
            See What We&apos;ve Built
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
