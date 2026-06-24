"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ClosingCTA() {
  return (
    <section className="bg-amp-ink px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="amp-eyebrow mb-6">
            Ready when you are
          </p>
          <h2 className="display-type mb-6 text-[3.7rem] leading-[0.92] text-white sm:text-[5rem] md:text-[6.4rem]">
            Ready to get this
            <br />
            across the line?
          </h2>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-300">
            Bring the stuck prototype, the rough build, or the idea you can&apos;t
            stop thinking about. We&apos;ll help you find the next move.
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
                className="text-amp-red hover:underline underline-offset-4"
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
