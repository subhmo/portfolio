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
            Hi, I&apos;m <span className="font-semibold text-foreground">{SOCIAL.name}</span>. My software journey started back in 2021 out of curiosity and an urge to build things on the web. Over the years, I coded and deployed plenty of tools and apps. Most of the early experiments never took off, but building them taught me how to write solid software and see things through.
          </p>

          <p>
            Today, all my energy and focus go into building{" "}
            <a
              href="https://intenthost.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground inline-flex items-center gap-0.5"
            >
              Intent Host
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            . Getting a website or server online should not be complicated or stressful. We provide fast NVMe web hosting, managed WordPress, cloud instances, bare metal servers, and domain registration with simple controls and dependable support.
          </p>

          <p className="text-foreground/80">
            I keep this site monochrome on purpose. Black and white strips away visual clutter, letting the typography, spacing, and structure stand on their own.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
