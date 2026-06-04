"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const features = [
  {
    title: "Find the real blockers",
    description: "We separate surface bugs from architecture problems so the project stops moving in circles.",
  },
  {
    title: "Build what has to hold",
    description: "Accounts, data, payments, permissions, deployment, and the unglamorous parts that make software usable.",
  },
  {
    title: "Keep the path visible",
    description: "You know what is being fixed, what is being rebuilt, and what needs to happen before launch.",
  },
  {
    title: "Hand it over cleanly",
    description: "The code, infrastructure, and documentation belong to you. No lock-in. No mystery build.",
  },
];

export default function Guide() {
  return (
    <SectionWrapper className="bg-brand-gray-bg">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
          Why AmpTech
        </p>

        <div className="grid gap-12 border-t border-black/10 pt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="display-type max-w-3xl text-[3.3rem] leading-[0.92] text-brand-ink sm:text-[4.4rem] md:text-[5.5rem]">
              YOU NEED
              <br />
              SOMEONE WHO
              <br />
              CAN GET IT
              <br />
              ACROSS
              <br />
              THE LINE.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-brand-gray">
              AmpTech brings senior engineering judgment to the messy middle of
              a build: the point where a prototype exists, but the product is
              not stable enough to sell, demo, or depend on.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="section-rule pt-5"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                {feature.title}
              </p>
              <p className="text-base leading-relaxed text-brand-gray">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
