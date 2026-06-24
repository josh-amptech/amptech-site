"use client";

import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="amp-eyebrow mb-8">
            Where builds stall
          </p>

          <div className="section-rule grid gap-12 pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="max-w-3xl">
              <p className="display-type text-[3.7rem] leading-[0.92] text-amp-ink sm:text-[5rem] md:text-[6.4rem]">
                The demo worked.
                <br />
                Then reality showed up.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <p className="text-lg leading-relaxed text-[var(--fg2)]">
                You got a screen on the page. A workflow clicked through. It
                even felt like the product was almost there.
              </p>
              <p className="text-lg leading-relaxed text-[var(--fg2)]">
                Then the hidden work showed up. Auth broke. Data didn&apos;t save
                cleanly. Edge cases piled up. The AI kept rewriting the same
                files, and every fix spawned two new bugs.
              </p>
              <p className="text-lg leading-relaxed text-[var(--fg2)]">
                Now it&apos;s months in, and you honestly can&apos;t tell if
                you&apos;re almost done or about to start over.
              </p>
              <p className="text-sm uppercase tracking-[0.24em] text-amp-steel">
                Left alone, that&apos;s how promising builds die — quietly, in a
                repo no one opens again.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
