"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const capabilityMarks = [
  "Stalled AI builds",
  "Founder-led products",
  "Launch-ready handoff",
];

export default function Hero() {
  return (
    <section className="hero-noise min-h-[calc(100svh-4rem)] text-white">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative z-10 flex flex-col justify-center py-14 sm:py-18 lg:py-24"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-brand-cream/70"
          >
            AmpTech
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="mb-8 h-px w-24 origin-left bg-brand-cream/40"
          />

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="display-type max-w-4xl text-[4rem] leading-[0.9] text-brand-cream sm:text-[6rem] md:text-[7.8rem] lg:text-[8.8rem]"
          >
            YOU HAVE
            <br />
            A DEMO.
            <br />
            NOW BUILD
            <br />
            <span className="text-brand-red-light">THE PRODUCT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-brand-cream/82 sm:text-lg"
          >
            AmpTech helps founders and business owners turn promising AI builds,
            rough prototypes, and half-finished app ideas into software people
            can actually use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              href="/contact"
              variant="primary"
              className="min-w-[15rem]"
              data-umami-event="cta-click"
              data-umami-event-label="hero-primary"
            >
              Book A Discovery Call
            </Button>
            <Button
              href="/work"
              variant="secondary"
              className="border-white/50 text-white hover:bg-white hover:text-brand-night"
            >
              See The Proof
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38, ease: "easeOut" }}
            className="mt-8 grid gap-3 text-xs uppercase tracking-[0.22em] text-brand-cream/60 sm:mt-10 sm:flex sm:flex-wrap sm:gap-5 sm:text-sm"
          >
            {capabilityMarks.map((signal) => (
              <div key={signal} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red-light" />
                <span className="font-semibold">{signal}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
            className="mt-16 flex items-end lg:hidden"
          >
            <div className="w-full border-t border-white/18 pt-6">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-cream/52">
                You do not need another prompt. You need a build that holds up.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease: "easeOut" }}
          className="relative hidden lg:flex lg:items-end lg:justify-end lg:py-24"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-x-0 top-10 h-px bg-white/18" />
            <div className="ml-auto w-[88%]">
              <div className="display-type text-right text-[8.4rem] leading-[0.82] text-brand-cream/14">
                DEMO
                <br />
                PRODUCT
              </div>
              <div className="-mt-4 border-l border-white/18 pl-6">
                <p className="text-sm uppercase tracking-[0.24em] text-brand-cream/48">
                  The hard part starts after the demo works.
                </p>
                <p className="mt-3 max-w-xs text-lg leading-relaxed text-brand-cream/78">
                  We turn the rough version into the version you can show,
                  launch, own, and keep improving.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
