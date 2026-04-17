import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-32 bg-background relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-4">Professional Record</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-foreground">Experience</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="border border-border/50 p-8 md:p-12 bg-card/50 backdrop-blur-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h4 className="text-2xl font-serif text-foreground mb-2">RANCON Auto Industries Ltd. & RANCON Motorbikes Ltd.</h4>
              <p className="text-primary font-mono text-sm tracking-wide">Industrial Attachment</p>
            </div>
          </div>

          <ul className="space-y-4">
            {[
              "Optimized production efficiency by assisting in Production Line and QC activities, including time studies and SOP upgrades.",
              "Engineered and deployed a Rack ID system to optimize inventory traceability.",
              "Improved workplace efficiency and safety by aligning operations with Japanese OEM standards and 5S methodologies.",
              "Presented technical findings and process recommendations to the Executive Director and Production Manager."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-muted-foreground leading-relaxed font-light">
                <span className="text-primary mt-1.5 opacity-50">♦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
