import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 bg-background relative border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-4">About Me</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-0">
          {/* Portrait — bleeds right into the text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative w-full lg:w-[420px] shrink-0 lg:-mr-20"
          >
            <div className="relative">
              <img
                src="/images/portrait.jpg"
                alt="Mostofa Habib Fardin"
                className="w-full lg:w-[420px] h-[480px] lg:h-[580px] object-cover object-top"
              />
              {/* Gradient that bleeds into the text area, guiding the eye right */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background opacity-90 hidden lg:block" />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
            </div>
          </motion.div>

          {/* Text — overlaps the portrait on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="relative z-10 lg:pt-16 lg:pl-12 lg:pr-0 flex-1"
          >
            <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-8 leading-tight">
              "Precision in Systems,<br />
              <span className="text-primary italic">Clarity in Vision"</span>
            </h3>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                I am an Industrial & Production Engineer with a deep fascination for how data can streamline the physical world. My work centers on the intersection of Machine Learning and Supply Chain Management, where I transform complex datasets into optimized, resilient systems.
              </p>
              <p>
                To me, engineering and photography are two sides of the same coin: <strong className="text-foreground font-medium">Observation</strong>. Whether I am training a predictive model to reduce supply chain bottlenecks or waiting for the perfect light to capture a landscape, the goal is the same: identifying patterns, finding balance, and achieving technical excellence.
              </p>
              <p className="text-foreground italic font-serif text-xl border-l-2 border-primary pl-6 py-2">
                I don't just build systems; I document the efficiency within them.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
