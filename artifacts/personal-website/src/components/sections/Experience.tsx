import { useState } from "react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MediaLightbox, type MediaItem } from "@/components/ui/MediaLightbox";

const EXPERIENCES = [
  {
    company: "RANCON Auto Industries Ltd. & RANCON Motorbikes Ltd.",
    role: "Industrial Attachment",
    type: "Work",
    highlights: [
      "Optimized production efficiency by assisting in Production Line and QC activities, including time studies and SOP upgrades.",
      "Engineered and deployed a Rack ID system to optimize inventory traceability.",
      "Improved workplace efficiency and safety by aligning operations with Japanese OEM standards and 5S methodologies.",
      "Presented technical findings and process recommendations to the Executive Director and Production Manager."
    ],
    media: RANCON_MEDIA
  },
  {
    company: "A1 Polymer Limited (Anwar Group of Industries)",
    role: "Industrial Visit",
    type: "Visit",
    date: "March 5, 2026",
    location: "Tongi, Gazipur",
    highlights: [
      "Analyzed end-to-end production for Pipes, Fittings, Teflon Tape, and Galvanizing operations.",
      "Gained firsthand insight into large-scale manufacturing workflows and integrated industrial operations.",
      "Engaged with production planning and supply chain teams to understand SKU management in a high-demand market.",
      "Observed the practical application of corporate vision and quality commitment in a major industrial concern."
    ],
    media: []
  }
];

export function Experience() {
  const [lightboxState, setLightboxState] = useState<{ items: MediaItem[], index: number | null }>({
    items: [],
    index: null
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section id="experience" className="py-32 bg-background relative">
      <div className="container mx-auto px-8 max-w-7xl">
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

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="border border-border/50 p-8 md:p-12 bg-card/50 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className={exp.media.length > 0 ? "lg:col-span-3" : "lg:col-span-5"}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                      <h4 className="text-2xl font-serif text-foreground mb-2">{exp.company}</h4>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 items-center">
                        <p className="text-primary font-mono text-sm tracking-wide uppercase">{exp.role}</p>
                        {exp.date && (
                          <>
                            <span className="text-muted-foreground/30">•</span>
                            <p className="text-muted-foreground font-mono text-xs uppercase tracking-wider">{exp.date}</p>
                          </>
                        )}
                        {exp.location && (
                          <>
                            <span className="text-muted-foreground/30">•</span>
                            <p className="text-muted-foreground font-mono text-xs uppercase tracking-wider">{exp.location}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <motion.ul
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {exp.highlights.map((item, hIdx) => (
                      <motion.li
                        key={hIdx}
                        variants={itemVariants}
                        className="flex items-start gap-4 text-muted-foreground leading-relaxed font-light group/item"
                      >
                        <span className="text-primary mt-1.5 opacity-50 group-hover/item:opacity-100 transition-opacity">♦</span>
                        <TextReveal>{item}</TextReveal>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {exp.media.length > 0 && (
                  <div className="lg:col-span-2 relative mt-8 lg:mt-0">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {exp.media.map((item, mIdx) => (
                          <CarouselItem key={mIdx}>
                            <div 
                              className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border/50 cursor-pointer group/img bg-muted/20"
                              onClick={() => setLightboxState({ items: exp.media, index: mIdx })}
                            >
                              <img 
                                src={item.url} 
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                              />
                              <img 
                                src={item.url} 
                                alt={item.title}
                                className="relative w-full h-full object-contain transition-transform duration-700 group-hover/img:scale-105 z-10"
                              />
                              <div className="absolute inset-0 bg-black/5 group-hover/img:bg-transparent transition-colors duration-300 z-20" />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="flex justify-end gap-2 mt-4">
                        <CarouselPrevious className="static translate-y-0 h-10 w-10 border-border/50 bg-background/50 hover:bg-primary hover:text-white transition-all" />
                        <CarouselNext className="static translate-y-0 h-10 w-10 border-border/50 bg-background/50 hover:bg-primary hover:text-white transition-all" />
                      </div>
                    </Carousel>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/50 mt-4 text-right">
                      Visual Documentation — {exp.role}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <MediaLightbox
        items={lightboxState.items}
        index={lightboxState.index}
        onClose={() => setLightboxState(prev => ({ ...prev, index: null }))}
        onNavigate={(index) => setLightboxState(prev => ({ ...prev, index }))}
      />
    </section>
  );
}
