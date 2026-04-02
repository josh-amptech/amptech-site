"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const features = [
  {
    title: "Senior engineering judgment",
    description: "We know where AI helps, where it drifts, and what has to be right before real users ever see it.",
  },
  {
    title: "AI speed, used well",
    description: "We use the same tools creating all the momentum, but with the experience to turn that speed into a real product.",
  },
  {
    title: "Transparent scoping",
    description: "You know what we are building, how we will approach it, and what the next milestone looks like before work starts.",
  },
  {
    title: "A clean handoff",
    description: "You own the code, the infrastructure, and the documentation. No lock-in. No mystery.",
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
              YOU DO NOT
              <br />
              NEED MORE
              <br />
              CODE.
              <br />
              YOU NEED
              <br />
              A GUIDE.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-brand-gray">
              AmpTech exists to close the gap between what AI tools promise and
              what founders can actually ship on their own. We bring 20+ years
              of professional software development experience to the part that
              still requires judgment: architecture, tradeoffs, debugging, and
              getting the product over the line.
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
