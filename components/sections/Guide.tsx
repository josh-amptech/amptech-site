"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";

const badges = [
  "20+ Years Engineering Experience",
  "AI-Assisted Development",
  "Fixed-Price Projects",
  "You Own Everything",
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
        <p className="text-sm font-medium uppercase tracking-wide text-brand-red mb-8">
          Why AmpTech
        </p>
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <p className="text-lg text-brand-gray leading-relaxed">
              &ldquo;We&apos;ve helped entrepreneurs go from &lsquo;I have this
              idea&rsquo; to &lsquo;here&apos;s my product&rsquo; — and
              we&apos;ve seen every version of the stuck-in-the-middle problem.
              We built our practice specifically around closing that gap.&rdquo;
            </p>
          </div>
          <div>
            <p className="text-lg text-brand-gray leading-relaxed">
              AmpTech is led by a software engineer with over 20 years of
              professional development experience. We use the best AI-powered
              development tools available — not to replace engineering judgment,
              but to dramatically accelerate what great engineering judgment can
              produce.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {badges.map((badge, i) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Badge>{badge}</Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
