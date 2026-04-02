"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  idea: string;
  triedBefore: boolean | null;
  timeline: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: { triedBefore: null, timeline: "" },
  });

  async function onSubmit(data: FormData) {
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      if (typeof window !== "undefined" && window.umami) {
        window.umami.track("discovery-call-form-submit");
      }
    } catch {
      setError(true);
    }
  }

  if (submitted) {
    return (
      <SectionWrapper className="min-h-[60vh] flex items-center">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-12 h-12 rounded-full bg-brand-red-light flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-6 h-6 text-brand-red"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-brand-black mb-4">
            Request received.
          </h2>
          <p className="text-base text-brand-gray leading-relaxed">
            Thanks for reaching out. Your request was submitted successfully.
            If you prefer, you can also email{" "}
            <a
              href="mailto:hello@amptech.dev"
              className="text-brand-red underline underline-offset-4"
            >
              hello@amptech.dev
            </a>
            .
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper>
      <div className="max-w-xl">
        <p className="text-sm font-medium uppercase tracking-wide text-brand-red mb-4">
          Get Started
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-brand-black mb-4">
          Book a Free Discovery Call
        </h1>
        <p className="text-base text-brand-gray leading-relaxed mb-10">
          Tell us about your idea. No technical knowledge required — just
          describe what you want to build and we&apos;ll take it from there.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-brand-black mb-2"
            >
              Name <span className="text-brand-red">*</span>
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className={`w-full border rounded px-4 py-3 text-base text-brand-black placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-brand-red transition ${
                errors.name ? "border-brand-red" : "border-gray-300"
              }`}
              placeholder="Your full name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="mt-1.5 text-sm text-brand-red">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-brand-black mb-2"
            >
              Email <span className="text-brand-red">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={`w-full border rounded px-4 py-3 text-base text-brand-black placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-brand-red transition ${
                errors.email ? "border-brand-red" : "border-gray-300"
              }`}
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1.5 text-sm text-brand-red">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Idea */}
          <div>
            <label
              htmlFor="idea"
              className="block text-sm font-medium text-brand-black mb-2"
            >
              Tell us about your idea <span className="text-brand-red">*</span>
            </label>
            <textarea
              id="idea"
              rows={5}
              className={`w-full border rounded px-4 py-3 text-base text-brand-black placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-brand-red transition resize-none ${
                errors.idea ? "border-brand-red" : "border-gray-300"
              }`}
              placeholder="Describe the app you want to build — what it does, who it's for, and any context that helps us understand it."
              {...register("idea", {
                required: "Please describe your idea",
                minLength: {
                  value: 50,
                  message: "Please add a bit more detail (at least 50 characters)",
                },
              })}
            />
            {errors.idea && (
              <p className="mt-1.5 text-sm text-brand-red">
                {errors.idea.message}
              </p>
            )}
          </div>

          {/* Tried before */}
          <div>
            <p className="block text-sm font-medium text-brand-black mb-3">
              Have you tried to build this before?
            </p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="true"
                  className="accent-brand-red"
                  {...register("triedBefore")}
                />
                <span className="text-sm text-brand-gray">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="false"
                  className="accent-brand-red"
                  {...register("triedBefore")}
                />
                <span className="text-sm text-brand-gray">No</span>
              </label>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label
              htmlFor="timeline"
              className="block text-sm font-medium text-brand-black mb-2"
            >
              Rough timeline in mind?
            </label>
            <select
              id="timeline"
              className="w-full border border-gray-300 rounded px-4 py-3 text-base text-brand-black outline-none focus:ring-2 focus:ring-brand-red transition bg-white"
              {...register("timeline")}
            >
              <option value="">Select one</option>
              <option value="asap">ASAP</option>
              <option value="1-3-months">1–3 months</option>
              <option value="3-6-months">3–6 months</option>
              <option value="exploring">Just exploring</option>
            </select>
          </div>

          {error && (
            <p className="text-sm text-brand-red">
              Submissions are not configured on this deployment yet. Please
              email us directly at{" "}
              <a
                href="mailto:hello@amptech.dev"
                className="underline underline-offset-4"
              >
                hello@amptech.dev
              </a>
              .
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-full sm:w-auto"
            data-umami-event="cta-click"
            data-umami-event-label="contact-form-submit"
          >
            {isSubmitting ? "Sending..." : "Send My Idea"}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
}
