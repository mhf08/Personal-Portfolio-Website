import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";
import { MediaLightbox, MediaItem } from "@/components/ui/MediaLightbox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const achievements = [
  {
    title: "HULT Prize at BUET (2022) — 1st Runner Up | Team G1",
    challenge: "Restarting the World Economy post-pandemic.",
    concept: "A Startup-Support Ecosystem — centralized platform as catalyst for small-scale businesses, bridging the technical gap, providing PESTEL-based strategic support.",
    impact: "Ranked 2nd in BUET for demonstrating a viable, scalable model for post-crisis economic recovery.",
    photos: [],
    certificate: null,
  },
  {
    title: "Bizzmania by BUET EDC — Champion",
    challenge: "Democratize education for developing nations.",
    concept: "HiveMind — \"Social Media for Education\" platform built on Feynman methodology, peer-to-peer knowledge exchange, resource centralization.",
    impact: "1st Place — selected for viability, user-centric design, and potential to reduce academic inequality.",
    photos: [],
    certificate: null,
  },
  {
    title: "IRC WASH Water Hackathon — Finalist",
    challenge: "Safe drinking water for coastal Bangladesh facing the \"salinity trap.\"",
    concept: "Deg-Bhapka Shuddha Jol — Traditional Distillation adapted for modern crisis. Dual-chamber clay oven, zero electricity, agricultural waste fuel.",
    impact: "Could serve 300 households (~1,500 people) at $18/month capital cost. Woman-led community management model.",
    photos: [
      "/images/wash-photo-1.jpg",
      "/images/wash-photo-2.jpg",
      "/images/wash-photo-3.jpg",
      "/images/wash-certificate.png",
    ],
    certificate: null,
  },
];

const certs = [
  {
    title: "Lean Six Sigma White Belt",
    org: "The Council for Six Sigma Certification (C.S.S.C.)",
    desc: "DMAIC mastery applied during RANCON industrial attachment.",
    image: "/images/lean-six-sigma-cert.png"
  },
  {
    title: "Advanced Applications of MS Office for Engineers",
    org: "AIPE BUET",
    desc: "Complex datasets and automated reporting, instrumental in 5,740-day simulation data management."
  },
  {
    title: "Undergraduate Class Representative (CR) Recognition",
    org: "Dept. of IPE, BUET",
    desc: "Stakeholder management and peer representation for 120+ students."
  }
];

function AchievementCard({ item, idx, onPhotoClick }: { item: typeof achievements[0]; idx: number, onPhotoClick: (src: string) => void }) {
  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="bg-card border border-border/50 p-6 group hover:border-primary/50 transition-colors"
    >
      <h4 className="text-lg font-serif text-foreground mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
      <div className="space-y-3 text-sm text-muted-foreground font-light">
        <div className="flex gap-2">
          <strong className="text-foreground font-medium shrink-0">The Challenge:</strong> 
          <TextReveal>{item.challenge}</TextReveal>
        </div>
        <div className="flex gap-2">
          <strong className="text-foreground font-medium shrink-0">Innovation/Concept:</strong> 
          <TextReveal>{item.concept}</TextReveal>
        </div>
        <div className="flex gap-2">
          <strong className="text-primary shrink-0">Impact/Recognition:</strong> 
          <TextReveal>{item.impact}</TextReveal>
        </div>
      </div>

      {/* Photo Carousel */}
      {item.photos.length > 0 && (
        <div className="mt-8">
          <p className="text-xs font-mono tracking-widest text-primary uppercase mb-4">Visual Record</p>
          <Carousel className="w-full">
            <CarouselContent>
              {item.photos.map((src, i) => (
                <CarouselItem key={i}>
                  <div 
                    className="relative aspect-[4/3] overflow-hidden border border-border/50 hover:border-primary/40 transition-colors cursor-zoom-in group/img bg-muted/20"
                    onClick={() => onPhotoClick(src)}
                  >
                    {/* Blurred Backdrop */}
                    <img 
                      src={src} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                    />
                    
                    {/* Main Image */}
                    <img
                      src={src}
                      alt={`${item.title} — photo ${i + 1}`}
                      className="relative w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-105 z-10"
                    />
                    
                    <div className="absolute inset-0 bg-black/5 group-hover/img:bg-transparent transition-colors duration-300 z-20" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {item.photos.length > 1 && (
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0 h-8 w-8 border-border/50 bg-background/50 hover:bg-primary hover:text-white transition-all" />
                <CarouselNext className="static translate-y-0 h-8 w-8 border-border/50 bg-background/50 hover:bg-primary hover:text-white transition-all" />
              </div>
            )}
          </Carousel>
        </div>
      )}
    </motion.div>
  );
}

export function Achievements() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const allPhotos: MediaItem[] = [
    ...achievements.flatMap(a => a.photos.map(url => ({ url, type: "image" as const, title: a.title }))),
    ...certs.filter(c => c.image).map(c => ({ url: c.image!, type: "image" as const, title: c.title }))
  ];

  const handlePhotoClick = (url: string) => {
    const idx = allPhotos.findIndex(p => p.url === url);
    setSelectedIdx(idx);
  };

  return (
    <section id="achievements" className="py-32 bg-background">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-4">Hall of Fame</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-foreground">Achievements</h3>
            </motion.div>

            <div className="space-y-10">
              {achievements.map((item, idx) => (
                <AchievementCard key={idx} item={item} idx={idx} onPhotoClick={handlePhotoClick} />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-4">Technical Endorsements</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-foreground">Certifications</h3>
            </motion.div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {certs.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-border/50 bg-card shadow-sm">
                    <div className="flex flex-col mb-1">
                      <h4 className="text-base font-serif text-foreground">{cert.title}</h4>
                      <time className="text-xs font-mono text-primary uppercase tracking-widest">{cert.org}</time>
                    </div>
                    <TextReveal className="text-sm text-muted-foreground font-light">{cert.desc}</TextReveal>
                    {cert.image && (
                      <div className="mt-4 relative aspect-[4/3] md:aspect-video overflow-hidden rounded border border-border/50 bg-muted/20 group/cert">
                        {/* Blurred Backdrop */}
                        <img 
                          src={cert.image} 
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                        />
                        
                        {/* Main Image */}
                        <img 
                          src={cert.image} 
                          alt={`${cert.title} Certificate`} 
                          className="relative w-full h-full object-contain hover:scale-[1.02] transition-transform duration-300 cursor-zoom-in z-10" 
                          onClick={() => handlePhotoClick(cert.image!)}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <MediaLightbox 
        items={allPhotos}
        index={selectedIdx}
        onClose={() => setSelectedIdx(null)}
        onNavigate={setSelectedIdx}
      />
    </section>
  );
}
