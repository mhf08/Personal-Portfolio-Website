"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[9999] mix-blend-soft-light"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <motion.div
        className="absolute w-[400px] h-[400px] -left-[200px] -top-[200px] rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          background: "radial-gradient(circle, rgba(212, 160, 23, 0.12) 0%, rgba(212, 160, 23, 0) 60%)",
        }}
      />
    </motion.div>
  );
}
