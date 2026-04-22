import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "@/components/ui/TextReveal";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const titleWords = "Mostofa Habib Fardin".split(" ");

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* Dot Grid Pattern for Texture */}
        <div className="absolute inset-0 dot-grid opacity-[0.15] dark:opacity-[0.05] text-foreground" />
        
        <img 
          src="/images/hero.png" 
          alt="Engineering blueprints and data visualizations" 
          className="w-full h-full object-cover opacity-40 dark:opacity-20 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background dark:via-background/80" />
      </motion.div>

      <div className="container mx-auto px-8 max-w-7xl relative z-10 flex flex-col items-center text-center">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-foreground mb-6 tracking-tight leading-tight flex flex-wrap justify-center gap-x-3 gap-y-2">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.8 }}
                className={word === "Fardin" ? "text-primary italic" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-px w-24 bg-primary mx-auto mb-6 origin-center"
          />

          <div className="mb-10">
            <TextReveal className="text-xl md:text-2xl text-muted-foreground font-light text-center">
              Industrial and Production Engineer | ML, Supply Chain, Quality | Visual Storyteller
            </TextReveal>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center justify-center gap-6"
          >
            <a 
              href="https://www.linkedin.com/in/mostofahabibfardin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 flex items-center gap-2 text-sm font-medium group"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://www.instagram.com/most.of.a_fardin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 flex items-center gap-2 text-sm font-medium group"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              <span>Instagram</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
