"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ClosingCTA() {
  return (
    <section className="bg-brand-black py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-6">
            Ready to Build
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-6">
            Your idea has been waiting long enough.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Let&apos;s build it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button
              href="/contact"
              variant="primary"
              data-umami-event="cta-click"
              data-umami-event-label="closing-cta"
            >
              Book a Free Discovery Call
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
