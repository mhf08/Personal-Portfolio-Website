import { motion } from "framer-motion";

const photoSeries = [
  {
    title: "Series 1: Echoes of the Genba",
    subtitle: "Capturing the soul of the 'Actual Place'",
    description: "Influenced by Wabi-Sabi philosophy, exploring the beauty of the transient and weathered. From the cold precision of steel to the organic decay of the streets, documenting the 'Genba'—the actual place where life happens. Stripping away colours reveals the true essence of a moment — the intricate dance of light and shadow.",
    images: [
      "/images/photo-bw-1.png",
      "/images/photo-bw-2.png",
      "/images/photo-bw-3.png",
      "/images/photo-bw-4.png",
    ]
  },
  {
    title: "Series 2: The Design of Nature",
    subtitle: "Documenting the world's most complex self-sustaining systems",
    description: "A study of the scale and balance found in the natural world. From the sprawling delta of the Bengal to the intricate patterns of forest flora — macro and micro architectures that exist without human intervention.",
    images: [
      "/images/photo-nature-1.png",
      "/images/photo-nature-2.png",
    ]
  }
];

export function Photography() {
  return (
    <section id="photography" className="py-32 bg-card border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
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

        <div className="space-y-32">
          {photoSeries.map((series, idx) => (
            <div key={idx} className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="max-w-2xl"
              >
                <h4 className="text-2xl font-serif text-foreground mb-2">{series.title}</h4>
                <p className="text-primary font-mono text-sm tracking-wide mb-4">{series.subtitle}</p>
                <p className="text-muted-foreground font-light">{series.description}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {series.images.map((img, iIdx) => (
                  <motion.div
                    key={iIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: iIdx * 0.1 }}
                    className={`relative overflow-hidden group aspect-[3/4] ${iIdx === 0 && series.images.length === 2 ? 'lg:col-span-2 aspect-video' : ''} ${iIdx === 1 && series.images.length === 2 ? 'lg:col-span-2 aspect-video' : ''}`}
                  >
                    <img 
                      src={img} 
                      alt={`Photography ${iIdx + 1}`} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
