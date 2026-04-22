import { motion } from "framer-motion";
import { useState } from "react";
import { MediaLightbox, MediaItem } from "@/components/ui/MediaLightbox";
import { TextReveal } from "@/components/ui/TextReveal";

const photoSeries = [
  {
    title: "Series 1: Echoes of the Genba",
    subtitle: "Capturing the soul of the 'Actual Place'",
    description: "Influenced by Wabi-Sabi philosophy, exploring the beauty of the transient and weathered. From the cold precision of steel to the organic decay of the streets, documenting the 'Genba'—the actual place where life happens. Stripping away colours reveals the true essence of a moment — the intricate dance of light and shadow.",
    noteLabel: "Genba Note",
    noteType: "technical",
    heroImage: { url: "/images/genba/1649071128648-01.jpg", caption: "Light doesn't just illuminate; it defines the weight of the world." },
    images: [
      { url: "/images/genba/1670329146012.jpg", caption: "The ghost of a machine, etched in rust and steel." },
      { url: "/images/genba/1671016098360.jpg", caption: "Framing the urban chaos; shadows caught in a lattice of steel." },
      { url: "/images/genba/1671120773254.jpg", caption: "Humanity is often found in the things we leave behind." },
      { url: "/images/genba/1671120773270.jpg", caption: "A symphony of textures; where concrete meets the ephemeral." },
      { url: "/images/genba/1671120773287.jpg", caption: "The Genba is not just a place; it's a state of observation." },
      { url: "/images/genba/1671120773312.jpg", caption: "The street is a living organism, pulsing with forgotten stories." },
      { url: "/images/genba/PXL_20220315_164108162.jpg", caption: "Rhythm found in the mundane; an engineer's dream of order." },
      { url: "/images/genba/PXL_20250602_160018670 (4).jpg", caption: "In the world of chances, the result is beautifully uncertain." },
      { url: "/images/genba/PXL_20251222_160206575.jpg", caption: "Finality in focus. The moment the chaos becomes a composition." },
    ]
  },
  {
    title: "Series 2: The Design of Nature",
    subtitle: "Documenting the world's most complex self-sustaining systems",
    description: "A study of the scale and balance found in the natural world. From the sprawling delta of the Bengal to the intricate patterns of forest flora — macro and micro architectures that exist without human intervention.",
    noteLabel: "Nature's Nuances",
    noteType: "organic",
    heroImage: { url: "/images/nature/Copy of 2008016_Mostofa Habib Fardin_01.jpg", caption: "Power lines tracing the quiet geometry of a submerged world." },
    images: [
      { url: "/images/nature/1673166717782.jpg", caption: "A solitary silhouette finding its rhythm in the fading light." },
      { url: "/images/nature/1656747767552.jpg", caption: "The delicate, helical design of a system built to climb." },
      { url: "/images/nature/1673166839760.jpg", caption: "A straight path through the soft, shifting gradients of the delta." },
      { url: "/images/nature/1673166772052.jpg", caption: "Atmospheric patterns drifting across an invisible grid." },
      { url: "/images/nature/Copy of 2008016_Mostofa Habib Fardin_02.jpg", caption: "The intricate, recursive beauty of nature's own blueprints." },
    ]
  }
];

const imageRevealVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export function Photography() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const allMedia: MediaItem[] = photoSeries.flatMap((s) =>
    [...(s.heroImage ? [s.heroImage] : []), ...s.images].map((img) => ({
      url: img.url,
      type: "image" as const,
      title: img.caption || s.title
    }))
  );

  return (
    <section id="photography" className="py-32 bg-card border-t border-border/50">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-4">The Observed World</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-8">Photography</h3>

          <blockquote className="text-xl md:text-2xl font-light italic text-muted-foreground leading-relaxed border-l-2 border-primary pl-6 text-left relative">
            <span className="absolute -left-3 top-[-10px] text-5xl text-primary/20 font-serif">"</span>
            Engineering and photography are two sides of the same coin: Observation. Whether I am training a predictive model to identify patterns in a supply chain or waiting for the perfect light to capture a landscape, the goal remains the same: identifying structure, finding balance, and achieving technical excellence.
          </blockquote>
        </motion.div>

        <div className="space-y-40">
          {photoSeries.map((series, sIdx) => {
            const seriesStartIndex = photoSeries.slice(0, sIdx).reduce((acc, s) => acc + (s.heroImage ? 1 : 0) + s.images.length, 0);

            return (
              <div key={sIdx} className="space-y-16">
                {/* Series Header: Hero Shot + Narrative Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
                    <div className="space-y-2">
                      <h4 className="text-3xl font-serif text-foreground">{series.title}</h4>
                      <p className="text-primary font-mono text-sm tracking-[0.2em] uppercase">{series.subtitle}</p>
                    </div>
                    <div className="h-px w-12 bg-primary/30" />
                    <TextReveal className="text-muted-foreground font-light leading-relaxed text-lg" delay={0.2}>
                      {series.description}
                    </TextReveal>

                    <div className="pt-4 flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40">
                      <span className="w-8 h-px bg-border" />
                      Series Archive {sIdx + 1}
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    {series.heroImage && (
                      <motion.div
                        variants={imageRevealVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "0px" }}
                        className="w-full relative overflow-hidden group rounded-sm shadow-2xl cursor-zoom-in aspect-[16/10]"
                        onClick={() => setSelectedIdx(seriesStartIndex)}
                      >
                        {/* Blurred Backdrop for the Hero (Subtle) */}
                        <img
                          src={series.heroImage.url}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 scale-110"
                        />
                        <img
                          src={series.heroImage.url}
                          alt={`${series.title} Hero`}
                          className="relative w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.03] z-10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-8">
                          <p className="text-white font-mono text-xs tracking-widest uppercase">{series.heroImage.caption}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Narrative Grid: Masonry with increased spacing and hover details */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
                  {series.images.map((img, iIdx) => (
                    <motion.div
                      key={iIdx}
                      variants={imageRevealVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "0px" }}
                      transition={{ delay: iIdx * 0.05 }}
                      className="relative overflow-hidden group break-inside-avoid rounded-sm shadow-md cursor-zoom-in bg-muted/10"
                      onClick={() => setSelectedIdx(seriesStartIndex + (series.heroImage ? 1 : 0) + iIdx)}
                    >
                      <img
                        src={img.url}
                        alt={`Photography ${iIdx + 1}`}
                        className="w-full h-auto grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                      />

                      {/* Adaptive Note Overlay */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center
                        ${series.noteType === 'organic' ? 'bg-emerald-950/90' : 'bg-background/80'}`}>

                        <div className={`w-8 h-px mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500
                          ${series.noteType === 'organic' ? 'bg-emerald-400' : 'bg-primary'}`} />

                        <p className={`mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75
                          ${series.noteType === 'organic' ? 'text-emerald-400 font-serif italic text-base tracking-normal' :
                            'text-primary font-mono uppercase tracking-[0.3em] text-[10px]'}`}>
                          {series.noteLabel}
                        </p>

                        <p className={`text-xs font-light leading-relaxed max-w-[180px] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150
                          ${series.noteType === 'organic' ? 'text-emerald-50/90' : 'text-foreground'}`}>
                          {img.caption}
                        </p>
                      </div>

                      {/* Subtle corner detail */}
                      <div className={`absolute bottom-4 right-4 w-1.5 h-1.5 border-r border-b transition-colors duration-500
                        ${series.noteType === 'organic' ? 'border-emerald-500/40 group-hover:border-emerald-400' : 'border-primary/40 group-hover:border-primary'}`} />
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <MediaLightbox
        items={allMedia}
        index={selectedIdx}
        onClose={() => setSelectedIdx(null)}
        onNavigate={setSelectedIdx}
      />
    </section>
  );
}
