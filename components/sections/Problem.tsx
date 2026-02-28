"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const problems = [
  "But somewhere between the demo and a real, working application — the kind you can actually put users into — things got complicated.",
  "The AI got stuck. The code broke in ways you couldn't debug. The freelancer delivered something half-finished.",
  "The idea is still just an idea. That gap is real. And it has nothing to do with how smart your idea is.",
];

export default function Problem() {
  return (
    <section className="bg-brand-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm font-medium uppercase tracking-wide text-brand-red mb-8">
            The Problem
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
            You&apos;ve seen what AI can build. You&apos;ve watched the demos.
            You may have even tried the tools yourself.
          </p>
          <ul className="space-y-6">
            {problems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="flex gap-4 items-start"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                <p className="text-lg text-white leading-relaxed">{item}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
