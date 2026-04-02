"use client";

import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
            The Problem
          </p>

          <div className="section-rule grid gap-12 pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="max-w-3xl">
              <p className="display-type text-[3.7rem] leading-[0.92] text-brand-ink sm:text-[5rem] md:text-[6.4rem]">
                YOU GOT
                <br />
                FURTHER
                <br />
                THAN YOU
                <br />
                EXPECTED.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <p className="text-lg leading-relaxed text-brand-gray">
                You&apos;ve seen what AI can build. You may have even tried
                Replit, Bolt, Lovable, Claude, or Cursor yourself and gotten
                further than you expected.
              </p>
              <p className="text-lg leading-relaxed text-brand-gray">
                Then you hit the wall. The code broke in ways you could not
                debug. The AI went in circles. The freelancer got you part of
                the way there, but not all the way to something you could
                launch with confidence.
              </p>
              <p className="text-sm uppercase tracking-[0.24em] text-brand-steel">
                The gap between a promising demo and production-ready software
                is real.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
