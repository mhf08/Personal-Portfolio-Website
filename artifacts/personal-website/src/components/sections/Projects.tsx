import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Smart IoT-Based Ammonia Gas Monitoring System",
    subtitle: "Industrial Safety for Fertilizer Manufacturing",
    description: "In fertilizer plants, Ammonia is a volatile necessity. I co-developed a low-cost, real-time monitoring system to automate safety responses where manual oversight often fails.",
    tech: "MQ-137 (Ammonia) via ADS1115 (16-bit ADC) and DHT22 (Temp/Humidity), ESP-01S (Wi-Fi) streaming to web dashboard, threshold-based logic (30 ppm Ammonia / 30°C) triggering Buzzer & Fan.",
    impact: "Reduced response time to leaks through automated targeted actuation. Created a centralized, auditable data stream. Modular scalability for rapid retrofitting.",
    images: ["/images/project-ammonia.png"]
  },
  {
    title: "The HydroPedal",
    subtitle: "Pedal Powered Water Pump for Rural Sustainability",
    description: "In many rural agricultural regions, small-scale farmers face a \"fuel-cost trap.\" We engineered the HydroPedal to decouple irrigation from fossil fuels.",
    tech: "Complete 3D assembly in SolidWorks, Ansys Static Structural analysis on frame, CFD for impeller housing optimization, Material selection: AISI 1020 Steel.",
    impact: "Flow rate 25–30 L/min at 20 ft head. 100% reduction in operational fuel costs. Sustainable alternative for independent farmers.",
    images: [
      "/images/project-hydropedal.png",
      "/images/hydropedal.jpg",
      "/images/hydropedal2.jpg",
    ]
  },
  {
    title: "Radial Drilling Machine SolidWorks Model",
    subtitle: "Full-Scale Mechanical Assembly & Kinematic Study",
    description: "Engineered a complete, part-by-part digital reconstruction of an industrial radial drilling machine.",
    tech: "50+ individual components in SolidWorks, mechanical mates for vertical arm travel and spindle rotation, Motion Study for kinematic validation, PhotoView 360 renders and exploded-view animations.",
    impact: "100% assembly transparency, no interference detected in final motion simulation.",
    images: ["/images/project-drilling.png"]
  }
];

function ProjectImageGallery({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  if (images.length === 1) {
    return (
      <div className="relative aspect-video overflow-hidden border border-border group">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden border border-border group">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} — image ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Prev / Next */}
      <button
        onClick={() => setCurrent((current - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-primary/90 text-foreground hover:text-primary-foreground p-1.5 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-primary/90 text-foreground hover:text-primary-foreground p-1.5 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-foreground/40"}`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

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
                <ProjectImageGallery images={project.images} title={project.title} />
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
