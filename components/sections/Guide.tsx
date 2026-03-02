"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const features = [
  {
    title: "20+ Years Knowing When AI Gets It Wrong",
    description: "The judgment that turns demos into real software.",
  },
  {
    title: "AI Speed. Human Judgment.",
    description: "We move fast because we know what we're building.",
  },
  {
    title: "Transparent Scoping",
    description:
      "You'll know what we're building, what it costs, and when — before we start.",
  },
  {
    title: "The Code Is Yours. Always.",
    description: "No platform dependency. No lock-in.",
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
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red mb-4">
          Why AmpTech
        </p>
        <div className="max-w-3xl mb-14">
          <p className="text-3xl md:text-4xl font-bold text-brand-black leading-snug mb-6">
            We&apos;ve helped entrepreneurs go from &ldquo;I have this
            idea&rdquo; to &ldquo;here&apos;s my product.&rdquo;
          </p>
          <p className="text-lg text-brand-gray leading-relaxed">
            AmpTech is led by a software engineer with over 20 years of
            professional development experience. We use the best AI-powered
            development tools available — not to replace engineering judgment,
            but to dramatically accelerate what great engineering judgment can
            produce.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white border-t-2 border-brand-red p-8"
            >
              <h3 className="text-lg font-bold text-brand-black mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="text-base text-brand-gray leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
