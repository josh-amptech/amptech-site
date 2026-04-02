"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ClosingCTA() {
  return (
    <section className="bg-brand-night px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-brand-red-light/80">
            Ready To Build
          </p>
          <h2 className="display-type mb-6 text-[3.7rem] leading-[0.92] text-white sm:text-[5rem] md:text-[6.4rem]">
            YOUR IDEA
            <br />
            HAS BEEN
            <br />
            WAITING
            <br />
            LONG ENOUGH.
          </h2>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-300">
            You do not need to figure this out alone. If you are ready to turn
            the idea into a real product, let&apos;s talk.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button
              href="/contact"
              variant="primary"
              className="min-w-[15rem]"
              data-umami-event="cta-click"
              data-umami-event-label="closing-cta"
            >
              Book A Discovery Call
            </Button>
            <p className="text-sm text-gray-400">
              Or email{" "}
              <a
                href="mailto:hello@amptech.dev"
                className="text-brand-red hover:underline underline-offset-4"
              >
                hello@amptech.dev
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
