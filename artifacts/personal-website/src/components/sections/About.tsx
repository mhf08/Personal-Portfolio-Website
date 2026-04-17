import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-4">Philosophy</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-12 leading-tight">
            "Precision in Systems, Clarity in Vision"
          </h3>

          <div className="space-y-8 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            <p>
              I am an Industrial & Production Engineer with a deep fascination for how data can streamline the physical world. My work centers on the intersection of Machine Learning and Supply Chain Management, where I transform complex datasets into optimized, resilient systems.
            </p>
            <p>
              To me, engineering and photography are two sides of the same coin: <strong className="text-foreground font-medium">Observation</strong>. Whether I am training a predictive model to reduce supply chain bottlenecks or waiting for the perfect light to capture a landscape, the goal is the same: identifying patterns, finding balance, and achieving technical excellence.
            </p>
            <p className="text-foreground italic font-serif text-2xl border-l-2 border-primary pl-6 py-2">
              I don't just build systems; I document the efficiency within them.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
