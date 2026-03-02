"use client";

import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="bg-brand-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-10">
            The Problem
          </p>

          <div className="max-w-3xl space-y-6 mb-12">
            <p className="text-xl text-gray-300 leading-relaxed">
              You&apos;ve seen what AI can build. You&apos;ve watched the
              demos. You may have even tried Replit, Bolt, or Lovable yourself
              — or spent real time with Claude or Cursor — and gotten further
              than you expected.
            </p>
            <p className="text-3xl font-bold text-white leading-snug">
              Then you hit the wall.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              The code broke in ways you couldn&apos;t debug. The AI started
              going in circles. The freelancer delivered something
              half-finished. And the idea that felt so close is still just an
              idea.
            </p>
          </div>

          {/* Mech suit pull-quote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="border-l-4 border-brand-red pl-8 py-2 mb-12"
          >
            <p className="text-2xl md:text-3xl font-semibold text-white leading-snug italic">
              &ldquo;AI isn&apos;t a robo-taxi. It won&apos;t just pick you up
              and take you where you want to go. It&apos;s more like a mech
              suit — an incredible force multiplier for the person who knows
              how to operate it.&rdquo;
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="text-xl text-gray-300 leading-relaxed max-w-3xl"
          >
            That gap between a working demo and production-ready software?
            It&apos;s real. And it takes 20+ years of engineering judgment to
            cross it reliably.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
