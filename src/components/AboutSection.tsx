"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL } from "@/lib/social";

// Apple-grade Quint/Expo ease for silky, jitter-free downward reveal
const smoothEase = [0.19, 1, 0.22, 1] as const;

// Container coordinates staggered reveal
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
};

// Downward optical blur dissolve settling naturally at rest
const cascadeDownVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -18,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

export function AboutSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="px-4 sm:px-8 py-8 sm:py-9 border-b border-border space-y-5"
    >
      {/* Section Title */}
      <motion.div variants={cascadeDownVariants} className="flex items-center gap-2">
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
          About
        </span>
      </motion.div>

      {/* Human Narrative Story */}
      <motion.div
        variants={cascadeDownVariants}
        className="relative border-l-2 border-foreground/80 pl-5 sm:pl-6 py-1 space-y-4"
      >
        <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-foreground font-normal">
          <p>
            Started writing code back in 2021, building web apps and messing around with servers. Shipped a lot of random tools along the way. Most of the early experiments went nowhere, but they taught me what actually breaks and how to write reliable software.
          </p>

          <p>
            Right now most of my time goes into{" "}
            <a
              href="https://intenthost.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground inline-flex items-center gap-0.5"
            >
              Intent Host
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            . Setting up hosting and domains is usually annoying and full of upsells, so we built something cleaner. Fast NVMe storage, LiteSpeed, cPanel, and servers that just run without weird issues.
          </p>

          <p className="text-foreground/80">
            The site is in monochrome on purpose. No random colors or decorations, just clean typography and spacing that lets things speak for themselves.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
