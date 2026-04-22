"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  // Use regex to split by one or more whitespace characters to avoid empty spans
  const words = typeof children === "string" ? children.split(/\s+/) : [];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.04, // Slightly slower for better readability
        delayChildren: delay
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20, // Slightly more vertical movement for a better "reveal"
      filter: "blur(8px)",
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`flex flex-wrap ${className.includes('text-center') ? 'justify-center' : ''} ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          className="mr-[0.25em] inline-block"
          key={`${word}-${index}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
