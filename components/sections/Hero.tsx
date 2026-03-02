"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const trustSignals = [
  "20+ years engineering experience",
  "Shipped in weeks, not months",
  "You own the code. Always.",
];

export default function Hero() {
  return (
    <div className="hero-dot-grid">
      <SectionWrapper className="pt-28 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Red accent bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-14 h-1 bg-brand-red mb-8 origin-left"
          />

          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-brand-black leading-none mb-8">
            Your App Idea,
            <br />
            <span className="text-brand-red">Finally Built.</span>
          </h1>

          <p className="text-xl text-brand-gray leading-relaxed mb-12 max-w-2xl">
            AmpTech builds professional web and mobile applications for
            entrepreneurs and business owners — using AI-powered development to
            move fast, and 20+ years of engineering experience to build it
            right.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
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

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-8 border-t border-brand-gray-bg"
          >
            {trustSignals.map((signal, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                <span className="text-sm font-semibold text-brand-gray uppercase tracking-wider">
                  {signal}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
