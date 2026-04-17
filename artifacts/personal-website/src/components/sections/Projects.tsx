import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart IoT-Based Ammonia Gas Monitoring System",
    subtitle: "Industrial Safety for Fertilizer Manufacturing",
    description: "In fertilizer plants, Ammonia is a volatile necessity. I co-developed a low-cost, real-time monitoring system to automate safety responses where manual oversight often fails.",
    tech: "MQ-137 (Ammonia) via ADS1115 (16-bit ADC) and DHT22 (Temp/Humidity), ESP-01S (Wi-Fi) streaming to web dashboard, threshold-based logic (30 ppm Ammonia / 30°C) triggering Buzzer & Fan.",
    impact: "Reduced response time to leaks through automated targeted actuation. Created a centralized, auditable data stream. Modular scalability for rapid retrofitting.",
    image: "/images/project-ammonia.png"
  },
  {
    title: "The HydroPedal",
    subtitle: "Pedal Powered Water Pump for Rural Sustainability",
    description: "In many rural agricultural regions, small-scale farmers face a \"fuel-cost trap.\" We engineered the HydroPedal to decouple irrigation from fossil fuels.",
    tech: "Complete 3D assembly in SolidWorks, Ansys Static Structural analysis on frame, CFD for impeller housing optimization, Material selection: AISI 1020 Steel.",
    impact: "Flow rate 25–30 L/min at 20 ft head. 100% reduction in operational fuel costs. Sustainable alternative for independent farmers.",
    image: "/images/project-hydropedal.png"
  },
  {
    title: "Radial Drilling Machine SolidWorks Model",
    subtitle: "Full-Scale Mechanical Assembly & Kinematic Study",
    description: "Engineered a complete, part-by-part digital reconstruction of an industrial radial drilling machine.",
    tech: "50+ individual components in SolidWorks, mechanical mates for vertical arm travel and spindle rotation, Motion Study for kinematic validation, PhotoView 360 renders and exploded-view animations.",
    impact: "100% assembly transparency, no interference detected in final motion simulation.",
    image: "/images/project-drilling.png"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-card">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-4">Blueprints and Prototypes</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-foreground">Projects</h3>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-video overflow-hidden border border-border group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <div>
                  <h4 className="text-2xl font-serif text-foreground mb-2">{project.title}</h4>
                  <p className="text-primary font-mono text-sm tracking-wide">{project.subtitle}</p>
                </div>
                
                <p className="text-muted-foreground font-light leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <div>
                    <strong className="text-foreground text-sm uppercase tracking-widest block mb-1">Stack / Engineering</strong>
                    <p className="text-sm text-muted-foreground font-light">{project.tech}</p>
                  </div>
                  <div>
                    <strong className="text-primary text-sm uppercase tracking-widest block mb-1">Impact</strong>
                    <p className="text-sm text-muted-foreground font-light">{project.impact}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
