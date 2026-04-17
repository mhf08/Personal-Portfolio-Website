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

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-card">
      <div className="container mx-auto px-6 max-w-5xl">
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
              <ul className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="group">
                    <div className="text-primary text-sm font-mono mb-1">{skill.name}</div>
                    <div className="text-muted-foreground font-light text-sm leading-relaxed">{skill.tools}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
