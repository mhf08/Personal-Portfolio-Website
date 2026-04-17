import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, FileText, ChevronDown, ChevronUp } from "lucide-react";

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
    ],
    certificate: "/docs/wash-certificate.pdf",
  },
];

const certs = [
  {
    title: "Lean Six Sigma White Belt",
    org: "The Council for Six Sigma Certification (C.S.S.C.)",
    desc: "DMAIC mastery applied during RANCON industrial attachment."
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

function AchievementCard({ item, idx }: { item: typeof achievements[0]; idx: number }) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <>
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
          <p><strong className="text-foreground font-medium">The Challenge:</strong> {item.challenge}</p>
          <p><strong className="text-foreground font-medium">Innovation/Concept:</strong> {item.concept}</p>
          <p><strong className="text-primary">Impact/Recognition:</strong> {item.impact}</p>
        </div>

        {/* Photo Gallery */}
        {item.photos.length > 0 && (
          <div className="mt-5">
            <p className="text-xs font-mono tracking-widest text-primary uppercase mb-3">Photos</p>
            <div className="grid grid-cols-3 gap-2">
              {item.photos.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxImg(src)}
                  className="aspect-square overflow-hidden border border-border/50 hover:border-primary/60 transition-colors"
                >
                  <img
                    src={src}
                    alt={`Hackathon photo ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Certificate PDF */}
        {item.certificate && (
          <div className="mt-5 border-t border-border/30 pt-5">
            <button
              onClick={() => setPdfOpen(!pdfOpen)}
              className="flex items-center gap-2 text-sm font-mono tracking-wide text-primary hover:text-primary/80 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Certificate</span>
              {pdfOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            <AnimatePresence>
              {pdfOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 border border-border/50 overflow-hidden">
                    <iframe
                      src={item.certificate}
                      title="IRC WASH Certificate"
                      className="w-full"
                      style={{ height: "480px" }}
                    />
                  </div>
                  <a
                    href={item.certificate}
                    download
                    className="inline-flex items-center gap-1.5 mt-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FileText className="w-3 h-3" />
                    Download PDF
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImg}
              alt="Hackathon photo"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
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
                <AchievementCard key={idx} item={item} idx={idx} />
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
                    <p className="text-sm text-muted-foreground font-light">{cert.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
