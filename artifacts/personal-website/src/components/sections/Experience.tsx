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

const RANCON_MEDIA: MediaItem[] = [
  { url: "/images/rancon/rancon-7.JPG", type: "image", title: "Industrial Attachment at RANCON" },
  { url: "/images/rancon/rancon-1.jpg", type: "image", title: "Team Meeting at RANCON" },
  { url: "/images/rancon/rancon-2.jpg", type: "image", title: "Production Line Observation" },
  { url: "/images/rancon/rancon-3.jpg", type: "image", title: "Quality Control Systems" },
  { url: "/images/rancon/rancon-4.jpg", type: "image", title: "Inventory Management Study" },
  { url: "/images/rancon/rancon-5.jpg", type: "image", title: "Process Optimization Review" },
  { url: "/images/rancon/rancon-6.JPG", type: "image", title: "Facility Overview" },
];

export function Experience() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="border border-border/50 p-8 md:p-12 bg-card/50 backdrop-blur-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h4 className="text-2xl font-serif text-foreground mb-2">RANCON Auto Industries Ltd. & RANCON Motorbikes Ltd.</h4>
                  <p className="text-primary font-mono text-sm tracking-wide">Industrial Attachment</p>
                </div>
              </div>

              <motion.ul
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Optimized production efficiency by assisting in Production Line and QC activities, including time studies and SOP upgrades.",
                  "Engineered and deployed a Rack ID system to optimize inventory traceability.",
                  "Improved workplace efficiency and safety by aligning operations with Japanese OEM standards and 5S methodologies.",
                  "Presented technical findings and process recommendations to the Executive Director and Production Manager."
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-4 text-muted-foreground leading-relaxed font-light group/item"
                  >
                    <span className="text-primary mt-1.5 opacity-50 group-hover/item:opacity-100 transition-opacity">♦</span>
                    <TextReveal>{item}</TextReveal>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="lg:col-span-2 relative mt-8 lg:mt-0">
              <Carousel className="w-full">
                <CarouselContent>
                  {RANCON_MEDIA.map((item, idx) => (
                    <CarouselItem key={idx}>
                      <div 
                        className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border/50 cursor-pointer group/img bg-muted/20"
                        onClick={() => setLightboxIndex(idx)}
                      >
                        {/* Blurred Backdrop */}
                        <img 
                          src={item.url} 
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                        />
                        
                        {/* Main Image (Uncropped) */}
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
                Visual Documentation — Industrial Attachment
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <MediaLightbox
        items={RANCON_MEDIA}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </section>
  );
}
