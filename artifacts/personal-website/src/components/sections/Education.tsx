import { motion } from "framer-motion";
import buetLogo from "@assets/buet-seeklogo_1776505671675.png";
import notreDameLogo from "@assets/Notre_Dame_College,_Dhaka_Monogram.svg_1776505694867.png";

const educationData = [
  {
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    degree: "B.Sc. in Industrial and Production Engineering",
    period: "JAN 2022 – May 2026 (Expected)",
    logo: buetLogo,
    details: [
      { label: "CGPA", value: "3.87 / 4.00" },
      { label: "Dean's List", value: "2022 and 2023" },
      { label: "Thesis", value: "Simulation-based study on minimizing the bullwhip effect and improving forecasting under variable lead time and geopolitical instability using machine learning and blockchain" },
      { label: "Key Coursework", value: "Operations Management, Quality Management, Operations Research, Probability and Statistics, Project Management" },
    ]
  },
  {
    institution: "Notre Dame College, Dhaka",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2018 – 2020",
    logo: notreDameLogo,
    details: [
      { label: "GPA", value: "5.00 / 5.00 (Perfect)" },
      { label: "Award", value: "Awarded for Perfect Attendance" },
    ]
  }
];

export function Education() {
  return (
    <section id="education" className="py-32 bg-card">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-4">Academic Foundation</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-foreground">Education</h3>
        </motion.div>

        <div className="space-y-16">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border">
                <div className="absolute top-2 left-[-4px] w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="md:pl-12">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/10 border border-border/50 flex items-center justify-center shrink-0 overflow-hidden p-1">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="text-2xl font-serif text-foreground">{edu.institution}</h4>
                  </div>
                  <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit shrink-0">
                    {edu.period}
                  </span>
                </div>
                <h5 className="text-xl text-muted-foreground mb-6 font-light">{edu.degree}</h5>

                <ul className="space-y-4">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground font-medium mr-2">{detail.label}:</strong>
                      <span className="font-light">{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
