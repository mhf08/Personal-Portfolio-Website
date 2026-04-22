import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Physical Systems & Design",
    skills: [
      { name: "Engineering Design", tools: "SolidWorks & CATIA" },
      { name: "Simulation & Analysis", tools: "Ansys (FEA/CFD) for structural and fluid validation, ARENA for system analysis" },
      { name: "Digital Prototyping", tools: "AutoCAD (Layouts)" }
    ]
  },
  {
    category: "Data Science & ML",
    skills: [
      { name: "Predictive Modeling", tools: "XGBoost, TFT and LightGBM for forecasting" },
      { name: "Data Stack", tools: "Python, MATLAB, and C programming" },
      { name: "Advanced Tech", tools: "IoT (Sensor integration), Blockchain" }
    ]
  },
  {
    category: "Operational Excellence",
    skills: [
      { name: "Lean Philosophies", tools: "5S, 3G, Kaizen, 3K, and Poka-Yoke" },
      { name: "Quality & Safety", tools: "Line Balancing, Time Studies, Ergonomics and Safety" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-card">
      <div className="container mx-auto px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-4">The Toolkit</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-foreground">Skills</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <h4 className="text-xl font-serif text-foreground mb-6 border-b border-border/50 pb-4">{category.category}</h4>
              <motion.ul 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.li key={sIdx} className="group" variants={itemVariants}>
                    <div className="text-primary text-sm font-mono mb-1 group-hover:translate-x-1 transition-transform">{skill.name}</div>
                    <div className="text-muted-foreground font-light text-sm leading-relaxed">{skill.tools}</div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
